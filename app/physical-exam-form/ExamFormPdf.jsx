import { Label } from "@radix-ui/react-dropdown-menu";

export default function ExamFormPdf({ data }) {
    return (
        <div className="grid gap-4">
            <h1 className="text-2xl font-bold">Physical Exam Form</h1>
            {Object.entries(data).map(([key, value]) => (
                <div key={key}>
                    <Label className="font-bold underline">
                        {key.toUpperCase()}
                    </Label>
                    <p className="leading-7">{value}</p>
                </div>
            ))}
        </div>
    );
}
