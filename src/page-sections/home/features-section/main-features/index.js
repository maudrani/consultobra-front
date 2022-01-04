import { useInView } from 'react-hook-inview'

import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'
import { Extension, Group, LibraryBooks } from '@material-ui/icons'
import { ImageContainer } from './styled'
import Image from 'next/image'

import texts from 'content/texts'
import { useStyles } from '../styled'

const MainFeatures = () => {
  const classes = useStyles()
  const [imageRef, isVisible] = useInView({
    threshold: 0.3
  })

  return (
    <div className={classes.features3}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <ImageContainer ref={imageRef} isvisible={isVisible? true : null}>
            <Image
              src="/img/consultobra/features-img.png"
              className='hero-image'
              layout='fill'
              alt=''
              /* style={{
                width: '900px',
                margin: '-40px 0 0 -500px',
                transform: `translateX(${isVisible ? '0' : '-10%'})`,
                opacity: isVisible? 1 : 0,
                transition: '0.6s ease-in-out'
              }}
              ref={imageRef} */
            />
          </ImageContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title}>
            {texts['features.optimize-projects.title']}
          </h2>
          <InfoArea
            className={classes.infoArea}
            icon={Extension}
            title={texts['features.our-tools.title']}
            description={texts['features.our-tools.description']}
            iconColor="primary"
          />
          <InfoArea
            className={classes.infoArea}
            icon={Group}
            title={texts['features.who-to-call.title']}
            description={texts['features.who-to-call.description']}
            iconColor="primary"
          />
          <InfoArea
            className={classes.infoArea}
            icon={LibraryBooks}
            title={texts['features.news-blog.title']}
            description={texts['features.news-blog.description']}
            iconColor="primary"
          />
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default MainFeatures
