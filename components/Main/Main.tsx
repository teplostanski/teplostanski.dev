/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import 'css-doodle'
import cn from 'classnames'
import ava from '../../assets/images/ava.png'
import { TypeAnimation } from 'react-type-animation'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'css-doodle': { children: any }
    }
  }
}

import styles from './Main.module.scss'
import { useEffect, useState } from 'react'

const Main = () => {
  const [isClient, setIsClient] = useState(false)
  const [isRender, setIsRender] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setTimeout(() => {
      setIsRender(true)
    }, 2400)
  }, [])
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        {isClient ? (
          <>
            {/*//<css-doodle click-to-update>
            //  @grid: 80% / 100vmax;
            //  wigth: 100vw;
            //  @size: 1px calc(141.4% + 0px); transform:
            //  rotate(@p(±45deg)); background: #000; margin: auto;
            //</css-doodle>*/}
            <css-doodle click-to-update>
              @grid: 5px / 100vmax; @place: top -15%; @size: calc( 245% / @I *
              @i); transform: rotate(calc(@i * 10deg)); border-radius: 30%;
              border: 1px solid #000;
            </css-doodle>

            <Image className={styles.image} src={ava} alt="me" priority />
            <div className={cn(styles.autotype, styles.autotype__first)}>
              <TypeAnimation
                sequence={[`Привет!\nМеня зовут Игорь Теплостанский`, 1000]}
                wrapper="span"
                cursor={true}
                repeat={0}
              />
            </div>
            {isRender && (
              <div className={cn(styles.autotype, styles.autotype__second)}>
                <TypeAnimation
                  sequence={[
                    `Я Frontend разработчик`,
                    5000,
                    '',
                    `И ты сейчас на моём личном сайте.\nЗдесь находятся мои проеты\nи не много информации обо мне`,
                    6000,
                    'Я не фрилансер.\nНичего не продаю.\nУслуги не предоставляю.',
                    7000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </div>
            )}
          </>
        ) : null}
      </div>
    </section>
  )
}

export default Main
