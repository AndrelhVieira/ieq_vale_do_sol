import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ServiceTimesType = {
  title: string
  text: string
  time: string
  imagePath: string
}

const serviceTimesAssets: ServiceTimesType[] = [
  {
    title: 'Culto Connect JA',
    text: 'Venha adorar e buscar a cristo com Jovens e Adolescentes, juntos e conectados com o REINO.',
    time: 'Sábados - 19h',
    imagePath: '/static/images/time-machine.jpg',
  },
  {
    title: 'Culto Connect JA',
    text: 'Venha adorar e buscar a cristo com Jovens e Adolescentes, juntos e conectados com o REINO.',
    time: 'Sábados - 19h',
    imagePath: '/static/images/time-machine.jpg',
  },
  {
    title: 'Culto Connect JA',
    text: 'Venha adorar e buscar a cristo com Jovens e Adolescentes, juntos e conectados com o REINO.',
    time: 'Sábados - 19h',
    imagePath: '/static/images/time-machine.jpg',
  },
]

const ServiceTimes = () => {
  return (
    <section className="mt-10 flex flex-col gap-10 p-10">
      <h1 className="text-center text-4xl font-bold sm:text-5xl">Horários dos cultos</h1>

      {serviceTimesAssets.map((item, index) => (
        <div
          key={item.imagePath}
          className={`flex items-center gap-10 ${index % 2 !== 0 ? 'flex-row-reverse' : null}`}
        >
          <div>
            <p className="text-3xl font-bold">{item.title}</p>
            <p className="py-5 text-justify">{item.text}</p>
            <p className="font-light italic">{item.time}</p>
          </div>

          <Image
            src={item.imagePath}
            alt="Imagem de culto em IEQ Vale do Sol"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      ))}

      <div className="flex justify-center">
        <Link
          href="/horarios"
          className="rounded-3xl border-4 border-gray-800 px-6 py-4 font-bold uppercase"
        >
          Ver Mais
        </Link>
      </div>
    </section>
  )
}

export default ServiceTimes
