export interface TextInputProps {
  type: string;
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
}
