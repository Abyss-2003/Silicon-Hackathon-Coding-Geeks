import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
              <div>
                <div className="container d-flex flex-row justify-content-around">
                  <div className={style.firstdiv}>Hello</div>
                  <div className={style.secondDiv}>Hello</div>
                  <div className={style.firstdiv}>Hello</div>
                </div>
              </div>
            </main>
          </>
          )
}
