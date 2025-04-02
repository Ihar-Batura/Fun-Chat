export interface CreateElement {
  tag?: string;
  classes?: string[];
  id?: string;
  text?: string;
  parent?: HTMLElement;
}

export interface CreateInput {
  type: string;
  classes?: string[];
  id?: string;
  value?: string;
  title?: string;
  required?: string;
  placeholder?: string;
  minLength?: string;
  min?: string;
  pattern?: string;
  addRules?: string;
  onInput?: () => void;
  parent?: HTMLElement;
}

export interface CreateButton extends CreateElement {
  disabled?: boolean;
  name?: string;
  onClick?: () => void;
}

export interface Link {
  href: string;
  classes?: string[];
  id?: string;
  text?: string;
  target?: string;
  parent?: HTMLElement;
}
