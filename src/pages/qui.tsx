import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Title } from '../../components/title';
import { Button } from '../../components/button';
import { Label } from '../../components/modal';




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello world</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav>
          <div>
            <Link href="/">Home</Link> <br />
            <Link href="/tp4">POKEMOOOOOOON</Link> 
          </div>
          <Button/>
        </nav>
      <Title/>
      <Label/>
      <div className="text-red-500">Léonard</div>
      <div className="text-green-500">Bénédyczak</div>
      <div className="text-center underline font-bold">SIO SLAM</div>
     
      </main>
    </>
  )
}
