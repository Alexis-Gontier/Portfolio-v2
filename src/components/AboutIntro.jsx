import { IoPersonSharp } from "react-icons/io5";

import Btn1 from './Btn1'
import Btn2 from './Btn2'

export default function AboutIntro() {
  return (
        <div className="flex flex-col-reverse lg:flex-row justify-start items-center lg:items-end gap-10">
            <div className="flex flex-col gap-3 lg:gap-5 lg:w-5/6">
                <h2 className="text-white text-2xl lg:text-4xl font-semibold flex items-center gap-3">
                    <IoPersonSharp />
                    À propos
                </h2>
                <div className="w-20 h-1 bg-white"></div>
                <p className="text-white text-normal lg:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae voluptatum hic quo ad in nisi asperiores voluptatibus tenetur, at minima incidunt expedita numquam enim aut excepturi beatae aperiam obcaecati ea.
                </p>
                <div className="flex flex-col lg:flex-row gap-3">
                    <Btn2 Link="#">
                        Télécharger CV
                    </Btn2>
                    <Btn1 Link="#">
                        Voir CV
                    </Btn1>
                </div>
            </div>
            <div>
                <img src="/pp.webp" alt="Photo de profil" className="rounded-lg"/>
            </div>
        </div>
  )
}
