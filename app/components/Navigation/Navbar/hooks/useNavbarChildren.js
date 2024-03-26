import Link from "next/link";
import DarkModeToggle from "@/app/components/DarkModeToggle";
import { auth } from "@/app/firebaseConfig";
import { getDoc } from "firebase/firestore";

const useNavbarChildren = async () => {
    const user = await getDoc(doc(db, "users", auth.currentUser.uid));

    return [
        <Link href="/test-page" key={"/test-page"}>
            Test Page
        </Link>,
        <Link href="#" key={"/features"}>
            Features
        </Link>,
        <Link href="#" key={"/pricing"}>
            Pricing
        </Link>,
        <Link href="#" key={"/about"}>
            About
        </Link>,
        <Link href="#" key={"/contact"}>
            Contact
        </Link>,
        auth.currentUser ? (
            <div></div>
        ) : (
            <Link href="/login" key={"/login"}>
                Login
            </Link>
        ),
        <DarkModeToggle key={"dark-mode"} />
    ];
};

export default useNavbarChildren;
