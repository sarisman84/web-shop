/**
 * The type for a single option in a dropdown menu. Each option has a numeric value and a display name.
 */
export type DropdownOption = {
  id: number;
  name: string;
};

/**
 * Properties for the Dropdown component.
 */
export interface DropdownProps {
  /**
   * The list of options to display in the dropdown. Each option should have a value and a name.
   */
  options: DropdownOption[];

  /**
   * The currently selected value in the dropdown. (Getter)
   */
  index: number;
  /**
   * The function to call when the value changes. (Setter)
   * @param value The new value to set.
   */
  setIndex: (value: number | null) => void;
  /**
   * The name of the dropdown element. Used for accessibility and labeling.
   */
  name?: string;
}
