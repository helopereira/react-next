import { CarrinhoProvider } from '@/data/contexts/CarrinhoContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <CarrinhoProvider>
      <Component {...pageProps} />
    </CarrinhoProvider>
  )
  
}