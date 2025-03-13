"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import Link from "next/link"
import { useState } from "react"

type SidebarSheetProps = {
  children: React.ReactNode
  links: Array<string>
}

export function SidebarSheet({ children, links }: SidebarSheetProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div>{children}</div>
      </SheetTrigger>
      <SheetContent className="z-50">
        <SheetHeader>
          <SheetTitle className="text-xl">Menu</SheetTitle>
          <SheetDescription className="sr-only">Page menu</SheetDescription>
        </SheetHeader>
        <div>
          <div className="block md:hidden">
            <nav className="grid gap-4 p-4">
              {links.map((link, index) => (
                <Link href="/#" key={index} onClick={() => setOpen(false)}>
                  {link}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
