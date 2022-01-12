import { makeStyles, styled } from '@material-ui/core/styles'
import homeStyles from 'styled/pages/home'

export const useStyles = makeStyles(homeStyles)

export const HomeContainer = styled('div')({
    overflowX: 'hidden',
    paddingBottom: '45px'
})