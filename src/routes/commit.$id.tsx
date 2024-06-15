import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/commit/$id')({
  component: () => <div>Hello /commit/$id!</div>
})