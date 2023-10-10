import {
  ButtonProfile,
  CardContainer,
  Container,
  ContainerDelete,
  ContainerInfo,
  ContainerSociais,
  ContainerUser,
  DeleteButton,
  Dialog,
  DialogRedes,
  ImageContainer,
  NomeCard,
  SocialMidia,
  TitleDialog,
} from "./style";
import {
  MdEmail,
  MdStayCurrentPortrait,
  MdOutlineCalendarToday,
} from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import {
  BsInstagram,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTrashFill,
  BsPencilFill,
  BsXCircle,
} from "react-icons/bs";
import { Api, deleteColaborador, listaColaborador } from "../../service/api";
import { AuthContext } from "../../context/auth";
import { TokenType } from "../../@types/auth";
import { Data } from "../../@types/type";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../SearchBar";

function Card() {
  const [colaborador, setColaborador] = useState<Data[]>([]);
  const { isAuthenticated, token } = useContext(AuthContext);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColaborador, setSelectedColaborador] = useState<Data | null>(
    null
  );
  const [selectedColaboradorId, setSelectedColaboradorId] = useState<
    number | null
  >(null);
  const [dialogSocialVisible, setDialogSocialVisible] = useState(false);
  const [selectedColaboradorLixeira, setSelectedColaboradorLixeira] =
    useState<Data | null>(null);
  const navigate = useNavigate();

  const filteredData = colaborador.filter(item =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };
  
  function handleUpdate(colaborador: Data) {
    setSelectedColaboradorId(colaborador.colaboradorId);
    console.log(colaborador);
    navigate(`/update/${colaborador.colaboradorId}`,{state : { colaborador }});
  }
  function openDialog(colaborador: Data) {
    setSelectedColaboradorLixeira(colaborador);
    setDialogVisible(true);
  }
  function closeDialog() {
    setSelectedColaboradorLixeira(null);
    setDialogVisible(false);
  }
  function openRedesDialog(colaborador: Data) {
    setSelectedColaborador(colaborador);
    setDialogSocialVisible(true);
  }
  function closeRedesDialog() {
    setSelectedColaborador(null);
    setDialogSocialVisible(false);
  }

  const fetchDeleteColaborador = async (
    colaboradorId: number,
    token: TokenType
  ) => {
    const id = colaboradorId;
    try {
      const response = await deleteColaborador(id, token);
      Api.defaults.headers.common["Authorization"] = `Bearer ${token.token}`;
      fetchLista();
      setTimeout(() =>{
        closeDialog();
      },1000)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  async function fetchLista() {
    const response = await listaColaborador();
    setColaborador(response.data);
  }
  useEffect(() => {
    fetchLista();
  }, []);

  return (
    <>
    <SearchBar onSearch={text => handleSearch(text)}/>
    <CardContainer>
      {filteredData.map((colaborador) => (
        <Container key={colaborador.id}>
          <ImageContainer
            src={"data:image/png;base64," + colaborador.imagem.dados}
          />
          <NomeCard>{colaborador.nome}</NomeCard>
          <ContainerUser>
            <text>{colaborador.nomeSocial}</text>
            <text>ID: {colaborador.colaboradorId}</text>
            {isAuthenticated ? (
              <>
                <BsTrashFill
                  size={15}
                  onClick={() => openDialog(colaborador)}
                />
                <ButtonProfile onClick={() => handleUpdate(colaborador)}>
                  <BsPencilFill size={15} />
                </ButtonProfile>
              </>
            ) : null}
          </ContainerUser>
          <ContainerSociais>
            <MdOutlineCalendarToday />
            <text>{colaborador.dataDeNascimento}</text>
            <ButtonProfile onClick={() => openRedesDialog(colaborador)}>
              <SocialMidia>Redes Sociais!</SocialMidia>
            </ButtonProfile>
          </ContainerSociais>
          <ContainerInfo>
            <MdEmail />
            <text>{colaborador.email}</text>
          </ContainerInfo>
          <span>
            {colaborador.telefone ? (
              <>
                <MdStayCurrentPortrait style={{ marginLeft: "5px" }} />
                {colaborador.telefone}
              </>
            ) : (
              <>
                <MdStayCurrentPortrait style={{ marginLeft: "5px" }} />
                Sem celular
              </>
            )}
          </span>
        </Container>
      ))}

      {selectedColaboradorLixeira && (
        <Dialog open={dialogVisible}>
          <BsXCircle onClick={closeDialog} />
          <TitleDialog>{selectedColaboradorLixeira.nome}</TitleDialog>
          <TitleDialog>
            ID: {selectedColaboradorLixeira.colaboradorId}
          </TitleDialog>
          <ContainerDelete>
            <DeleteButton
              onClick={() =>
                fetchDeleteColaborador(
                  selectedColaboradorLixeira.colaboradorId,
                  token
                )
              }
            >
              Deletar
            </DeleteButton>
          </ContainerDelete>
        </Dialog>
      )}
      {selectedColaborador && (
        <DialogRedes open={dialogSocialVisible}>
          <BsXCircle onClick={closeRedesDialog} />
          <TitleDialog>
            <BsInstagram />
            {selectedColaborador.instagram}
          </TitleDialog>
          <TitleDialog>
            <BsFacebook /> {selectedColaborador.facebook}
          </TitleDialog>
          <TitleDialog>
            <BsGithub /> {selectedColaborador.gitHub}
          </TitleDialog>
          <TitleDialog>
            <BsLinkedin /> {selectedColaborador.linkedin}
          </TitleDialog>
          <ContainerDelete></ContainerDelete>
        </DialogRedes>
      )}
    </CardContainer>
    </>
  );
}

export default Card;
