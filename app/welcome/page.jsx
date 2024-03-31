"use client";
import UnauthenticatedNavbar from "@/components/Navigation/UnauthenticatedNavbar";
import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Welcome() {
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(0);
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
            setFirstLoad(false);
        });
    }, [api]);

    return (
        <div className="welcome-background">
            <UnauthenticatedNavbar />
            <main className="flex h-svh">
                <div className="relative my-24 flex w-screen flex-1 items-center justify-center px-8 py-24 sm:my-32">
                    <h1
                        className={cn(
                            "absolute top-0 text-center text-2xl font-extrabold tracking-tight opacity-0 sm:text-3xl md:text-4xl lg:text-5xl",
                            current !== 1
                                ? "showTopHero"
                                : !firstLoad && "topHeroBack"
                        )}
                    >
                        Streamline Your Veterinary Practice
                    </h1>
                    {/* todo: should we add demos into welcome page? */}
                    {/* <div className="absolute top-0 z-10 mt-12 min-w-32 p-8 sm:mt-24">
                        <RecordingInput
                            id="patientInfo"
                            label="Patient Information"
                            placeholder="Enter details manually or click the microphone to dictate. Words such as 'period' and 'comma' can be used to add punctuation."
                            textarea
                            inputProps="max-w-xs min-w-64"
                        />
                    </div> */}
                    <Carousel
                        setApi={setApi}
                        className="h-full w-full flex-1"
                        style={{
                            animation: "fadeIn 1s ease-in-out forwards"
                        }}
                    >
                        <CarouselContent
                            className="-ml-4 max-w-full flex-1"
                            wrapperClassName="h-full items-center flex justify-center"
                        >
                            <CarouselItem className="flex flex-col flex-wrap items-center justify-start gap-2 pl-4">
                                {/* pre-animation holder for the text that needs
                                to animate outside of the holder */}
                                <div
                                    className={cn(
                                        "text-center text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl",
                                        current !== 1
                                            ? "hideBottomHero"
                                            : "showBottomHero"
                                    )}
                                    aria-hidden="true"
                                >
                                    Streamline Your Veterinary Practice
                                </div>
                                <h4 className="text-md text-muted-background max-w-xl scroll-m-20 text-justify font-semibold tracking-tight dark:text-muted-foreground sm:text-xl">
                                    <span className="text-background dark:text-foreground">
                                        VetVoice
                                    </span>{" "}
                                    provides a comprehensive suite of tools to
                                    manage your veterinary practice efficiently
                                    and effectively.
                                </h4>
                            </CarouselItem>
                            <CarouselItem className="flex flex-col items-center justify-start gap-2 pl-4">
                                <h3 className="scroll-m-20 text-lg font-semibold tracking-tight sm:text-xl md:text-2xl lg:text-3xl">
                                    Voice Dictation
                                </h3>
                                <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                                    Save Time with Dictation
                                </h1>
                                <h4 className="text-md text-muted-background max-w-xl scroll-m-20 text-justify font-semibold tracking-tight dark:text-muted-foreground sm:text-lg md:text-xl">
                                    VetVoice puts your time first. Patient
                                    information can be filled out with the click
                                    of a button, allow your voice to do the
                                    typing for you.
                                </h4>
                            </CarouselItem>
                            <CarouselItem className="flex flex-col items-center justify-start gap-2 pl-4">
                                <h3 className="scroll-m-20 text-lg font-semibold tracking-tight sm:text-xl md:text-2xl lg:text-3xl">
                                    Appointment Management
                                </h3>
                                <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                                    Manage Your Schedule with Ease
                                </h1>
                                <h4 className="text-md text-muted-background max-w-xl scroll-m-20 text-justify font-semibold tracking-tight dark:text-muted-foreground sm:text-lg md:text-xl">
                                    Our intuitive calendar view makes it easy to
                                    see your upcoming appointments at a glance.
                                    Schedule new appointments with just a few
                                    clicks.
                                </h4>
                            </CarouselItem>
                            <CarouselItem className="flex flex-col items-center justify-start gap-2 pl-4">
                                <h3 className="scroll-m-20 text-lg font-semibold tracking-tight sm:text-xl md:text-2xl lg:text-3xl">
                                    Patient Records
                                </h3>
                                <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                                    Keep Track of Patient History
                                </h1>
                                <h4 className="text-md text-muted-background max-w-xl scroll-m-20 text-justify font-semibold tracking-tight dark:text-muted-foreground sm:text-lg md:text-xl">
                                    Easily manage patient records, including
                                    medical history, vaccinations, and
                                    treatments. All information is stored
                                    securely and can be accessed at any time.
                                </h4>
                            </CarouselItem>
                            <CarouselItem className="flex flex-col items-center justify-start gap-2 pl-4">
                                <h3 className="scroll-m-20 text-lg font-semibold tracking-tight sm:text-xl md:text-2xl lg:text-3xl">
                                    Analytics
                                </h3>
                                <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                                    Make Data-Driven Decisions
                                </h1>
                                <h4 className="text-md text-muted-background max-w-xl scroll-m-20 text-justify font-semibold tracking-tight dark:text-muted-foreground sm:text-lg md:text-xl">
                                    Powerful analytics and data visualizations
                                    to help you track your practice&apos;s
                                    performance. Make informed decisions to
                                    improve your services and patient care.
                                </h4>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="left-0 max-md:hidden" />
                        <CarouselNext className="right-0 max-md:hidden" />
                        <CarouselDots className="end-0 -mt-12" />
                    </Carousel>
                </div>
            </main>
        </div>
    );
}
