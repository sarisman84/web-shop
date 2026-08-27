"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useModal } from "./provider/ModalProvider";
import { ModalProps } from "./Modal.props";

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

  return (
    <Dialog
      open={isOpen(name)}
      onClose={() => closeModal(name)}
      className="relative z-50"
    >
      <div className={`${props.bgClassName} ${defaultClasses.bgClassName}`}>
        <DialogPanel
          className={`${props.className} ${defaultClasses.className}`}
        >
          <DialogTitle
            className={`${props.titleClassName} ${defaultClasses.titleClassName}`}
          >
            {title}
          </DialogTitle>
          <Description
            className={`${props.descClassName} ${defaultClasses.descClassName}`}
          >
            {description}
          </Description>
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
