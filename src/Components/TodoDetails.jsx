import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"

export const TodoDetails = () => {

    const [todo ,setTodo] = useState({})
    const {id} = useParams()
    useEffect( () => {getData()},[])

    const getData = () => {
        axios.get(`http://localhost:2030/Todos/${id}`).then( (res) =>{
            setTodo(res.data)
        })
    }

    // function HandleDelete(id){

    //     let result = todo.filter( (el) => {
    //         return el.id !== id
    //     })

    //     setTodo([...result])
    // }

    console.log(todo)

    return(
        <div>
               <div>
                   {todo.title} {todo.status} 
               </div>
        </div>
    )
}
