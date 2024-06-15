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
                    <Link to="/"><NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-semibold text-xl")}>glassyPDM</NavigationMenuLink></Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/about"><NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink></Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        <ModeToggle />
        </NavigationMenu>
        <Separator />
    </div>
  )
}

export default Navbar