import { useState } from "react"

function Post(){

    let [name, setName] = useState()
    let [age, setAge] = useState()
    let [nativee, setNativee] = useState()
 
    const handleData = () => {
        let data = {name, age, nativee}
        
        fetch(`http://localhost:9090/data/add`, {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(data)

        }).then((res) => {
            if(!res.ok){
                throw new Error("not working!")
            }else{
                return res.json()
            }
        }) .then((val) => console.log(val))
            .catch((err) => console.log(err))
    }

    const focusName = () => {
        let inp1 = document.getElementById("inp1").value
        setName(inp1)
    }

    const focusAge = (e) => {
        setAge(e.target.value)
    }


    
    return <>

        <div>
        <p>
        Name : <input type="text" id="inp1" onChange={focusName}/>
        </p>
        <p>
       Age : <input type="number" id="inp2" onChange={focusAge} />
        </p>
        <p>
        Native : <input type="text" id="inp3" onChange={(e) => setNativee(e.target.value)} />
        </p>
        </div>
        <button onClick={handleData}>Add</button>
        </>
}

export default Post
