import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import {
  Container,
  FooterDescription,
  FooterSection,
  Link,
  Links
} from './styles'

export const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <img src={logo} alt="" />
        <Links>
          <li>
            <Link>
              <img src={instagram} alt="instagram" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={facebook} alt="facebook" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={twitter} alt="twitter" />
            </Link>
          </li>
        </Links>
        <FooterDescription>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </FooterDescription>
      </FooterSection>
    </div>
  </Container>
)
