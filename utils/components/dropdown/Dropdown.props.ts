export type DropdownOption = {
  value: number;
  name: string;
};

export interface DropdownProps {
  displayName: string;
  options: DropdownOption[];

  currentValue: number;
  setCurrentValue: (value: number) => void;
  name?: string;
}
