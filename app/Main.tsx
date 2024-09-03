import Carousel from '@/components/Carousel'
import Groups from '@/components/Groups'
import ServiceTimes from '@/components/ServiceTimes'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from 'pliny/utils/formatDate'

const images = [
  '/static/images/canada/mountains.jpg',
  '/static/images/canada/toronto.jpg',
  '/static/images/time-machine.jpg',
]

export default function Home({ posts }) {
  return (
    <section>
      <div>
        <h1 className="text-center text-4xl font-bold sm:text-5xl">Quem somos</h1>

        <div className="flex grid-cols-2 flex-col items-center">
          <p className="py-5 text-justify text-2xl italic">
            A Igreja do Evangelho Quadrangular anuncia o sacrifício redentor de Jesus Cristo na
            cruz, como a mensagem central da Bíblia e o centro do propósito de Deus para toda a
            humanidade. E acredita no poder do Espírito Santo, atuando para curar, libertar e salvar
            o homem da mesma maneira que agia na igreja primitiva.
          </p>

          <div className="grid w-full max-w-sm grid-cols-2 gap-10 sm:max-w-max sm:grid-cols-4 sm:gap-x-20">
            <Image
              src="/static/images/cruz.png"
              alt="teste"
              width={50}
              height={50}
              className="h-24 w-20 justify-self-center sm:h-32 sm:w-28"
            />
            <Image
              src="/static/images/pomba.png"
              alt="teste"
              width={50}
              height={50}
              className="h-24 w-20 justify-self-center sm:h-32 sm:w-28"
            />
            <Image
              src="/static/images/calice.png"
              alt="teste"
              width={50}
              height={50}
              className="h-24 w-20 justify-self-center sm:h-32 sm:w-28"
            />
            <Image
              src="/static/images/coroa.png"
              alt="teste"
              width={50}
              height={50}
              className="h-24 w-20 justify-self-center sm:h-32 sm:w-28"
            />
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/quem-somos"
            className="rounded-3xl border-4 border-gray-800 px-6 py-4 font-bold uppercase"
          >
            Ver Mais
          </Link>
        </div>

        <ServiceTimes />

        <h1 className="my-10 text-center text-4xl font-bold sm:text-5xl">Avisos</h1>
        <Carousel images={images} />

        <h1 className="mt-10 text-center text-4xl font-bold sm:text-5xl">Nosso blog</h1>

        <ul>
          {posts.slice(0, 3).map((post) => {
            const { path, date, title, summary, tags } = post
            return (
              <li key={path} className="py-5">
                <article className="flex flex-col space-y-2 xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date} suppressHydrationWarning>
                        {formatDate(date, siteMetadata.locale)}
                      </time>
                    </dd>
                  </dl>
                  <div className="space-y-3">
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h2>
                      <div className="flex flex-wrap">
                        {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>

        <div className="flex justify-center">
          <Link
            href="/blog"
            className="rounded-3xl border-4 border-gray-800 px-6 py-4 font-bold uppercase"
          >
            Ver Mais
          </Link>
        </div>

        <Groups />
      </div>
    </section>
  )
}
