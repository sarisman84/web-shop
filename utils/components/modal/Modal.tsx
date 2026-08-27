"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useModal } from "./provider/ModalProvider";
import CreateProductForms from "@/components/create-product/forms/CreateProductForms";
import style from "styled-jsx/style";
import { ModalProps, OverridableStyle } from "./Modal.props";

export default function Modal(props: ModalProps) {
  const { isOpen, closeModal } = useModal();
  const { name, title, children, description } = props;

  const defaultClasses = {
    bgClassName:
      "fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur",
    className: "bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl",
    titleClassName: "justify-self-center font-bold pb-4 text-2xl",
    descClassName: "",
  };
  const defaultClassKeys = Object.keys(defaultClasses);
  const defineClasses = () =>
    Object.fromEntries(
      Object.keys(defaultClasses).map((key) => {
        const defaultClass = defaultClasses[key as keyof typeof defaultClasses];
        if (!defaultClassKeys.includes(key)) {
          return [key, defaultClass];
        }
        const value = props[key as keyof ModalProps];
        if (!value) {
          return [key, defaultClass];
        }

        const entry = value as string | OverridableStyle;

        if (typeof entry !== "string") {
          const settings: OverridableStyle = entry;
          if (settings.override) {
            return [key, settings.className];
          }
          return [key, `${settings.className} ${defaultClass}`];
        }
        console.log("$s is not overriden", key);
        return [key, `${value} ${defaultClass}`];
      }),
    );
  const classes = defineClasses();

  Object.entries(classes).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  return (
    <Dialog
      open={isOpen(name)}
      onClose={() => closeModal(name)}
      className="relative z-50"
    >
      <div className={classes.bgClassName}>
        <DialogPanel className={classes.className}>
          <DialogTitle className={classes.titleClassName}>{title}</DialogTitle>
          <Description className={classes.descClassName}>{description}</Description>
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
