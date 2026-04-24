
export default interface Usuario {
    id: number;
    tipo:string;
    nome: string;
    email: string; 
    senha: string;  
    oportunidades?: any[];
}