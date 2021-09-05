export interface StatusDaIndicacao {
  id:        number;
  descricao: string;
  links:     Links;
}

export interface Links {
  self:      string;
  indicacao: string;
}
