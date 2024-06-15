import { Link } from "@tanstack/react-router"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu"
import { ModeToggle } from "./mode-toggle"
import { Separator } from "./ui/separator"
import { cn } from "@/lib/utils"

function Navbar() {
  return (
    <div>
        <NavigationMenu className="p-2 space-x-2">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild><Link to="/" className={cn(navigationMenuTriggerStyle(), "font-semibold text-2xl")}>glassyPDM</Link></NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild><Link to="/about" className={cn(navigationMenuTriggerStyle(), "font-semibold text-lg")}>About</Link></NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        <ModeToggle />
        </NavigationMenu>
        <Separator />
    </div>
  )
}

export default Navbar