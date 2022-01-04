import { makeStyles, styled } from '@material-ui/core/styles'
import landingPageStyle from 'styles/jss/nextjs-material-kit-pro/pages/landingPageStyle.js'

export const useStyles = makeStyles(landingPageStyle)

export const HomeContainer = styled('div')({
    overflowX: 'hidden'
})