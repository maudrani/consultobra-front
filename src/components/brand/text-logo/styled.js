import { styled } from '@material-ui/core'

export const LogoText = styled('p')(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: 'start',
  lineHeight: 1,
  fontWeight: 700,
  margin: 0,
  '&.white': {
    color: 'white'
  }
}))
