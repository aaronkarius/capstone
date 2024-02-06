"use client";
import { ThemeProvider as Provider } from "next-themes";

const ThemeProvider = ({ children }) => {
    return (
        <Provider enableSystem={false} attribute="class">
            {children}
        </Provider>
    );
};

export default ThemeProvider;
