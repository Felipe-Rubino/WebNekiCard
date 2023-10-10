export interface Data {
    colaboradorId: number;
    id: number;
    nome : string;
    nomeSocial: string;
    email : string;
    dataDeNascimento : string;
    telefone : string;
    imagem : imagem;
    dados ? : imagem;
    instagram ? : string ;
    gitHub ? : string;
    linkedin ? : string;
    facebook ? : string;
}

type imagem = {
    imagemId : number;
    dados : string;
}

export type dataProps = {
    data: Data;
}