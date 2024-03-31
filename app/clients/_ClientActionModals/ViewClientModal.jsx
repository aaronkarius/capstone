import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import PatientAccordion from "../_Patients/PatientAccordion";

// todo: chang editModalData name
export default function ViewClientModal({
    viewModalOpen,
    setViewModalOpen,
    editModalData
}) {
    return (
        <Dialog open={viewModalOpen} onOpenChange={setViewModalOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>View Client</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="flex gap-12">
                        <div>
                            <Label>First Name</Label>
                            <p className="leading-7">
                                {editModalData.firstName}
                            </p>
                        </div>
                        <div>
                            <Label>Last Name</Label>
                            <p className="leading-7">
                                {editModalData.lastName}
                            </p>
                        </div>
                    </div>
                    <div>
                        <Label>Email</Label>
                        <p className="leading-7">{editModalData.email}</p>
                    </div>
                    <PatientAccordion view />
                </div>
            </DialogContent>
        </Dialog>
    );
}
