import { Input } from "@headlessui/react";
import { TextInputProps } from "./TextInput.props";

export default function TextInput(props: TextInputProps) {
  return (
    <Input
      className={`${props.className} border border-gray-300 rounded px-2 py-1 flex-1`}
      type={props.type}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder}
      name={props.name}
      required={props.required}
    />
  );
}
