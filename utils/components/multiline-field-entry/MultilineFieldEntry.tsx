"use client"
import { Field, Label } from "@headlessui/react";
import { MultilineFieldEntryProps } from "./MultilineFieldEntry.props";

export default function MultilineFieldEntry(props: MultilineFieldEntryProps) {
  const { children, labelName } = props;
  return (
    <Field
      className="flex flex-col gap-0 items-stretch"
      disabled={props.disabled}
    >
      <Label className="" passive={!props.selectable}>
        {labelName}
      </Label>
      {children}
    </Field>
  );
}
