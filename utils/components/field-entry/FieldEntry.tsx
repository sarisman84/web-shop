import { Field, Label } from "@headlessui/react";
import { FieldEntryProps } from "./FieldEntry.props";

export default function FieldEntry(props: FieldEntryProps) {
  const { children, labelName } = props;
  return (
    <Field className="flex gap-0 items-center justify-stretch">
      <Label className="flex-1">{labelName}</Label>
      {children}
    </Field>
  );
}
