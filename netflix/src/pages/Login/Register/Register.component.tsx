import { Cover, Header } from "~/pages/Login/Login.styles";
import Helmet from "react-helmet";

//@ts-ignore
import logo from "~/assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Box, Support } from "./Register.styles";
import Title from "~/components/atoms/Title";

const Register = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/browse");
  };

  return (
    <>
      <Helmet title="Netflix" />
      <Cover>
        <section>
          <Header>
            {" "}
            <img src={logo} />
          </Header>
          <Box>
            <Title>Entrar</Title>
            <input type="text" placeholder="Email ou número de telefone" />
            <input type="password" placeholder="Senha" />
            <button onClick={() => redirectToHome()}>Entrar</button>

            <Support>
              <div>
                <span><input type="checkbox" /></span>
                <span>Lembre-se de mim</span>
              </div>
              <div>
                <a href="#">
                  Precisa de ajuda?
                </a>
              </div>
            </Support>
          </Box>
        </section>
      </Cover>
    </>
  );
};

export default Register;
