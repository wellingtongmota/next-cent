import { ClientFiveIcon } from "@/components/icons/client-five-icon"
import { ClientFourIcon } from "@/components/icons/client-four-icon"
import { ClientOneIcon } from "@/components/icons/client-one-icon"
import { ClientSixIcon } from "@/components/icons/client-six-icon"
import { ClientThreeIcon } from "@/components/icons/client-three-icon"
import { ClientTwoIcon } from "@/components/icons/client-two-icon"

export function Clients() {
  return (
    <div className="wrapper flex flex-col items-center py-5 2xl:py-10">
      <h3 className="headline-3 text-neutral-gray">Our Clients</h3>
      <p className="text-neutral-gray text-center">
        We have been working with some Fortune 500+ clients
      </p>

      <div className="flex w-full max-w-screen-xl flex-wrap items-center justify-center gap-4 py-4 sm:gap-12 lg:gap-16 xl:gap-28">
        <ClientOneIcon />
        <ClientTwoIcon />
        <ClientThreeIcon />
        <ClientFourIcon />
        <ClientFiveIcon />
        <ClientSixIcon />
        <ClientThreeIcon />
      </div>

      <div className="flex flex-col items-center py-5 2xl:py-10">
        <h3 className="headline-3 text-neutral-gray max-w-lg text-center">
          Manage your entire community in a single system
        </h3>
        <p className="text-neutral-gray text-center">
          Who is Nextcent suitable for?
        </p>
      </div>

      <div className="grid w-full gap-2 py-5 sm:grid-cols-3 2xl:py-10">
        <div className="flex w-full flex-col items-center justify-center text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/community/image_1.png"
            alt="Community image"
            className="aspect-square h-16 w-auto object-contain"
          />
          <h4 className="headline-4 text-neutral-gray max-w-52 pt-4">
            Membership Organisations
          </h4>
          <p className="text-neutral-gray max-w-64 pt-2 text-sm">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/community/image_2.png"
            alt="Community image"
            className="aspect-square h-16 w-auto object-contain"
          />
          <h4 className="headline-4 text-neutral-gray max-w-52 pt-4">
            National Associations
          </h4>
          <p className="text-neutral-gray max-w-64 pt-2 text-sm">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/community/image_3.png"
            alt="Community image"
            className="aspect-square h-16 w-auto object-contain"
          />
          <h4 className="headline-4 text-neutral-gray max-w-52 pt-4">
            Clubs And Groups
          </h4>
          <p className="text-neutral-gray max-w-64 pt-2 text-sm">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  )
}
