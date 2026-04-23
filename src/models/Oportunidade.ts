export interface Oportunidade {
  id: number;
  equipamento: string;
  peso: number;
  valorConservacao: number;
  estadoConservacao?: string;
  co2Economizado?: number;
  status: string;
  categoria: string;
  cliente?: any;
  usuario?: any;
}