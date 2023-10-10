import { useContext, useEffect, useState } from "react";
import {
BackButton,
ContainerForm,
DivArrow,
Input,
SubTitle,
SubmitButton,
} from "./style";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { createSession } from "../../service/api";
import { TokenType } from "../../@types/auth";


export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailPattern = /@neki-it\.com\.br$/;
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  function handleGoBack() {
    navigate("/Home");
  }

  useEffect(() => {
    async function checkToken() {
      const token = localStorage.getItem('token');
      const loggedUserId = localStorage.getItem('loggedUserId');

      if (token && loggedUserId) {
        context.setCurrentUserId(JSON.parse(loggedUserId));
        context.setToken(token as unknown as TokenType);
        context.setIsAuthenticated(true);
      }
    }
    checkToken();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (!emailPattern.test(email)) {
        return;
      }
      const response = await createSession(email, password);
      console.log(response);
      localStorage.setItem('token', response.token);
      localStorage.setItem(
        'loggedUserId',
        JSON.stringify(response.loggedUserId),
      );
      navigate('/Home')
      context.setIsAuthenticated(true);
      context.setToken(response.token);
      console.log(response.token)
      context.setCurrentUserId(response.loggedUserId);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <DivArrow>
        <BackButton onClick={handleGoBack}>
        <BsArrowLeftShort size={50} />
        </BackButton>
      </DivArrow>
      <SubTitle> Login </SubTitle>
      <ContainerForm>
        <Input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton> Entrar </SubmitButton>
      </ContainerForm>
    </form>
  );
}
