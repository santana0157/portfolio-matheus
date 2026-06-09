import { profileStatistics } from "../constants"

const CustomReviews = () => {
  return (
    <section id="estatisticas" className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold ">
        Minhas <span className="text-coral-red">Estatísticas</span>
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Principais métricas do perfil de Matheus Santana, com foco em acadêmico, social e localização.</p>
      <div className="mt-24 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
       {profileStatistics.map((stat, index) => (
        <div key={index} className="rounded-[32px] shadow-3xl p-8 bg-white text-center">
          <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
          <p className="mt-3 font-montserrat text-slate-gray">{stat.label}</p>
        </div>
       ))}
      </div>
    </section>
  )
}

export default CustomReviews