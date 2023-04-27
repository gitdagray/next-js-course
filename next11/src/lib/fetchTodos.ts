
export default async function fetchTodos() {
    const res = await fetch(`http://127.0.0.1:3500/todos`)

    const todos: Todo[] = await res.json()

    return todos
}