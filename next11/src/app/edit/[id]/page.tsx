import Todo from "@/app/components/Todo"
import fetchTodo from "@/lib/fetchTodo"
import { notFound } from "next/navigation"

export const revalidate = 0

type Props = {
    params: {
        id: string
    }
}

export default async function page({ params: { id } }: Props) {

    const todo = await fetchTodo(id)

    if (!todo) notFound()

    return (
        <Todo {...todo} />
    )
}