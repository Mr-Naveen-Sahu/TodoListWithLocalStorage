import { createContext,useContext } from "react";

export const TodoContext = createContext({
     todos: [
        {
            id : 1,
            todo: "todo massege",
            completed: false
        }
     ],

     addTodo: (todo)=>{},
     updateTodo: (id,todo)=>{},
     deleteTodo: (id)=>{},
     toggleComplete: (id)=>{}
})

export const TodoProvider = TodoContext.Provider;

export const UseTodo =()=>{
     return useContext(TodoContext);
}