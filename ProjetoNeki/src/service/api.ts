import axios from "axios";
import { TokenType } from "../@types/auth";


export const Api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const ApiJson = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const listaColaborador = async () => {
  return Api.get("/colaborador/listar");
};

export const createSession = async (email: string, password: string) => {
  try {
    const response = await ApiJson.post("/auth/signin", { email, password });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const cadastroColaborador = async (formData: FormData) => {
  return Api.post("/colaborador/inserir", formData);
};

export const deleteColaborador = async ( colaboradorId : number, token : TokenType) => {
  const response = await Api.delete(`/colaborador/${colaboradorId}`, {
    headers : {
        Authorization: `Bearer ${token}`
    }
})
return response.data; 
}

export const atualizarColaborador = async(colaboradorId: number, token : TokenType, formData : FormData) => {
  const response = await ApiJson.put(`/colaborador/atualizar/${colaboradorId}`, formData ,{
      headers : {
          Authorization : `Bearer ${token}`
      }
  })
  return response.data
}

export const getIdColaborador = async (colaboradorId: string | undefined) => {
    return Api.get(`/colaborador/colaboradorId/${colaboradorId}`)
}