import Link from "next/link";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 flex flex-col items-center w-full gap-2 px-4 py-6 border-t bg-slate-300 dark:bg-slate-500 sm:flex-row shrink-0 md:px-6">
            <p className="text-xs">© VetVoice. All rights reserved.</p>
            <nav className="flex gap-4 sm:ml-auto sm:gap-6">
                <Link className="footer-text" href="#">
                    About Us
                </Link>
                <Link className="footer-text" href="#">
                    Contact
                </Link>
                <Link className="footer-text" href="#">
                    Privacy Policy
                </Link>
            </nav>
        </footer>
    );
};

export default Footer;
