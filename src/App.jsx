import { useEffect, useState } from 'react'
import { TodoProvider } from './components/Context';
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem"

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo =(todo)=>{
      setTodos((pre)=>[...pre,{id:Date.now(), ...todo}])
  }

  const updateTodo = (id,todo)=>{
    setTodos((pre)=>pre.map((cu)=>{
       return  cu.id === id? todo: pre;
    }))
  }

  const deleteTodo = (id)=>{
         setTodos((pre)=>{
            return pre.filter((item)=>item.id!== id)
         })
  }

  const toggleComplete =(id)=>{
      setTodos((pre)=>pre.map((cu)=>cu.id===id?{...cu, completed: !cu.completed}:cu))
  }

  useEffect(()=>{
     const first = JSON.parse(localStorage.getItem("todos"));
       if(first){

         setTodos(first);
       }else{
        setTodos([])
       }
  },[]);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,toggleComplete,updateTodo}}>
           
           <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      
                        {todos.map((todo)=>(
                           <div  className='w-full'>
                              <TodoItem todo={todo} />
                           </div>
                        ))}
                    </div>
                </div>
            </div>

    </TodoProvider>
  )
}

export default App
