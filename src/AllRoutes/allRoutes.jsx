import { Routes , Route } from "react-router"
import { Todo } from "../Components/Todo"
import { TodoDetails } from "../Components/TodoDetails"


export const AllRoutes = () => {

    return(

        <Routes>
            <Route path ="/" element = {<Todo/>} />
            <Route path ="todos/:id" element = {<TodoDetails/>} />
        </Routes>
    )
}