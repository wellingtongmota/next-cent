import { Button } from "../ui/button"

export function Hero() {
  return (
    <section className="wrapper bg-accent px-4 py-4 sm:px-9 sm:py-6 lg:px-18 lg:py-12 2xl:px-36 2xl:py-24">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="">
          <h2 className="text-neutral-gray headline-3 sm:headline-2 2xl:headline-1">
            Lessons and insights
          </h2>
          <h2 className="text-primary headline-3 sm:headline-2 2xl:headline-1">
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
          className="justify-self-center object-center md:justify-self-end"
        />
      </div>
    </section>
  )
}
