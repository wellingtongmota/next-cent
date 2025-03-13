import { Button } from "../ui/button"

export function Hero() {
  return (
    <section className="wrapper bg-accent h-[calc(80dvh-5rem)] px-18 py-12 2xl:px-36 2xl:py-24">
      <div className="flex h-full w-full flex-wrap items-center gap-12 xl:gap-24">
        <div className="min-w-44 flex-1">
          <h2 className="text-neutral-gray headline-2 2xl:headline-1">
            Lessons and insights
          </h2>
          <h2 className="text-primary headline-2 2xl:headline-1">
            from 8 years
          </h2>
          <p className="text-neutral-gray text-base/loose">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button size="lg" className="mt-8">
            Register
          </Button>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero_illustration.svg"
          alt="Illustration"
          className="h-full object-center"
        />
      </div>
    </section>
  )
}
