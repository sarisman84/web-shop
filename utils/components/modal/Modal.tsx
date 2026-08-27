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
    bg: "fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur",
    panel: "bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl",
    title: "justify-self-center font-bold pb-4 text-2xl",
    desc: "",
  };
  const defaultClassKeys = Object.keys(defaultClasses);
  const defineClasses = () =>
    Object.fromEntries(
      Object.entries(props)
        .filter(([key, _]) => defaultClassKeys.includes(key))
        .map(([key, value]) => {
          const defaultClass =
            defaultClasses[key as keyof typeof defaultClasses];

          if (typeof value !== "string") {
            const settings: OverridableStyle = value;
            if (settings.override) {
              return [key, settings.className];
            }
            return [key, `${settings.className} ${defaultClass}`];
          }
          return [key, `${value} ${defaultClass}`];
        }),
    );

  const classes = defineClasses();

  return (
    <Dialog
      open={isOpen(name)}
      onClose={() => closeModal(name)}
      className="relative z-50"
    >
      <div className={classes.bg}>
        <DialogPanel className={classes.panel}>
          <DialogTitle className={classes.title}>{title}</DialogTitle>
          <Description className={classes.desc}>{description}</Description>
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
