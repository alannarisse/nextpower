const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data =  res.json()
  return data
}

export default async function Home() {
  const todos = await fetchTodos()
  console.log(typeof(todos))
  return (
    <main>
      <h1>Statically Generated</h1>
      {todos.map((todo) => (
      <div>
        <p key={todo.id}>{todo.title}</p>
      </div>
      ))}
    </main>
  )
}
