import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { DropdownProps } from "./Dropdown.props";

export default function Dropdown(props: DropdownProps) {
  const { displayName, options, value, selectedOption } = props;
  const getOption = selectedOption ?? ((options) => options[value.currentValue]); 
  return (
    <Field>
      <Label>{displayName}</Label>
      <Listbox
        name={props.name}
        value={value.currentValue}
        onChange={value.setCurrentValue}
      >
        <ListboxButton className="bg-slate-200 dark:bg-slate-600  hover:bg-slate-300 dark:hover:bg-slate-700 px-2 py-1 rounded">
          {getOption(options).name}
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
    </Field>
  );
}
