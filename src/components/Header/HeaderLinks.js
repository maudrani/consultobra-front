/* eslint-disable */
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// react components for routing our app without refresh
import Link from 'next/link'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

// @material-ui/icons
import {
  Dns,
  Person,
  People,
  Assignment,
  LibraryBooks,
  Home,
  PermPhoneMsg
} from '@material-ui/icons'

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'styles/jss/nextjs-material-kit-pro/components/headerLinksStyle.js'
import texts from 'content/texts'

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  const smoothScroll = (e, target) => {
    if (window.location.pathname === '/sections') {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      )
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault()
        var targetScroll = document.getElementById(target)
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250)
      }
    }
  }

  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20

    var animateScroll = function () {
      currentTime += increment
      var val = easeInOutQuad(currentTime, start, change, duration)
      element.scrollTop = val
      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }
    animateScroll()
  }

  const { dropdownHoverColor } = props

  const classes = useStyles()

  return (
    <List className={classes.list + ' ' + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText={texts['header.navegar.text']}
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          dropdownList={[
            <Link href="/home">
              <a className={classes.dropdownLink}>
                <Home className={classes.dropdownIcons} />
                {texts['header.inicio.text']}
              </a>
            </Link>,
            <Link href="/blog">
              <a className={classes.dropdownLink}>
                <LibraryBooks className={classes.dropdownIcons} />
                {texts['header.novedades.text']}
              </a>
            </Link>,
            <Link href="/contact">
              <a className={classes.dropdownLink}>
                <PermPhoneMsg className={classes.dropdownIcons} />
                {texts['header.contacto.text']}
              </a>
            </Link>,
            <Link href="/nosotros">
              <a className={classes.dropdownLink}>
                <Person className={classes.dropdownIcons} />
                {texts['header.sobre-nosotros.text']}
              </a>
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText={texts['header.herramientas.text']}
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          dropdownList={[
            <Link href="/analisis-costos">
              <a
                className={classes.dropdownLink}
                onClick={e => smoothScroll(e, 'headers')}
              >
                <Dns className={classes.dropdownIcons} />
                {texts['header.costos.text']}
              </a>
            </Link>,
            <Link href="/presupuesto">
              <a
                className={classes.dropdownLink}
                onClick={e => smoothScroll(e, 'features')}
              >
                <Assignment className={classes.dropdownIcons} />
                {texts['header.presupuesto.text']}
              </a>
            </Link>,
            <Link href="/a-quien-llamo">
              <a
                className={classes.dropdownLink}
                onClick={e => smoothScroll(e, 'blogs')}
              >
                <People className={classes.dropdownIcons} />
                {texts['header.a-quien-llamo.text']}
              </a>
            </Link>
          ]}
        />
      </ListItem>
    </List>
  )
}

HeaderLinks.defaultProps = {
  hoverColor: 'primary'
}

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    'dark',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose'
  ])
}
