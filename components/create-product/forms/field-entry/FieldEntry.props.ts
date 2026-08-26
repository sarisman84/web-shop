import { PropsWithChildren } from "react";

export interface FieldEntryProps extends PropsWithChildren {
  labelName: string;
  htmlFor: string;
}
