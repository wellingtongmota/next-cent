import { LogoIcon } from "@/components/icons/logo-icon"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SidebarSheet } from "./sidebar-sheet"
import { Menu } from "lucide-react"

const navLinks = ["Home", "Service", "Feature", "Product", "Testimonial", "FAQ"]

export function Navbar() {
  return (
    <header className="wrapper bg-accent sticky top-0 z-10 flex h-20 items-center gap-2">
      <div className="flex flex-1 items-center gap-2">
        <LogoIcon />
        <h1 className="headline-4 sm:headline-3 text-secondary">Nextcent</h1>
      </div>
      <nav className="hidden flex-1 justify-center md:flex">
        <ul className="flex gap-8 xl:gap-12">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href="/#" className="hover:text-primary">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-1 justify-end gap-2 xl:gap-3.5">
        <Button variant="link">Login</Button>
        <Button>Sign up</Button>
      </div>

      <div className="ml-auto block md:hidden">
        <SidebarSheet links={navLinks}>
          <Button variant="ghost" size="icon">
            <Menu className="size-6" />
          </Button>
        </SidebarSheet>
      </div>
    </header>
  )
}
