export interface TextInputProps {
  type: string;
  value: string | number;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
}
