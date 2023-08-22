'use client'

import { useState, useEffect } from "react"

export const revalidate = 0
// export const metadata = {
//   title: 'Home Page',
//   description: 'Generated by create next app',
// }


export default function CSR() {
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    const fetchTodos = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json()
        setTodos(data)
    }
    fetchTodos()

  }, [])
  console.log(typeof(todos))
  return (
    <main>
      <h1>Client Side Generated</h1>
      {todos.map((todo) => (
      <div>
        <p key={todo.id}>{todo.title}</p>
      </div>
      ))}
    </main>
  )
}
