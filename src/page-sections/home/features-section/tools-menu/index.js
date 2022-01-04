import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import { InfoAreaStyled } from './styled'
import classNames from "classnames";

import texts from 'content/texts'

import {
  AttachMoney,
  FormatListBulleted,
  People,
} from '@material-ui/icons'

import { useStyles } from '../styled'

const ToolsMenu = () => {
  const classes = useStyles()
  return (
    <div
      className={classNames(classes.features5, classes.toolsMenuBackground)}
    >
      <GridContainer className={classes.margin0}>
        <div className={classes.container}>
          <GridContainer
            className={classes.gridContainer}
            style={{ margin: '0!important' }}
          >
            <GridItem xs={12} sm={4} className={classes.gridItem}>
              <InfoAreaStyled
                vertical
                className={classes.infoArea5}
                icon={AttachMoney}
                title={texts['header.costos.text']}
                description={
                  <p>
                    {texts['tools.costos.description']}
                  </p>
                }
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={4} className={classes.gridItem}>
              <InfoAreaStyled
                vertical
                className={classes.infoArea5}
                icon={FormatListBulleted}
                title={texts['header.presupuesto.text']}
                description={
                  <p>
                    {texts['tools.presupuesto.description']}
                  </p>
                }
                iconColor="primary"
              />
            </GridItem>
            <GridItem xs={12} sm={4} className={classes.gridItem}>
              <InfoAreaStyled
                vertical
                className={classes.infoArea5}
                icon={People}
                title={texts['header.a-quien-llamo.text']}
                description={
                  <p>
                    {texts['tools.a-quien-llamo.description']}
                  </p>
                }
                iconColor="primary"
              />
            </GridItem>
          </GridContainer>
          <GridContainer
            className={classes.gridContainer}
            style={{ margin: '0!important' }}
          >
          </GridContainer>
        </div>
      </GridContainer>
    </div>
  )
}

export default ToolsMenu
