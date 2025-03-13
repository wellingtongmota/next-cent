import { LogoIcon } from "@/components/icons/logo-icon"
import { Instagram, Send, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

const companyLinks = [
  "About Us",
  "Blog",
  "Contact Us",
  "Pricing",
  "Testimonials"
]

const supportLinks = [
  "Help Center",
  "Terms of Service",
  "Legal",
  "Privacy Policy",
  "Status"
]

export function Footer() {
  return (
    <footer className="wrapper bg-secondary flex flex-col items-center px-4 py-4 text-white sm:px-9 sm:py-6 lg:px-18 lg:py-12 2xl:px-36 2xl:py-24">
      <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <div className="col-span-2 grid gap-4 sm:gap-6">
          <div className="flex flex-1 items-center gap-2">
            <LogoIcon />
            <h1 className="headline-4">Nextcent</h1>
          </div>
          <div className="text-white/90">
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/#" className="rounded-full bg-white/10 p-2">
              <Instagram className="h-5 w-5" />
            </Link>

            <Link href="/#" className="rounded-full bg-white/10 p-2">
              <Twitter className="h-5 w-5" />
            </Link>

            <Link href="/#" className="rounded-full bg-white/10 p-2">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="headline-4">Company</h4>
          <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href="/#"
                  className="text-sm font-light text-white/90 hover:text-white"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="headline-4">Support</h4>
          <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
            {supportLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href="/#"
                  className="text-sm font-light text-white/90 hover:text-white"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2">
          <h4 className="headline-4">Stay up to date</h4>

          <div className="mt-4 flex max-w-96 rounded-lg bg-white/10 p-2 sm:mt-6">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 pl-1 focus-visible:outline-none"
            />
            <Button size="icon" variant="ghost" className="hover:bg-white/20">
              <Send />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
