import { Checkbox } from "@/components/ui/checkbox";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel
} from "@/components/ui/form";

export default function RememberMeField({ form }) {
    return (
        <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
                <FormItem className="flex items-center space-x-3 space-y-0 p-4">
                    <FormControl>
                        <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                    </FormControl>
                    <FormLabel>Remember me</FormLabel>
                </FormItem>
            )}
        />
    );
}
