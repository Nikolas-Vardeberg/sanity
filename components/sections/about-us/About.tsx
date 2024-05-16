import { Check } from "lucide-react"
import AboutUsCarousel from "./AboutUsCarousel"


export const AboutUs = () => {
  return(
    <section className="py-48 bg-secondary-950">
      <div className="container">
        <div className="flex text-white items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4">
          <span className="h-2 w-2 bg-primary-300 block rounded-full"/>
          <span>About us</span>
        </div>

        <div className="grid xl:grid-cols-2 gap-12 md:gap-36">
          <div className="flex justify-center flex-col gap-6">
            <h2 className="text-features leading-none text-white">
              Commited to a sustainale future
            </h2>
            <p className="text-white/80">
            Evs use electricty as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transport sections.
            </p>
            <ul className="mt-4 grid grid-cols-2 xl:grid-cols-1 gap-4">
              <li className="flex items-center gap-3 text-white">
                <Check className="bg-primary-300 rounded-full p-1 " />
                Check list
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="bg-primary-300 rounded-full p-1 " />
                Check list
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="bg-primary-300 rounded-full p-1" />
                Check list
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="bg-primary-300 rounded-full p-1 " />
                Check list
              </li>
            </ul>

           
          </div>
          <div className="col-span-1">
              <AboutUsCarousel />
            </div>
        </div>

      </div>
    </section>
  )
}

export default AboutUs