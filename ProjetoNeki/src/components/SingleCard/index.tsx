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
  import {
    Api,
    deleteColaborador,
    getIdColaborador,
    listaColaborador,
  } from "../../service/api";
  import { Data } from "../../@types/type";
  import { AuthContext } from "../../context/auth";
import { TokenType } from "../../@types/auth";
  type SingleCardProps = {
    colaboradorData : Data;
  }
  
  function SingleCard({ colaboradorData } : SingleCardProps) {
    const [colaborador, setColaborador] = useState({} as Data);
    const { isAuthenticated, token } = useContext(AuthContext);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedColaborador, setSelectedColaborador] = useState<Data | null>(
      null
    );
    const [dialogSocialVisible, setDialogSocialVisible] = useState(false);

    const fetchDeleteColaborador = async (
        colaboradorId: number,
        token: TokenType
      ) => {
        const id = colaboradorId;
        try {
          const response = await deleteColaborador(id, token);
          Api.defaults.headers.common["Authorization"] = `Bearer ${token.token}`;
          fetchLista();
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      };
  
    function openDialog(colaborador: Data) {
      setSelectedColaborador(colaborador);
      setDialogVisible(true);
    }
  
    function closeDialog() {
      setSelectedColaborador(null);
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
  
    const renderDate = (date: string) => {
      const D = new Date(date);
      return `${D.getDate()}/${D.getMonth() + 1}/${D.getFullYear()}`;
    };
  
    async function fetchLista() {
      const response = await listaColaborador();
      setColaborador(response.data);
    }
    useEffect(() => {
      fetchLista();
    }, []);
  
    
  
    return (
      <CardContainer>
          <Container key={colaboradorData.id}>
            <ImageContainer
              src={colaboradorData?.imagem?.dados
                ? "data:image/png;base64," + colaboradorData.imagem.dados
                : ""}
            />
            <NomeCard>{colaboradorData.nome}</NomeCard>
            <ContainerUser>
              <text>{colaboradorData.nomeSocial}</text>
              <text>ID: {colaboradorData.colaboradorId}</text>
              {isAuthenticated ? (
                <>
                  <BsTrashFill
                    size={15}
                    onClick={() => openDialog(colaboradorData)}
                  />
                  <ButtonProfile>
                    <BsPencilFill size={15} />
                  </ButtonProfile>
                </>
              ) : null}
            </ContainerUser>
            <ContainerSociais>
              <MdOutlineCalendarToday />
              <text>{renderDate(colaboradorData.dataDeNascimento)}</text>
              <ButtonProfile onClick={() => openRedesDialog(colaboradorData)}>
                <SocialMidia>Redes Sociais!</SocialMidia>
              </ButtonProfile>
            </ContainerSociais>
            <ContainerInfo>
              <MdEmail />
              <text>{colaboradorData.email}</text>
            </ContainerInfo>
            <span>
              {colaboradorData.telefone ? (
                <>
                  <MdStayCurrentPortrait style={{ marginLeft: "5px" }} />
                  {colaboradorData.telefone}
                </>
              ) : (
                <>
                  <MdStayCurrentPortrait style={{ marginLeft: "5px" }} />
                  Sem celular
                </>
              )}
            </span>
          </Container>
  
        {selectedColaborador && (
          <Dialog open={dialogVisible}>
            <BsXCircle onClick={closeDialog} />
            <TitleDialog>{selectedColaborador.nome}</TitleDialog>
            <TitleDialog>ID: {selectedColaborador.colaboradorId}</TitleDialog>
            <ContainerDelete>
              <DeleteButton
                onClick={() =>
                  fetchDeleteColaborador(selectedColaborador.colaboradorId, token)
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
    );
  }
  
  export default SingleCard;
  