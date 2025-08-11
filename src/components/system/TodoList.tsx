import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { systemDesignTodo, type TodoItem } from '@/lib/todo'

export function TodoList() {
  const [items, setItems] = useState<TodoItem[]>(systemDesignTodo)

  const toggle = (id: string) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item)))
  }

  return (
    <ul className="grid gap-2">
      {items.map((item) => (
        <li key={item.id} className="flex items-start gap-3">
          <Checkbox
            id={`todo-${item.id}`}
            checked={!!item.done}
            onCheckedChange={() => toggle(item.id)}
          />
          <label
            htmlFor={`todo-${item.id}`}
            className={item.done ? 'text-muted-foreground line-through' : ''}
          >
            {item.text}
          </label>
        </li>
      ))}
    </ul>
  )
}
