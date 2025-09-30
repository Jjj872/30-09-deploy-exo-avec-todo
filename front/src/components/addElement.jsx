import { useState } from "react"

export default function AddElement({ onAdd }){
    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title.trim()) return
        onAdd(title)
        setTitle("") // Reset du titre aprés ajout
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nouvelle tache ..." 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Ajouter</button>
        </form>
    )
}