import { makeStyles, styled } from '@material-ui/core/styles'
import nosotrosStyles from 'styled/pages/nosotros'
import teamStyle from 'styled/sections/nosotrosSections/teamStyle'

export const useStyles = makeStyles({...teamStyle, ...nosotrosStyles})

export const NosotrosContainer = styled('div')({
    overflowX: 'hidden',
    paddingBottom: '45px'
})

export const ImageContainer = styled('div')({
    width: '100%',
    height: '400px',
    marginBottom: '90px',
    transform: 'translateX(20px)'
})