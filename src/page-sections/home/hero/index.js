import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Button from 'components/CustomButtons/Button.js'
import Image from 'next/image'

import { GridItemCentered, ImageContainer } from './styled'

import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'
import landingPageStyle from 'styles/jss/nextjs-material-kit-pro/pages/landingPageStyle.js'
import texts from 'content/texts'

const useStyles = makeStyles(landingPageStyle)

const HeroLanding = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12} sm={9} md={6}>
          <h1
            className={`${classes.title} animate__animated animate__fadeInUp`}
          >
            {texts['landing.hero.consultobra.title']}
          </h1>
          <h4>{texts['landing.hero.consultobra.description']}</h4>
          <br />
          <Button
            color="primary"
            size="lg"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
            target="_blank"
          >
            {texts['use-now.label']}
          </Button>
        </GridItem>
        {!isMobile && (
          <GridItemCentered xs={12} sm={6} md={6}>
            <ImageContainer className={`animate__animated animate__fadeIn`}>
              <Image
                src="/img/consultobra/logo.png"
                width="400"
                height="400"
                alt=""
                priority
              />
            </ImageContainer>
          </GridItemCentered>
        )}
      </GridContainer>
    </div>
  )
}

export default HeroLanding
