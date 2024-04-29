import { useState } from "react"

function Update(){
    
    let [id, setId] = useState()
    let [name, setName] = useState()
    let [age, setAge] = useState()
    let [nativee, setNativee] = useState()

    const update = () => {
        let updatedDate = {id, name, age, nativee}

        fetch(`http://localhost:9090/data/update`, {
            method : "PUT",
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(updatedDate)
        }).then((res) => {
            if(!res.ok){
                throw new Error("Not Working")
            }else{
                return res.json()
            }
        }).then((val) => console.log(val))
        .catch((val) => console.log(val))
    }
    return <>
        <div>
        <input type="number" onChange={(e) => setId(e.target.value)}/>
 
        <p>Name : 
        <input type="text" onChange={(e) => setName(e.target.value)}/></p>
        <p>Age : 
        <input type="number" onChange={(e) => setAge(e.target.value)}/></p>
        <p>Native : 
        <input type="text" onChange={(e) => setNativee(e.target.value)}/></p>

        <button onClick={update}>Update</button>
        </div>
        </>
}

export default Update
