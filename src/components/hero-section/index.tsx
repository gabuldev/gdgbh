import configValues from "helpers/config"
import Image from "next/image"
import Title from '../../../public/banner/title.png'
import ArrowIcon from '../../../public/icons/arrow.png'
import GlobalIcon from '../../../public/icons/global.svg'
import SchedulerIcon from '../../../public/icons/scheduler.svg'

import styles from './styles.module.css'

export const HeroSection = () => {
  return (
    <section className={styles.Section}>
      <div className={styles.Content}>
        <Image alt='Devfest BH 2023' src={Title} loading="eager" layout="responsive" />


        <aside className={styles.Aside}>
          <p className={styles.AsideText}>Inscreva-se</p>
          <a href={configValues.eventLinkRegistrationUrl} target="_blank" className={styles.AsideButton}>
            Garantir meu ingresso
          </a>
          <Image className={styles.ArrowIcon} alt='Uma seta amarela feita em traços de giz apontando para o canto superior esquerdo' src={ArrowIcon} height={44} width={40} objectFit="cover" />
        </aside>

        <footer className={styles.IconSection}>
          <span className={styles.IconItem}>
            <Image alt='Um calendário na cor amarela feito em traços de giz' src={SchedulerIcon} width={44} height={32} />
            <p>18 de Novembro</p>
          </span>

          <span className={styles.IconItem}>
            <Image alt='Um globo terrestre na cor amarela feito em traços de giz' src={GlobalIcon} width={44} height={32} />
            <p>Belo Horizonte - MG</p>
          </span>
        </footer>
      </div>
    </section>
  )
}