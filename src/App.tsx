import './index.css'
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'
function App() {
  return (
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <h1>Vite + React</h1>
          <Button onClick={() => console.log("click!")}>
            uWu
          </Button>
      </ThemeProvider>
  )
}

export default App
