import { PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  name: string;
  title: string;
  description?: string;
  className?: string;
  bgClassName?: string;
  titleClassName?: string;
  descClassName?: string;
}
