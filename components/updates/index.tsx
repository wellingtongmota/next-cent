import Link from "next/link"
import { Button } from "../ui/button"
import { MoveRight } from "lucide-react"

type TSession = {
  img: string
  text: string
  url: string
}

const sessions: TSession[] = [
  {
    img: "/updates/1.jpg",
    text: "Creating Streamlined Safeguarding Processes with OneRen",
    url: "/#"
  },
  {
    img: "/updates/2.jpg",
    text: "What are your safeguarding responsibilities and how can you manage them?",
    url: "/#"
  },
  {
    img: "/updates/3.jpg",
    text: "Revamping the Membership Model with Triathlon Australia",
    url: "/#"
  }
]

export function Updates() {
  return (
    <div className="wrapper flex flex-col items-center px-4 py-4 sm:px-9 lg:px-18 2xl:px-36">
      <h3 className="headline-3 text-neutral-gray max-w-lg text-center">
        Caring is the new marketing
      </h3>
      <p className="text-neutral-gray max-w-lg text-center">
        {`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy.`}
      </p>

      <div className="animate-fade grid w-full place-items-center items-center gap-4 pt-8 opacity-0 sm:grid-cols-3">
        {sessions.map(({ img, text, url }, index) => (
          <div key={index} className="relative flex w-full max-w-80 flex-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img}
              alt="update"
              className="aspect-video w-full overflow-hidden rounded-xl object-cover"
            />

            <div className="bg-accent relative mx-4 flex -translate-y-2/4 flex-col items-center gap-3 rounded-xl p-2 text-center shadow-lg">
              <p className="text-neutral-gray text-sm">{text}</p>
              <Link href={url}>
                <Button className="text-primary" variant="link">
                  Read more
                  <MoveRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
