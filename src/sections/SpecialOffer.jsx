import { arrowRight } from "../assets/icons"
import { secondProfileImage } from "../assets/images"
import Buttons from "../components/Buttons"

const SpecialOffer = () => {
  return (
    <section id="redes" className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
      <img src={secondProfileImage} alt="Redes sociais" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Redes</span> Sociais
        </h2>
        <p 
        className="mt-4 lg:max-w-lg info-text">
          Conecte-se comigo nas redes sociais para acompanhar projetos, insights e atualizações sobre economia, empreendedorismo e liderança.</p>
          <div className="mt-6 space-y-4 text-slate-gray font-montserrat text-lg">
            <p><span className="font-bold text-white">Instagram:</span> <a href="https://instagram.com/_matheusrsantana" target="_blank" rel="noopener noreferrer" className="text-coral-red hover:underline">@_matheusrsantana</a></p>
          </div>
        <div className="mt-11 flex flex-wrap gap-4">
        <a href="https://instagram.com/_matheusrsantana" target="_blank" rel="noopener noreferrer">
          <Buttons label="Instagram" iconURL={ arrowRight } /> 
        </a>
        </div>
        </div>
    </section>
  )
}

export default SpecialOffer