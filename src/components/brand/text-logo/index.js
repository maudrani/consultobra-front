import { LogoText } from './styled'
import texts from 'content/texts'

const TextLogo = (props) => {
  return (
    <LogoText {...props}>
      {texts['brand.name'].toUpperCase()}
    </LogoText>
  )
}

export default TextLogo
