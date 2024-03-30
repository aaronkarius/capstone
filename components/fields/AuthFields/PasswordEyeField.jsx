"use client";
import { Button } from "../../ui/button";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "../../ui/form";
import { Input } from "../../ui/input";
import { useState } from "react";

export default function PasswordEyeField({ form, disabled = false }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem className="relative">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input
                            type={showPassword ? "text" : "password"}
                            disabled={disabled}
                            {...field}
                        />
                    </FormControl>
                    <Button
                        variant="ghost"
                        className="absolute right-0 top-6"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={disabled}
                    >
                        {showPassword ? (
                            <Eye className="h-5 w-5" />
                        ) : (
                            <EyeOff className="h-5 w-5" />
                        )}
                    </Button>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
