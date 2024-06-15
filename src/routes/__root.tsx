import { SignedIn, SignedOut, SignIn } from '@clerk/clerk-react'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
    <SignedOut>
      <div className='flex flex-row items-center w-screen h-screen justify-center'>
        <SignIn />
      </div>
    </SignedOut>
    <SignedIn>
      <Outlet />
      <TanStackRouterDevtools />
    </SignedIn>
    </>
  ),
})
