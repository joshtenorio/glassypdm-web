"use client"
import Link from 'next/link'
import React from 'react'
import { cn } from '~/lib/utils'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '~/ui/navigation-menu'
import { Separator } from '~/ui/separator'

interface SimpleNavbarItemProps {
    href: string
    desc: string
}
function SimpleNavbarItem(props: SimpleNavbarItemProps) {
    return (
        <NavigationMenuItem>
        <Link href={props.href} legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-normal text-base my-1")}>
                {props.desc}
            </NavigationMenuLink>
        </Link>
        </NavigationMenuItem>
    )
}

function Navbar() {
  return (
    <div>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-normal text-5xl my-1")}>
                            glassyPDM
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <SimpleNavbarItem href="/files" desc="Project Files"/>
                <SimpleNavbarItem href="/commit" desc="Project History"/>
                <SimpleNavbarItem href="/about" desc="About"/>
                <SimpleNavbarItem href="/login" desc="Login"/>
            </NavigationMenuList>
        </NavigationMenu>
        <Separator />
    </div>
  )
}

export default Navbar