import React from 'react'
import MainFeatures from './main-features'

import { useStyles, ToolsMenuContainer } from './styled'
import ToolsMenu from './tools-menu'

export default function FeaturesSection({ ...rest }) {
  const classes = useStyles()
  return (
    <div className="cd-section" {...rest}>

      <ToolsMenuContainer>
        <ToolsMenu />
      </ToolsMenuContainer>

      <div className={classes.container}>
        <MainFeatures />
      </div>


    </div>
  )
}
