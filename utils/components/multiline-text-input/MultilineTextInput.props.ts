export interface MultilineTextInputProps {
  className?: string;
  name?: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  invalid?: boolean;
}
