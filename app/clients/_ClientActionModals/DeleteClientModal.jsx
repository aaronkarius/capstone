import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import handleDeleteClient from "../lib/handleDeleteClient";

export default function DeleteClientModal({
    deleteModalOpen,
    setDeleteModalOpen,
    deleteModalData,
    toast
}) {
    return (
        <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Client</DialogTitle>
                    <DialogDescription>
                        <span className="text-destructive-text">
                            This action cannot be undone.
                        </span>
                        <br />
                        <br />
                        Are you sure you want to delete this client: &quot;
                        <span className="text-accent-foreground">
                            {deleteModalData.name}
                        </span>
                        &quot;?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        className="flex-1"
                        variant="destructive"
                        onClick={() =>
                            handleDeleteClient(
                                setDeleteModalOpen,
                                toast,
                                deleteModalData
                            )
                        }
                    >
                        Delete
                    </Button>
                    <Button
                        className="flex-1"
                        variant="outline"
                        onClick={() => setDeleteModalOpen(false)}
                    >
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
