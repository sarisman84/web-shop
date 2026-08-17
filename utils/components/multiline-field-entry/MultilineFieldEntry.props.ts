import { PropsWithChildren } from "react";

export interface MultilineFieldEntryProps extends PropsWithChildren {
  labelName: string;
  disabled?: boolean;
  selectable?: boolean;
}
