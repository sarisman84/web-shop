import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { DropdownProps } from "./Dropdown.props";

/**
 * Draws a dropdown menu with the given options.
 * @param props The properties for the dropdown menu.
 * @returns JSX.Element representing the dropdown menu.
 * @example
    const [currentValue, setCurrentValue] = useState(0);
    ...
    <Dropdown
    name="foo"
    options={[
        {1, "Hello"},
        {2, "World"},
        {3, "Foo"}
    ]}
    currentValue={currentValue}
    setCurrentValue={setCurrentValue}
    />
 */
export default function Dropdown(props: DropdownProps) {
  const { options, currentValue, setCurrentValue } = props;
  return (
    <Listbox name={props.name} value={currentValue} onChange={setCurrentValue}>
      <ListboxButton className="bg-slate-200 dark:bg-slate-600  hover:bg-slate-300 dark:hover:bg-slate-700 px-2 py-1 rounded">
        {options.find((o) => o.value === currentValue)?.name ?? "Select Option"}
      </ListboxButton>
      <ListboxOptions
        anchor="bottom start"
        className="bg-slate-100 dark:bg-slate-800 border-slate-800 dark:border-slate-100 border rounded h-40"
      >
        {options.map((option) => (
          <ListboxOption
            key={option.value}
            value={option.value}
            className="hover:bg-slate-400 dark:hover:bg-slate-600 px-5 py-1"
          >
            {option.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
