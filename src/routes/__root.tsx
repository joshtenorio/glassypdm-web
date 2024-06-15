import Navbar from '@/components/navbar'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { SignedIn, SignedOut, SignIn } from '@clerk/clerk-react'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
    <SignedOut>
      <div className='flex flex-row items-center w-screen h-screen justify-center'>
        <SignIn />
      </div>
    </SignedOut>
    <SignedIn>
      <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <Navbar />
      <Outlet />
      </ThemeProvider>
    </SignedIn>
    </>
  ),
})
