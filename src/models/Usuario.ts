
export default interface Usuario {
    id: number;
    tipo:string;
    nome: string;
    cpf:string;
    email: string; 
    senha: string;  
    oportunidades?: any[];
}