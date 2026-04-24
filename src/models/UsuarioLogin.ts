export default interface UsuarioLogin {
    id: number;
    nome: string;
    email: string;  
    senha: string;
    tipo: 'empresa' | 'cliente' | '';
    access_token: string;
}