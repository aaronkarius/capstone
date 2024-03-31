import { db } from "@/lib/firebaseConfig";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { mutate } from "swr";

export default async function handleCreateOrUpdateClient(
    data,
    toast,
    setOpen,
    edit,
    previousData
) {
    const docRef = doc(db, "clients", data.email); // Create a document reference with the specified ID

    const docSnap = await getDoc(docRef);

    if (!docSnap.exists() || edit) {
        if (edit && previousData.email !== data.email) {
            // If the email has been edited, delete the old document
            const oldDocRef = doc(db, "clients", previousData.email);
            const oldDocSnap = await getDoc(oldDocRef);
            if (oldDocSnap.exists()) {
                data = { ...oldDocSnap.data(), ...data }; // Merge old data with new data
                await deleteDoc(oldDocRef);
            }
        }

        await setDoc(
            docRef,
            {
                ...data
            },
            { merge: true }
        ).catch(() => {
            toast({
                title: "Uh oh! Something went wrong.",
                variant: "destructive"
            });
        });
        toast({
            title: edit ? "Client updated!" : "New client created!",
            variant: "success"
        });
        mutate("clients");
        setOpen(false);
    } else {
        toast({
            title: "This email is already in use.",
            description:
                "If you need to update a client, please edit them from the table.",
            variant: "destructive"
        });
    }
}
