import { Achievements } from "@/components/achievements"
import { Clients } from "@/components/clients"
import { Hero } from "@/components/hero"
import { Unlock } from "@/components/unlock"
import { Updates } from "@/components/updates"

export default function Home() {
  return (
    <div>
      <Hero />
      <Clients />
      <Unlock />
      <Achievements />
      <Updates />
    </div>
  )
}
