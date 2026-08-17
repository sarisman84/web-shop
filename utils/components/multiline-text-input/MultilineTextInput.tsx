import { Textarea } from "@headlessui/react";
import { MultilineTextInputProps } from "./MultilineTextInput.props";

export default function MultilineTextInput(props: MultilineTextInputProps) {
  return (
    <Textarea
      className="border border-gray-300 rounded px-2 py-1 flex-1"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder}
      name={props.name}
      required={props.required}
    />
  );
}
