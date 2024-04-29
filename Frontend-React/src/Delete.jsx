import { useState } from "react"

function Delete(){
    
    let [id, setId] = useState()

    const del = () => {
        
        fetch(`http://localhost:9090/data/del/${id}`, {
            method : "DELETE"
        })
    }

    const delAll = () => {
        
        fetch(`http://localhost:9090/data/delete`, {
            method : "DELETE"
        })
    }

    return <>

        <input type="number" onChange= {(e) => setId(e.target.value)}/>
        <button onClick={del}>Delete</button>
        <button onClick={delAll}>DeleteAll</button>
        </>
}

export default Delete
