import { Clients } from "@/components/clients"
import { Hero } from "@/components/hero"
import { Unlock } from "@/components/unlock"

export default function Home() {
  return (
    <div>
      <Hero />
      <Clients />
      <Unlock />
    </div>
  )
}
