import Buttons from "../components/Buttons"
import { arrowRight } from "../assets/icons"
import { secondProfileImage } from "../assets/images"
const SuperQuality = () => {
  return (
    <section
      id="formacao"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
    <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">Formação</span>
          <br />
          <span className="text-coral-red">Acadêmica</span>
        </h2>
        <p 
        className="mt-4 lg:max-w-lg info-text">
          <a href="https://www.ibmec.br/" target="_blank" rel="noopener noreferrer" className="text-coral-red hover:underline font-bold">IBMEC</a>
        </p>
          <p className="mt-6 lg:max-w-lg info-text"> 
            Bacharelado em Ciências Econômicas</p>
          <p className="mt-6 lg:max-w-lg info-text">
            Estudante atual, comprometido em aplicar os conhecimentos acadêmicos em projetos reais e em soluções inovadoras.</p>
        <div className="mt-11 flex flex-wrap gap-4">
        <a href="https://www.ibmec.br/" target="_blank" rel="noopener noreferrer">
          <Buttons label="Conhecer o IBMEC" iconURL={ arrowRight } /> 
        </a>
        </div>
    </div>
    <div className="flex-1 flex justify-center items-center">
      <img src={secondProfileImage} alt="Formação acadêmica" width={570} height={522} className="object-contain"/>
    </div>
    </section>
  )
}

export default SuperQuality;