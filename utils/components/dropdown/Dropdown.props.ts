export type DropdownOption = {
  value: number;
  name: string;
};

export interface DropdownProps {
  displayName: string;
  options: DropdownOption[];
  value: {
    currentValue: number;
    setCurrentValue: (value: number) => void;
  };
  selectedOption?: (options: DropdownOption[]) => DropdownOption;
  name?: string;
}
