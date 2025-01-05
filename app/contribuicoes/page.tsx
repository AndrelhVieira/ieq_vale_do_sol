import Image from 'next/image'
import React from 'react'

const Contribuicoes = () => {
  return (
    <section>
      <h1 className="text-center text-4xl font-bold sm:text-5xl">Contribuições</h1>

      <p className="mt-5 text-justify text-xl font-light italic">
        Então o nosso Deus escolherá o lugar onde ele será adorado, e para lá vocês levarão tudo o
        que estou ordenando, isto é, os animais que são queimados no altar e os outros sacrifícios,
        a décima parte dos animais e das colheitas, as contribuições e todas as outras ofertas
        prometidas a Deus.
      </p>
      <p className="my-2 mb-10 text-center font-light italic">Deuteronômio 12:11 NTLH</p>

      <p className="text-center text-xl font-semibold">
        Você pode fazer a sua contribuição através dos seguintes meios:
      </p>

      <div className="mx-auto my-14 flex max-w-xl flex-col gap-10">
        <div className="grid grid-cols-1  gap-10 md:grid-cols-2">
          <Image
            src="/static/images/bradesco-logo.png"
            alt="Forma de pagamento de IEQ Vale do Sol"
            width={250}
            height={250}
            className="mx-auto my-auto h-24 w-28"
          />
          <div className="flex flex-col gap-2 text-center">
            <p className="text-xl font-bold">Banco Bradesco</p>
            <p className="text-lg">Agência: 2673</p>
            <p className="text-lg">Conta Corrente: 312467-3</p>
          </div>
        </div>

        <div className="grid grid-cols-1  gap-10 md:grid-cols-2">
          <Image
            src="/static/images/pix-logo.png"
            alt="Forma de pagamento de IEQ Vale do Sol"
            width={250}
            height={250}
            className="mx-auto my-auto h-16 w-40"
          />
          <div className="flex flex-col gap-2 text-center">
            <p className="text-xl font-bold">Pix Pagseguro</p>
            <p className="text-lg">62.955.505/0768-13</p>
            <p className="text-xl font-bold">Pix Bradesco</p>
            <p className="text-lg">financeiro@ieqvaledosol.com.br</p>
          </div>
        </div>

        <div className="grid grid-cols-1  gap-10 md:grid-cols-2">
          <Image
            src="/static/images/pagseguro-logo.png"
            alt="Forma de pagamento de IEQ Vale do Sol"
            width={250}
            height={250}
            className="mx-auto my-auto h-16 w-56"
          />
          <div className="flex flex-col gap-2 text-center">
            <p className="text-xl font-bold">Pagseguro</p>
            <p className="text-lg">Agência: 0001</p>
            <p className="text-lg">Conta Corrente: 19800912-8</p>
          </div>
        </div>

        <p className="text-center text-lg font-semibold sm:text-xl">
          Para dúvidas ou mais informações envie um email para{' '}
          <span className="font-light italic">financeiro@ieqvaledosol.com.br</span> ou entre em{' '}
          <span className="font-bold text-red-500">contato</span>.
        </p>
      </div>
    </section>
  )
}

export default Contribuicoes
