import { Field, Label } from "@headlessui/react";
import { FieldEntryProps } from "./FieldEntry.props";

export default function FieldEntry(props: FieldEntryProps) {
  return (
    <Field className="flex gap-1 items-center justify-between">
      <Label className="flex-1" htmlFor={props.htmlFor}>
        {props.labelName}
      </Label>
      {props.children}
    </Field>
  );
}
