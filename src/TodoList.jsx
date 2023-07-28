import { useState } from "react"

function TodoList({names}){
    const lista = names.map((name, index) => <li key={name + index}>{name}</li>)
    const [user,setUser] = useState("")
    const users = ((e)=>{
        const value =e.target.value
        setUser(value)
    })
    const pusher = ()=>{
        const change= names.push(name => <li>{name}</li>)
    }

    return(
        <form>
            <ul>HERE WE HAVE A LIST: {lista}</ul>
            <input type="text" name="User" onChange={users}/>
            <button onClick={pusher} type="submit">Push</button>
        </form>
    )
}
export default TodoList