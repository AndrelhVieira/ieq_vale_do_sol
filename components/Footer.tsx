import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

import { FaPhone } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="my-10">
      <div className="flex gap-10">
        <div>
          <h2 className="text-center text-4xl font-bold sm:text-5xl">Siga-nos</h2>
          <p className="py-3 text-center text-xl font-semibold">
            Acompanhe nosso trabalho em nossas mídias
          </p>
          <div className="mb-8 mt-3 flex justify-center space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={10} />
            <SocialIcon kind="github" href={siteMetadata.github} size={10} />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size={10} />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} size={10} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={10} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={10} />
            <SocialIcon kind="x" href={siteMetadata.x} size={10} />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} size={10} />
            <SocialIcon kind="threads" href={siteMetadata.threads} size={10} />
          </div>

          <h2 className="text-center text-4xl font-bold sm:text-5xl">Onde estamos</h2>
          <p className="py-3 text-center text-xl font-semibold">
            Rua Boa Esperança, 129 Alto Boqueirão, Curitiba - PR 81850-702
          </p>

          <div className="flex items-center justify-center gap-2">
            <FaPhone className="text-2xl" />
            <p className="text-xl">{siteMetadata.phone}</p>
          </div>
        </div>
        <iframe
          title="teste"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDzCFVqYvTIrDKuQD7-5Th3PWJwZmPwpvI"
        />
      </div>

      <div className="mt-16 flex flex-col items-center">
        <div className="mb-2 flex-col space-x-2 text-center text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div className="hidden">{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div className="hidden">{` • `}</div>
        </div>
      </div>
    </footer>
  )
}
