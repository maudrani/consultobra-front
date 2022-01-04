/* import styled from 'styled-components' */
import { styled } from '@material-ui/styles'
import GridItem from 'components/Grid/GridItem.js'

export const GridItemCentered = styled(GridItem)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ImageContainer = styled('div')({
  filter: 'drop-shadow(10px 10px 8px rgba(0, 0, 0, 0.1))'
})
