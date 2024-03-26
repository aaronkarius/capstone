"use client";

const NavbarModal = ({ children, setOpen }) => {
    return (
        <>
            <div
                className="fixed inset-0 backdrop-filter backdrop-blur-sm bg-black/30"
                onClick={() => setOpen(false)}
            />
            <div className="absolute flex flex-col items-end gap-10 p-2 text-xl font-bold text-white font top-12 right-4">
                {children.map((child, i) => (
                    <div key={i} className="hover:underline navbar-animation">
                        {child}
                    </div>
                ))}
            </div>
        </>
    );
};

export default NavbarModal;
