import { Button } from "~/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        Project Navbar TODO
        <Button>Recent Changes</Button>
        <Button>History</Button>
        <Button>Files</Button>
        {children}
    </div>
  )
}