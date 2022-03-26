import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/action";
import { Link } from "react-router-dom";

export const Todo = () => {

    const [text,setText] = useState("");
    const dispatch = useDispatch();
    
    useEffect( () => {getData()},[])

    const todos = useSelector( (store) => store.todo)
    
    const HandleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:2030/Todos",{title :text , status : "false"}).then(getData)
    }

    const getData = () => {
        axios.get("http://localhost:2030/Todos").then( (res) => {
            dispatch(addTodo(res.data))
        })
    }

    function deleteTodo(id){

        axios.delete(`http://localhost:2030/Todos/${id}`).then(getData)
    }

    console.log(todos)

    return(

        <div>
            <h1>Add Todo</h1>

            <form onSubmit={HandleSubmit} >
                
                <input type="text" id="text" placeholder="enter your todo" onChange={ (e) => setText(e.target.value)}/>
                <input type="submit" id="submit" value="submit" />
            </form>

            {todos.map( (el) => (
                
                <div key={el.id}>
                    <Link to = {`todos/${el.id}`}> {el.title}</Link>
                    {el.status} 
                    <button onClick={() =>{deleteTodo(el.id)}}>Delete</button>
                </div>

            ))}
        </div>
    )
}