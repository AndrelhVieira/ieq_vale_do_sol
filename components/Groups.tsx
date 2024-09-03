import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialIcon from './social-icons'
import siteMetadata from '@/data/siteMetadata'

type GroupsType = {
  title: string
  text: string
  imagePath: string
  socialMedia: Array<JSX.Element>
}

const serviceTimesAssets: GroupsType[] = [
  {
    title: 'Culto Connect JA',
    text: 'Venha adorar e buscar a cristo com Jovens e Adolescentes, juntos e conectados com o REINO.',
    imagePath: '/static/images/pomba.png',
    socialMedia: [
      <SocialIcon kind="facebook" href={siteMetadata.facebook} size={10} key={1} />,
      <SocialIcon kind="youtube" href={siteMetadata.youtube} size={10} key={2} />,
    ],
  },
  {
    title: 'Culto Connect JA',
    text: 'Venha adorar e buscar a cristo com Jovens e Adolescentes, juntos e conectados com o REINO.',
    imagePath: '/static/images/pomba.png',
    socialMedia: [
      <SocialIcon kind="facebook" href={siteMetadata.facebook} size={10} key={1} />,
      <SocialIcon kind="youtube" href={siteMetadata.youtube} size={10} key={2} />,
    ],
  },
  {
    title: 'Culto Connect JA',
    text: 'Venha adorar e buscar a cristo com Jovens e Adolescentes, juntos e conectados com o REINO.',
    imagePath: '/static/images/pomba.png',
    socialMedia: [
      <SocialIcon kind="facebook" href={siteMetadata.facebook} size={10} key={1} />,
      <SocialIcon kind="youtube" href={siteMetadata.youtube} size={10} key={2} />,
    ],
  },
  {
    title: 'Culto Connect JA',
    text: 'Venha adorar e buscar a cristo com Jovens e Adolescentes, juntos e conectados com o REINO.',
    imagePath: '/static/images/pomba.png',
    socialMedia: [
      <SocialIcon kind="facebook" href={siteMetadata.facebook} size={10} key={1} />,
      <SocialIcon kind="youtube" href={siteMetadata.youtube} size={10} key={2} />,
    ],
  },
]

const Groups = () => {
  return (
    <section className="mt-10 flex flex-col gap-10 p-10">
      <h1 className="text-center text-4xl font-bold sm:text-5xl">Ministérios</h1>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {serviceTimesAssets.map((item, index) => (
          <div key={item.imagePath} className={`flex flex-col items-center gap-10`}>
            <Image
              src={item.imagePath}
              alt="Imagem de culto em IEQ Vale do Sol"
              width={500}
              height={500}
              className="h-48 w-48 rounded-lg"
            />
            <div className="text-center">
              <p className="text-3xl font-bold">{item.title}</p>
              <p className="py-5">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="/ministerios"
          className="rounded-3xl border-4 border-gray-800 px-6 py-4 font-bold uppercase"
        >
          Ver Mais
        </Link>
      </div>
    </section>
  )
}

export default Groups
