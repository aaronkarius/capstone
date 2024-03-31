import { Input } from "../ui/input";

// filter is kinda on its matching
// todo: look into it
export default function GlobalFilter({ table, globalFilter }) {
    return (
        <Input
            placeholder="Filter table..."
            value={globalFilter ?? ""}
            onChange={event => {
                table.setGlobalFilter(event.target.value);
            }}
            className="max-w-sm"
        />
    );
}
