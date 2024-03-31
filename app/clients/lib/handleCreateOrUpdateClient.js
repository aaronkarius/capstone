import { db } from "@/lib/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { mutate } from "swr";

export default async function handleCreateOrUpdateClient(
    data,
    toast,
    setOpen,
    edit
) {
    const docRef = doc(db, "clients", data.email); // Create a document reference with the specified ID

    const docSnap = await getDoc(docRef);

    if (!docSnap.exists() || edit) {
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
