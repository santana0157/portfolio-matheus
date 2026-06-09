import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"
const Services = () => {
  return (
    <section id="habilidades" className="max-container">
      <div className='flex flex-col justify-start gap-5 mb-10'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Minhas <span className='text-coral-red'>Habilidades</span>
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Competências chave em economia, negócios e liderança que contribuem para resultados sólidos e desenvolvimento contínuo.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-9 ">
        {services.map((service) => (
          <ServiceCard
          key={service.label}
          {...service}
          />
        ))}
      </div>
    </section>
  )
}

export default Services