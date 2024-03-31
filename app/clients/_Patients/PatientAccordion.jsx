import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

export default function AnimalAccordion() {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <div className="flex gap-2">
                        Patients
                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                            0
                        </Badge>
                    </div>
                </AccordionTrigger>
                <div className="fixed end-12 -mt-12">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Add Patient</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>New Patient</DialogTitle>
                                <DialogDescription>
                                    Patient information can always be updated
                                    later
                                </DialogDescription>
                            </DialogHeader>
                            Working on it!
                        </DialogContent>
                    </Dialog>
                </div>
                <AccordionContent>Todo !</AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
