import { SignOutButton } from '@clerk/nextjs';
import React from 'react'
import { Button } from '~/ui/button';

function Page() {
  return (
    <div>
      <Button><SignOutButton/></Button>
    </div>
  )
}

export default Page