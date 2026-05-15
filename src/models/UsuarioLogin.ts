export default interface UsuarioLogin {
    id: number;
    nome: string;
    usuario: string;
    email: string;  
    senha: string;
    tipo: 'empresa' | 'cliente' | '';
    token: string;
}