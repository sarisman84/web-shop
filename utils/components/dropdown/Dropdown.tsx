"use client";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";

type DropdownOption = {
  id: number | string;
  name: string;
};

type DropdownProps = {
  name?: string;
  options: DropdownOption[];
  selected?: DropdownOption | null;
  onChange?: (option: DropdownOption | null) => void;
  invalid?: boolean;
  required?: boolean;
};

export default function Dropdown(props: DropdownProps) {
  const [query, setQuery] = useState("");
  const { options, selected, onChange } = props;

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option: DropdownOption) => {
          return option.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      name={props.name}
      value={selected}
      onChange={onChange}
      invalid={props.invalid}
    >
      <div className="relative mt-1 flex-1">
        <div className="relative w-full cursor-default overflow-hidden rounded bg-slate-400 dark:bg-slate-600 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <ComboboxInput
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(option: DropdownOption) => option.name}
            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 focus:ring-0"
            required={props.required}
          />
          <ComboboxButton className="absolute inset-y-0 right-0 flex items-center cursor-pointer">
            <ChevronsUpDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </ComboboxButton>
        </div>
      </div>

      <ComboboxOptions
        anchor="bottom start"
        className="bg-slate-100 dark:bg-slate-800 border-slate-800 dark:border-slate-700 border rounded max-h-40 w-(--input-width) empty:invisible"
      >
        {filteredOptions.map((option: DropdownOption) => (
          <ComboboxOption
            key={option.id}
            value={option}
            className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
          >
            <CheckIcon className="invisible size-4 group-data-selected:visible" />
            <div className="text-sm/6 ">{option.name}</div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
}
