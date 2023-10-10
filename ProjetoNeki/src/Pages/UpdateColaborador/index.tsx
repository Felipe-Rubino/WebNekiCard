import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ContainerUpdate, Input, SubmitButton, Title } from "./style";
import { Api, atualizarColaborador } from "../../service/api";
import { AuthContext } from "../../context/auth";
import { BsArrowLeftShort } from "react-icons/bs";

function UpdateColaborador() {
  const { token } = useContext(AuthContext);
  const { colaboradorId } = useParams();
  const navigate = useNavigate();
  const [updateSucesso, setUpdateSucesso] = useState(false);
  const {
    state: { colaborador },
  } = useLocation();
  const [email, setEmail] = useState(colaborador ? colaborador.email : "");
  const [nome, setNome] = useState(colaborador ? colaborador.nome : "");
  const [nomeSocial, setNomeSocial] = useState(
    colaborador ? colaborador.nomeSocial : ""
  );
  const [dataDeNascimento, setDataDeNascimento] = useState(
    colaborador ? colaborador.dataDeNascimento : ""
  );
  const [telefone, setTelefone] = useState(
    colaborador ? colaborador.telefone : ""
  );
  const [instagram, setInstagram] = useState(
    colaborador ? colaborador.instagram : ""
  );
  const [gitHub, setgitHub] = useState(colaborador ? colaborador.gitHub : "");
  const [linkedin, setLinkedin] = useState(
    colaborador ? colaborador.linkedin : ""
  );
  const [facebook, setFacebook] = useState(
    colaborador ? colaborador.facebook : ""
  );

  function handleGoBack() {
    navigate("/Home");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const updatedFormData = new FormData();
    updatedFormData.append("email", email || "");
    updatedFormData.append("nome", nome || "");
    updatedFormData.append("nomeSocial", nomeSocial || "");
    updatedFormData.append("dataDeNascimento", dataDeNascimento || "");
    updatedFormData.append("telefone", telefone || "");
    updatedFormData.append("instagram", instagram || "");
    updatedFormData.append("gitHub", gitHub || "");
    updatedFormData.append("linkedin", linkedin || "");
    updatedFormData.append("facebook", facebook || "");

    if (colaboradorId) {
      try {
        const response = atualizarColaborador(
          Number(colaboradorId),
          token,
          updatedFormData
        );
        setUpdateSucesso(true)
        setTimeout(() => {
          navigate('/Home')
        }, 2000)
        Api.defaults.headers.common["Authorization"] = `Bearer ${token.token}`;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
       <BsArrowLeftShort size={50} onClick={handleGoBack}/>
      <ContainerUpdate>
        <Title> Atualizar </Title>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Nome social"
          value={nomeSocial}
          onChange={(e) => setNomeSocial(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Data de nascimento"
          value={dataDeNascimento}
          onChange={(e) => setDataDeNascimento(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Instagram"
          value={instagram || ""}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Git hub"
          value={gitHub || ""}
          onChange={(e) => setgitHub(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Linkedin"
          value={linkedin || ""}
          onChange={(e) => setLinkedin(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Facebook"
          value={facebook || ""}
          onChange={(e) => setFacebook(e.target.value)}
        />
        {updateSucesso &&(
        <div style={{ color: 'white' }}>Atualização bem-sucedido!</div>
        )}
        <SubmitButton>Atualizar</SubmitButton>
      </ContainerUpdate>
    </form>
  );
}

export default UpdateColaborador;
