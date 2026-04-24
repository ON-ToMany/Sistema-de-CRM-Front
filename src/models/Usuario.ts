
export default interface Usuario {
    id: number;
    nome: string;
    email: string; 
    senha: string;  
    tipo: string;
    oportunidades?: any[];
}