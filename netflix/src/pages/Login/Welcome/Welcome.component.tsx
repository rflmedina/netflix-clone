import Title from "~/components/atoms/Title";
import { Cover, Description, Header } from "~/pages/Login/Login.styles";
import Helmet from 'react-helmet'

//@ts-ignore
import logo from "~/assets/logo.png";
import Button from "~/components/atoms/Button";
import { Navigate, useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate()

    const redirectToRegister = () => {
        navigate('/login')
    }

    return(
        <>
      <Helmet title="Netflix Brasil - assistir a séries onlines onde quiser" />
      <Cover>
        <section>
          <Header>
            {" "}
            <img src={logo} />
            <Button onClick={() => redirectToRegister()}>Entrar</Button>
          </Header>
          <Description>
            <Title>Filmes, séries e muito <br/> mais. Sem limites.</Title>
            <h3>Assista onde quiser. Cancele quando quiser.</h3>
            <p>
              Pronto para assistir? Informe seu email para criar ou reiniciar
              sua assinatura.
            </p>
          <div>
          <div className="form">
            <input type="text" id="email" className="form__input" placeholder=" " />
            <label className="form__label">Email</label>
          </div>
            <button>Vamos lá</button>
          </div>
        </Description>
        </section>
      </Cover>
        </>
    )
}

export default Welcome