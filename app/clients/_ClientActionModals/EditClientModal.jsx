import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import ClientForm from "../ClientForm";

export default function EditClientModal({
    editModalOpen,
    setEditModalOpen,
    editModalData,
    toast
}) {
    return (
        <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Client</DialogTitle>
                    <DialogDescription>
                        To edit the patients under this client, please go to the
                        Patients page.
                    </DialogDescription>
                </DialogHeader>
                <ClientForm
                    setOpen={setEditModalOpen}
                    toast={toast}
                    edit={true}
                    previousData={editModalData}
                />
            </DialogContent>
        </Dialog>
    );
}
