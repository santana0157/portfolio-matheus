import Buttons from "../components/Buttons"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contato">
      <div className="max-w-xl">
        <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold ">
          Contato <span className="text-coral-red">Direto</span>
        </h3>
        <p className="mt-6 font-montserrat text-slate-gray lg:max-w-lg">
          Quer conversar sobre um projeto, parceria ou oportunidades acadêmicas? Envie seu contato e eu retorno em breve.
        </p>
      </div>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5
      p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="Digite seu e-mail" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-fullz">
          <Buttons 
          label="Enviar Mensagem"
          fullWidth
          />
        </div>
      </div>
    </section>
  )
}

export default Subscribe