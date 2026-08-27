"use client"
import Modal from "@/utils/components/modal/Modal";
import EditForm from "../forms/EditForm";
import { useModal } from "@/utils/components/modal/provider/ModalProvider";
import { EditProductWizardProps } from "./EditProductWizard.props";

export default function EditProductWizard(props: EditProductWizardProps) {
  const { closeModal } = useModal();
  return (
    <Modal name="edit-prod" title="Edit Product">
      <EditForm
        categories={props.categories}
        onSuccess={() => {
          closeModal("edit-prod");
        }}
        product={props.product}
      />{" "}
    </Modal>
  );
}

// onSuccess is just a func that sends an api call
