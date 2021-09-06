export interface Indicacao {
  id:        number;
  nome:      string;
  cpf:       string;
  telefone:  string;
  email:     string;
  status_id: number;
  links:     Links;
}

export interface Links {
  self:              string;
  statusDaIndicacao: string;
}
