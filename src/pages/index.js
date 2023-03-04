import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Offers from '@/components/Offers'
import { Provider } from 'react-redux';
import store from '@/store/reduxStore'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
      <Layout>
        <Hero/>
        <Offers/>
      </Layout>
   
  )
}
