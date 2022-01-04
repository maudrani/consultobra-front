import { styled } from '@material-ui/core'

export const ImageContainer = styled('div')(({ isvisible }) => ({
  height: '900px',
  width: '900px',
  margin: '-40px 0 0 -400px',
  transform: `translateX(${isvisible ? '0' : '-10%'})`,
  opacity: isvisible ? 1 : 0,
  transition: '0.6s ease-in-out',
  position: 'relative'
}))
