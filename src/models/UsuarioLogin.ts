export default interface UsuarioLogin {
    id: number;
    nome: string;
    usuario: string;  
    senha: string;
    tipo: 'empresa' | 'cliente' | '';
    access_token: string;
}