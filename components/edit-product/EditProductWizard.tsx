import Modal from "@/utils/components/modal/Modal";
import EditForm from "./EditForm";
import { useModal } from "@/utils/components/modal/provider/ModalProvider";


export default function EditProductWizard(){
    const [closeModal] = useModal();
    return <Modal name="edit-prod" title="Edit Product">
        <EditForm categories={/*Insert categories from server here*/} onSuccess={() => {
            closeModal("edit-prod");
        }}/> </Modal>
}


// onSuccess is just a func that sends an api call