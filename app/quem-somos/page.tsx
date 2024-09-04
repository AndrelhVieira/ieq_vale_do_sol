import Image from 'next/image'
import React from 'react'

type SymbolsType = {
  imagePath: string
  label: string
  text: React.ReactElement
}

const symbolsAssets: SymbolsType[] = [
  {
    label: 'CRUZ',
    text: (
      <p>
        A <span className="font-bold">CRUZ</span> nos lembra que Ele morreu para nos salvar,
        recebendo o castigo que era nosso, e, portanto, não há mais culpa para quem nele confia.
      </p>
    ),
    imagePath: '/static/images/cruz.png',
  },
  {
    label: 'POMPA',
    text: (
      <p>
        A <span className="font-bold">POMBA</span> representa o Espírito Santo, que Ele enviou para
        nos dar poder e ser o nosso Santo consolador, sempre presente.
      </p>
    ),
    imagePath: '/static/images/pomba.png',
  },
  {
    label: 'CÁLICE',
    text: (
      <p>
        O <span className="font-bold">CÁLICE</span>, símbolo da medicina, lembra-nos que Ele é o
        nosso grande Médico, poderoso para curar qualquer enfermidade.
      </p>
    ),
    imagePath: '/static/images/calice.png',
  },
  {
    label: 'COROA',
    text: (
      <p>
        A <span className="font-bold">COROA</span> nos fala de um rei -{' '}
        <span className="font-bold">JESUS</span> é o nosso Rei, a quem esperamos, pois a promessa
        que nos deixou é que Ele vai voltar!
      </p>
    ),
    imagePath: '/static/images/coroa.png',
  },
]

const QuemSomos = () => {
  return (
    <section className="mb-20">
      <h1 className="text-center text-4xl font-bold sm:text-5xl">Quem somos</h1>

      <p className="py-5 text-justify text-2xl">
        A Igreja do Evangelho Quadrangular anuncia o sacrifício redentor de Jesus Cristo na cruz,
        como a mensagem central da Bíblia e o centro do propósito de Deus para toda a humanidade. E
        acredita no poder do Espírito Santo, atuando para curar, libertar e salvar o homem da mesma
        maneira que agia na igreja primitiva.
        <br />
        <br />
        Fundada em janeiro de 1923, por Aimee Semple Mcpherson, e hoje está presente em muitos
        países do mundo. Teve seu início no Brasil em maio de 1951 pelo Missionário Harold Willians
        e Mary Elizabeth Willians, na cidade de São João da Boa Vista no estado de São Paulo.
        <br />
        <br />
        Em Curitiba no estado do Paraná, teve seu início em 28 de maio de 1955, pelo Pastor Júlio de
        Oliveira Rosa. No bairro Alto Boqueirão em Curitiba onde estamos estabelecidos, teve o
        início em 1979, e hoje tem como sua Pastora Jeane Carla Hiller Marcondes.
      </p>

      <p className="mb-5 mt-12 text-center text-2xl font-semibold sm:text-3xl">
        Símbolos e significados da IEQ
      </p>

      <div className="px-48">
        {symbolsAssets.map((item) => (
          <div key={item.imagePath} className="my-10 flex gap-20">
            <Image
              src={item.imagePath}
              alt={`Imagem do símbolo Quadrangular - ${item.label}`}
              width={50}
              height={50}
              className="h-28 w-24 justify-self-center sm:h-32 sm:w-28"
            />

            <div className="flex flex-col gap-3">
              <p className="text-center text-2xl font-bold uppercase">{item.label}</p>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default QuemSomos
