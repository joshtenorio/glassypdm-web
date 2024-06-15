import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className='p-2 space-y-4'>
      <div>The glassyPDM web app is licensed under the GNU Affero General Public License.</div>
      <Button variant={"outline"} asChild>
        <a href='https://github.com/joshtenorio/glassypdm-web' target='_blank' className='font-semibold'>Source Code on GitHub</a>
      </Button>
    </div>
  )
}
