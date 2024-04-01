"use client";
import { Button } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form";
import { CalendarIcon } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function DatePicker({ open, setOpen, field, loading }) {
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                        )}
                    >
                        {field.value ? (
                            format(field.value, "PPP")
                        ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={value => {
                        field.onChange(value);
                        setOpen(false);
                    }}
                    disabled={date =>
                        loading ||
                        date > new Date() ||
                        date < new Date("1900-01-01")
                    }
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}
