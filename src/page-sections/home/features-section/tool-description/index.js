import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'

import { Code, FormatPaint, Dashboard, ViewCarousel } from '@material-ui/icons'

import { useStyles } from '../styled'

const ToolDescription = () => {
  const classes = useStyles()
  return (
    <div className={classes.features4}>
      <GridContainer>
        <GridItem
          xs={12}
          sm={8}
          md={8}
          className={
            classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter
          }
        >
          <h2 className={classes.title}>Your life will be much easier</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mlAuto}>
          <InfoArea
            icon={Code}
            title="For Developers"
            description="The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before."
            iconColor="info"
          />
          <InfoArea
            icon={FormatPaint}
            title="For Designers"
            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
            iconColor="danger"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={4}>
          <div className={classes.phoneContainer}>
            <img src="/img/sections/iphone2.png" alt="..." />
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mrAuto}>
          <InfoArea
            icon={Dashboard}
            title="Material-UI Grid"
            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
            iconColor="primary"
          />
          <InfoArea
            icon={ViewCarousel}
            title="Example Pages Included"
            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
            iconColor="success"
          />
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default ToolDescription
