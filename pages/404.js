import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import Header from 'components/Header/Header.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import PageFooter from 'src/components/footer/index'

import errorPageStyle from 'styles/jss/nextjs-material-kit-pro/pages/errorPageStyles.js'
import texts from 'content/texts'

const useStyles = makeStyles(errorPageStyle)

export default function ErrorPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  })
  const classes = useStyles()
  return (
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
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url('/img/consultobra/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top center'
        }}
      >
        {/* <div className={classes.container}> */}
        <div className={classes.contentCenter}>
          <GridContainer>
            <GridItem md={12}>
              <h1 className={classes.title}>{texts['404.not-fount.hero-title']}</h1>
              <h2 className={classes.subTitle}>{texts['404.not-fount.title']}</h2>
              <h4 className={classes.description}>
                {texts['404.not-found.description']}
              </h4>
            </GridItem>
          </GridContainer>
        </div>
        {/* </div> */}
      </div>
      <PageFooter />
    </div>
  )
}
