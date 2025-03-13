import { Button } from "@/components/ui/button"

export function Unlock() {
  return (
    <div className="wrapper flex flex-col items-center py-5 2xl:py-10">
      <div className="grid w-full items-center gap-8 md:grid-cols-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/unlock_illustration.svg"
          alt="Illustration"
          className="h-full max-h-96 object-center xl:justify-self-center 2xl:justify-self-end"
        />
        <div className="max-w-xl space-y-4">
          <h3 className="headline-3 text-neutral-gray">
            The unseen of spending three years at Pixelgrade
          </h3>
          <p className="text-neutral-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Button className="mt-4 xl:mt-8">Learn More</Button>
        </div>
      </div>
    </div>
  )
}
