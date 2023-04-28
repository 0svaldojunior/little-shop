import { AppContainer, Header } from '@/styles/pages/app'

import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Header>
        <Link href={'/'}>
          <Image src={logoImg} alt="" />
        </Link>
      </Header>

      <Component {...pageProps} />
    </AppContainer>
  )
}
