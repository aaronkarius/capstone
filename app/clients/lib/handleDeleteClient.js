import { db } from "@/lib/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { mutate } from "swr";

export default async function handleDeleteClient(
    setDeleteModalOpen,
    toast,
    { email }
) {
    await deleteDoc(doc(db, "clients", email)).catch(() => {
        toast({
            title: "Uh oh! Something went wrong.",
            variant: "destructive"
        });
    });

    toast({
        title: "Client successfully deleted.",
        variant: "success"
    });
    mutate("clients");
    setDeleteModalOpen(false);
}
