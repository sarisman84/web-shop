export interface MultilineTextInputProps {
  name?: string;
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  required?: boolean;
}
