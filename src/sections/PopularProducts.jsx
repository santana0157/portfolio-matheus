const PopularProducts = () => {
  return (
    <section 
    id='sobre' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5 '>
        <h2 className='text-4xl font-palanquin font-bold'>
          Sobre <span className='text-coral-red'>Mim</span>
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Sou estudante de Ciências Econômicas no IBMEC, com interesse por negócios, empreendedorismo, liderança e inovação. Estou desenvolvendo projetos que unam estratégia, análise financeira e impacto positivo.
        </p>
        <div className='mt-16 grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
          <div className='rounded-[32px] shadow-3xl p-8 bg-white'>
            <p className='text-xl font-montserrat text-slate-gray'>Faculdade</p>
            <h3 className='mt-4 text-2xl font-palanquin font-bold'>IBMEC</h3>
          </div>
          <div className='rounded-[32px] shadow-3xl p-8 bg-white'>
            <p className='text-xl font-montserrat text-slate-gray'>Curso</p>
            <h3 className='mt-4 text-2xl font-palanquin font-bold'>Ciências Econômicas</h3>
          </div>
          <div className='rounded-[32px] shadow-3xl p-8 bg-white'>
            <p className='text-xl font-montserrat text-slate-gray'>Status</p>
            <h3 className='mt-4 text-2xl font-palanquin font-bold'>Estudante Atual</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts