import { useEffect, useState } from "react"
import Element from "../components/element"
import AddElement from "../components/addElement"

export default function TodoPage(){
    // Récupérer tous les éléments de liste
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)



    // Charger TOUS les éléments de liste
    const fetchTodos = async () => {
        try {
            // Mettre le loading a true
            setLoading(true)

            // Récuperer les données du back
            const req = await fetch("http://localhost:3000/api/v1/todos")
            if(!req.ok) throw new Error("Erreur lors du chargement des taches")
            
            const datas = await req.json()
            setTodos(datas)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    const deleteElement = async (id) => {
        try {
            const req = await fetch(`http://localhost:3000/api/v1/todos/${id}`, {method: "DELETE"})
            if(!req.ok) throw new Error("Impossible de supprimer la tâche.")
            
            // Mise a jour local du state
            setTodos(prev => prev.filter(todo => todo._id !== id))

            // Chercher dans le state todos l'élement qui a été supprimer du state
            // Ca aura pour conséquence de déclancehr un rendu du composant sans avoir a faire un autre appel au back
        } catch (error) {
            setError(error.message)
        }
    }

    const addTodo = async (title) => {
        try {
            const req = await fetch('http://localhost:3000/api/v1/todos', {
                method:"POST",
                headers:{ "Content-Type": "application/json"},
                body: JSON.stringify({ title })
            })
            if(!req.ok) throw new Error("Impossible d'ajouter la tâche")

            const res = await req.json()

            // On ajoute directement au state (plus besoin de re-fetch)
            setTodos(prev => [...prev, res.todo])

        } catch (error) {
            setError(error.message)
        }
    }

    if(loading) return <p>Chargement des données en cours</p>
    if(error) return <p style={{color: "red"}}>{error}</p>

return (
    <>
    <h1>Ajouter une tache</h1>
    <AddElement onAdd={addTodo} />
    <ul>
        {todos.map( todo => (
            <Element 
                key={todo._id}
                id={todo._id}
                title={todo.title}
                isCompleted={todo.isCompleted}
                creationDate={todo.creationDate}
                completedDate={todo.completedDate} 
                onDelete={() => deleteElement(todo._id)}
                />
        ))}
    </ul>
    </>
)

    // Afficher les éléments de liste en deux parties : à compléter / complétée 

}