export interface StatusDasIndicacoes {
  current_page:   number;
  data:           Datum[];
  first_page_url: string;
  from:           number;
  last_page:      number;
  last_page_url:  string;
  links:          Link[];
  next_page_url:  null;
  path:           string;
  per_page:       number;
  prev_page_url:  null;
  to:             number;
  total:          number;
}

export interface Datum {
  id:        number;
  descricao: string;
  links:     Links;
}

export interface Links {
  self:      string;
  indicacao: string;
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}
