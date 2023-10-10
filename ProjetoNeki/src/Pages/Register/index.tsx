import { useState } from "react";
import { ContainerRegister, Input, SubmitButton, Title } from "./style";
import { cadastroColaborador } from "../../service/api";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";

function Register() {
  const [userImagem, setUserImagem] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [nomeSocial, setNomeSocial] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [gitHub, setgitHub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [registroSucesso, setRegistroSucesso] = useState(false);
  const navigate = useNavigate();

  const handleImagemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setUserImagem(event.target.files[0]);
    }
  };

  const isEmailValid = (email: string) => {
    const regex = /@neki-it\.com\.br$|@neki\.com\.br$/;
    return regex.test(email);
  };

  function handleGoBack() {
    navigate("/Home");
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userImagem !== null) {
      if(!isEmailValid(email)) {
        alert("O e-mail deve terminar com @neki-it.com.br ou @neki.com.br")
        return
      }
      const data = new FormData();
      data.append("email", email);
      data.append("nome", nomeCompleto);
      data.append("dataDeNascimento", dataNascimento);
      data.append("imagem", userImagem);
      data.append("nomeSocial", nomeSocial);
      data.append("telefone", telefone);
      data.append("instagram", instagram);
      data.append("gitHub", gitHub);
      data.append("linkedin", linkedin);
      data.append("facebook", facebook);    
      try {
        const response = await cadastroColaborador(data);
        setTimeout(() => {
          navigate('/Home')
        }, 3000)
        console.log(response)
        setRegistroSucesso(true)
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleRegister} encType="multipart/form-data" method="post">
       <BsArrowLeftShort size={50} onClick={handleGoBack}/>
      <Title>Register</Title>
      <ContainerRegister>
        <Input type="file" accept="image/*" onChange={handleImagemChange} required/>
        <Input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Nome Completo"
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Nome Social"
          value={nomeSocial}
          onChange={(e) => setNomeSocial(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Data de nascimento"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Git Hub"
          value={gitHub}
          onChange={(e) => setgitHub(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Linkedin"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Facebook"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        {registroSucesso &&(
        <div style={{ color: 'white' }}>Registro bem-sucedido!</div>
        )}
        <SubmitButton> Cadastrar </SubmitButton>
      </ContainerRegister>
    </form>
  );
}

export default Register;
