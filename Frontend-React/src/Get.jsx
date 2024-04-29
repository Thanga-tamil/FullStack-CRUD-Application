import { useState } from "react"

function Get(){

    let [name, setName] = useState()
    let [data, setData] = useState()


    const showDate = () => {
        
        fetch(`http://localhost:9090/data/${name}`, {
            method : "GET"
        }).then((res) => {
            if(!res.ok){
                throw new Error("404 Error fount ")
            }else{
                return res.json()
            }
        }).then((val) => {setData(val)
            console.log(val)})
        .catch((err) => console.log(err))
    } 


    return <>

        <div>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <p>Id : {data && data.id} </p>
        <p>Name : {data && data.name} </p>
        <p>Age : {data && data.age} </p>
        <p>Native : {data && data.nativee}</p>
        <button onClick={showDate}>Check</button>
        </div>
        </>
}

export default Get
