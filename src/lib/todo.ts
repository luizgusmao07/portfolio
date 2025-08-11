export type TodoItem = {
  id: string
  text: string
  done?: boolean
}

export const systemDesignTodo: TodoItem[] = [
  { id: 'tokens', text: 'Color tokens: neutral base + purple accent' },
  { id: 'radii', text: 'Radius scale and border system' },
  { id: 'typography', text: 'Typography scale and utilities' },
  { id: 'layout', text: 'Layout primitives: header, footer, container' },
  { id: 'components', text: 'Add core shadcn/ui components' },
  { id: 'theme', text: 'Theme toggle and dark mode polish' },
  { id: 'navigation', text: 'Navigation and section skeletons' },
  { id: 'a11y', text: 'Accessibility and focus states review' },
]
