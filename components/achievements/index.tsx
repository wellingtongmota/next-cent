import {
  Bookmark,
  CreditCard,
  Handshake,
  LucideProps,
  UsersRound
} from "lucide-react"

type TAchievement = {
  icon: React.ElementType<LucideProps>
  value: string
  description: string
}

const achievements: TAchievement[] = [
  {
    icon: UsersRound,
    value: "2,245,341",
    description: "Members"
  },
  {
    icon: Handshake,
    value: "46,328",
    description: "Clubs"
  },
  {
    icon: Bookmark,
    value: "828,867",
    description: "Event Bookings"
  },
  {
    icon: CreditCard,
    value: "1,926,436",
    description: "Payments"
  }
]

export function Achievements() {
  return (
    <div className="wrapper bg-accent px-4 py-4 sm:px-9 sm:py-6 lg:px-18 lg:py-12 2xl:px-36 2xl:py-24">
      <div className="grid w-full items-center gap-8 md:grid-cols-2">
        <div>
          <h3 className="headline-3 text-neutral-gray">
            Helping a local
            <br />
            <span className="text-primary">business reinvent itself</span>
          </h3>
          <p className="text-neutral-gray text-base">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          {achievements.map(({ icon: Icon, description, value }, index) => (
            <div key={index} className="flex items-center gap-2">
              <Icon className="text-primary size-7 sm:size-10" />
              <div>
                <h4 className="headline-4 text-neutral-gray">{value}</h4>
                <p className="text-neutral-gray text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
