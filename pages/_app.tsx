import WebLayout from '@/components/layout/WebLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "../public/font/stylesheet.css"

export default function App({ Component, pageProps }: AppProps) {
  return <WebLayout>
    <Component {...pageProps} />
  </WebLayout>
}
