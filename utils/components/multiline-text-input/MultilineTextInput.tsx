import { Textarea } from "@headlessui/react";
import { MultilineTextInputProps } from "./MultilineTextInput.props";

export default function MultilineTextInput(props: MultilineTextInputProps) {
  return (
    <Textarea
      className={`${props.className} border border-slate-700 dark:border-slate-300 rounded px-2 py-1 flex-1 data-invalid:text-red-700 data-invalid:dark:text-red-300`}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder}
      name={props.name}
      required={props.required}
    />
  );
}
