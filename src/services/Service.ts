import axios from "axios";

const api = axios.create({
  baseURL: 'https://greentech-sistema-de-crm.onrender.com/'
})

export const Login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
  return resposta.data; 
}

export const usuarioCadastrar = async(url:string,dados:object,setDados:Function)=>{
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
}

export const cadastrar = async (url:string,dados:object,setDados:Function,header:object )=>{
    const resposta = await api.post(url,dados,header)
    setDados(resposta.data)
}

export const buscar = async(url:string,setDados:Function,header:object)=>{
    const resposta = await api.get(url,header)
    setDados(resposta.data)
}

export const atualizar  = async(url:string,dados:object,setDados:Function,header:object)=>{
    const resposta = await api.put(url,dados,header)
    setDados(resposta.data)
}

export const deletar = async(url: string, header: object) => {
    await api.delete(url, header)
}