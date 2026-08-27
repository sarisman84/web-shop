import { PropsWithChildren } from "react";

export type OverridableStyle = {
  className: string;
  override: boolean;
};

export type ModalStyle = {
  className?: string | OverridableStyle;
  bgClassName?: string | OverridableStyle;
  titleClassName?: string | OverridableStyle;
  descClassName?: string | OverridableStyle;
};

export interface ModalProps extends PropsWithChildren {
  name: string;
  title: string;
  description?: string;
}
