import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import { IconStyled } from './styled'

import styles from 'styles/jss/nextjs-material-kit-pro/components/infoStyle.js'

const useStyles = makeStyles(styles)

export default function InfoArea(props) {
  const { title, description, vertical, className } = props
  const classes = useStyles()
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  })
  const infoAreaClasses = classNames({
    [classes.infoArea]: true,
    [className]: className !== undefined
  })
  let icon = null
  switch (typeof props.icon) {
    case 'string':
      icon = <IconStyled className={iconClasses}>{props.icon}</IconStyled>
      break
    default:
      icon = <props.icon className={iconClasses} />
      break
  }
  return (
    <div className={infoAreaClasses}>
      {icon}
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        {typeof description === 'string' ? (
          <div
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : (
          <div className={classes.description}>{description}</div>
        )}
      </div>
    </div>
  )
}

InfoArea.defaultProps = {
  iconColor: 'gray'
}

InfoArea.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  iconColor: PropTypes.oneOf([
    'primary',
    'warning',
    'danger',
    'success',
    'info',
    'rose',
    'gray'
  ]),
  vertical: PropTypes.bool,
  className: PropTypes.string
}
