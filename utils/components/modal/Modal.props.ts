import { PropsWithChildren } from "react";

export type OverridableStyle = {
  className: string;
  override: boolean;
};

export interface ModalProps extends PropsWithChildren {
  name: string;
  title: string;
  description?: string;
  className?: string | OverridableStyle;
  bgClassName?: string | OverridableStyle;
  titleClassName?: string | OverridableStyle;
  descClassName?: string | OverridableStyle;
}
