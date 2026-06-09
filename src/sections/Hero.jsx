import { arrowRight } from "../assets/icons"
import { profileImage } from "../assets/images"
import Buttons from "../components/Buttons"
import { heroHighlights } from "../constants"

const Hero = () => {
  return (
    <section 
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full 
      max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Portfólio Pessoal
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">Matheus</span>
          <br />
          <span className="text-coral-red inline-block mt-3 ">Santana</span>
        </h1>
        <p 
        className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
          Sou estudante de Ciências Econômicas no IBMEC, apaixonado por empreendedorismo, negócios, investimentos e desenvolvimento pessoal. Busco constantemente aprender, criar projetos e desenvolver soluções inovadoras para gerar impacto positivo.</p>
        
        <Buttons label="Ver Perfil" iconURL={ arrowRight } />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 "> 
        {heroHighlights.map((highlight, index)=>(
          <div key={index}>
            <p className="text-4xl font-palanquin font-bold ">{highlight.value}</p>
            <p className="leading-7 font-montserrat text-slate-gray ">{highlight.label}</p>
          </div>
        ))}
        </div>

      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen 
      max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={ profileImage } alt="Foto de perfil de Matheus Santana" width={610} height={502}
        className="object-contain relative z-10" />
      </div>
    </section>
  )
}

export default Hero;