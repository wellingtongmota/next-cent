import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { inter } from "@/fonts"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { PropsWithChildren } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nextcent",
  description: "Landing Page"
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-Br" suppressHydrationWarning>
      <body
        className={cn(
          "grid min-h-dvh grid-rows-[auto_1fr_auto] antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {/* <header>nav</header> */}
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
