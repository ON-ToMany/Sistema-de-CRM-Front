import type { Status } from "../components/tag/Tag";

export type Categoria = 'reciclado' | 'reutilizado' | 'descartado' | 'indefinido';

export interface Oportunidade {
  id: number;
  equipamento: string;
  peso: number;
  valorConservacao: number;
  estadoConservacao?: string;
  co2Economizado?: number;
  status: Status;
  categoria: Categoria;
  cliente?: any;
  usuario?: any;
}   