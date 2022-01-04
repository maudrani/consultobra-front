/* eslint-disable @next/next/no-img-element */
import React from 'react'
import classNames from 'classnames'

import Header from 'components/Header/Header.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'
import Parallax from 'components/Parallax/Parallax.js'

// Sections for this page
import MainInfo from 'page-sections/home/tools-presentation'
import HeroLanding from 'page-sections/home/hero'
import FeaturesSection from 'page-sections/home/features-section'
import Contacto from 'page-sections/home/contact'
import PageFooter from 'components/footer'

import { useStyles, HomeContainer } from 'page-sections/home/styled'

export default function LandingPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  })

  const classes = useStyles()

  return (
    <HomeContainer>
      <div>
        <Header
          color="transparent"
          links={<HeaderLinks dropdownHoverColor="primary" />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: 'white'
          }}
        />

        <Parallax image="/img/consultobra/hero4.jpg" filter="darker">
          <HeroLanding />
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>

          <MainInfo />

          <FeaturesSection />

          <div className={classes.container}>
            {/* Blog */}
          </div>

          <div style={{ borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px', overflow: 'hidden' }}>
            <Contacto />
          </div>

          <div className={classes.container}>
            {/* Blog */}
            <div style={{padding: '80px', display: 'flex', justifyContent: 'center' }}>
              <img src='img/consultobra/hero.png' alt='e' style={{ objectFit: 'contain', width: '100%', maxWidth: '900px' }} />
            </div>
          </div>

        </div>

        <PageFooter />

      </div>
    </HomeContainer>
  )
}
