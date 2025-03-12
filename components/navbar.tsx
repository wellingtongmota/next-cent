import { LogoIcon } from "@/components/icons/logo-icon"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const navLinks = ["Home", "Service", "Feature", "Product", "Testimonial", "FAQ"]

export default function Navbar() {
  return (
    <header className="wrapper bg-accent flex h-20 items-center gap-2">
      <div className="flex flex-1 items-center gap-2">
        <LogoIcon />
        <h1 className="headline-3 text-secondary">Nextcent</h1>
      </div>
      <nav className="flex flex-1 justify-center">
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
    </header>
  )
}
