import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";
import { Api } from "../../service/api";
import { Data } from "../../@types/type";
import SingleCard from "../../components/SingleCard";

function SingleHome() {
    const [colaborador, setColaborador] = useState({} as Data);
    const { colaboradorId } = useParams();
  
    async function fetchColaboradorId(colaboradorId: string | undefined) {
      const { data } = await Api.get(
        `/colaborador/colaboradorId/${colaboradorId}`
      );
      setColaborador(data);
      console.log(colaborador);
    }
  
    useEffect(() => {
      fetchColaboradorId(colaboradorId);
    }, [colaboradorId]);
  
    return(
        <>
        <Header />
        <SingleCard colaboradorData={colaborador} />
      </>
    )
 
}

export default SingleHome;
