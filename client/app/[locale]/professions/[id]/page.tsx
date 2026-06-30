
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { professions } from "@/app/data/professions";
import { getTranslations } from "next-intl/server";
import ApplyModal from "./ApplyModal";


export default async function ProfessionPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const paramsData = await params;

    const profession = professions.find(
        (item) => item.id === paramsData.id
    );

    if (!profession) {
        return notFound();
    }

    const key = profession.translationKey;

    const t = await getTranslations("professionPage");
    const tp = await getTranslations("professionData");
    return (
        <>
            <section
                className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-[70px]"
            >
                {/* BACKGROUND */}
                <>
                    {/* desktop bg */}
                    <Image
                        src={profession.background}
                        alt={tp(`${key}.title`)}
                        fill
                        priority
                        className="hidden md:block object-cover scale-107 blur-[10px] brightness-[0.45]" />
                    {/* mobile bg */}
                    <Image
                        src={profession.mobileBackground}
                        alt={tp(`${key}.title`)}
                        fill
                        priority
                        className="block md:hidden object-cover scale-104 blur-[6px]brightness-[0.55]"
                    />
                </>

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/25 z-0" />

                {/* MAIN CONTENT */}
                <div className="relative z-10 w-full max-w-[1250px]">

                    {/* TITLE */}
                    <h1 className=" text-center text-white font-extrabold leading-[100%] text-[32px] md:text-[62px] tracking-[-2px] drop-shadow-[0_6px_25px_rgba(0,0,0,0.65)]">
                        {tp(`${key}.title`).replace("\n", " ")}
                    </h1>

                    {/* CONTENT */}
                    <div
                        className=" mt-[60px] flex flex-col xl:flex-row items-start justify-center gap-[26px]"
                    >
                        {/* LEFT */}
                        <div className="flex flex-col gap-[22px] w-full max-w-[522px]">

                            {/* SKILLS */}
                            <div
                                className="rounded-[32px] border border-white/25 bg-[rgba(255,255,255,0.48)] backdrop-blur-[28px] shadow-[0_8px_35px_rgba(0,0,0,0.15)] overflow-hidden"
                            >
                                {/* TOP TITLE BLOCK */}
                                <div
                                    style={{ borderRadius: "32px" }}
                                    className="h-[64px] bg-[#cfcfd0] shadow-[0_8px_35px_rgba(0,0,0,0.15)] border-b border-white/20 flex items-center px-[22px]">
                                    <h2
                                        className=" text-[18px] md:text-[22px] font-extrabold text-black leading-[100%]"
                                        style={{
                                            textShadow: "0px 2px 6px rgba(255,255,255,0.25)",
                                        }}
                                    >
                                        {t("studentAcquire")}
                                    </h2>
                                </div>

                                {/* CONTENT */}
                                <div className="px-[22px] py-[20px]">
                                    <ul className="space-y-[6px]">
                                        {tp.raw(`${key}.skills`).map((skill: string) => (
                                            <li
                                                key={skill}
                                                className=" text-[16px] md:text-[18px] text-black leading-[120%]"
                                                style={{
                                                    textShadow: "0px 1px 3px rgba(255,255,255,0.2)",
                                                }}
                                            >
                                                • {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* DURATION */}
                                <div
                                // className="rounded-[32px] border border-white/25 backdrop-blur-[28px] shadow-[0_8px_35px_rgba(0,0,0,0.15)] overflow-hidden"
                                >
                                    {/* TOP TITLE BLOCK */}
                                    <div
                                        style={{ borderRadius: "32px" }}
                                        className=" h-[64px] bg-[#cfcfd0] border-b border-white/20 flex items-center px-[22px] shadow-[0_8px_35px_rgba(0,0,0,0.15)]"
                                    >
                                        <h2
                                            className=" text-[18px] md:text-[22px] font-extrabold text-black"
                                            style={{
                                                textShadow: "0px 2px 6px rgba(255,255,255,0.25)",
                                            }}
                                        >
                                            {t("durationStudy")}:
                                        </h2>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="px-[22px] py-[20px]">
                                        {tp.raw(`${key}.duration`).map((item: string) => (
                                            <p
                                                className=" mt-4 text-[22px] md:text-[22px] leading-[145%] text-black"
                                                key={item}

                                            >
                                                • {item}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* RIGHT IMAGE */}


                        <img
                            src={profession.image1.src}
                            alt={tp(`${key}.title`)}
                            className="relative hidden xl:block w-full max-w-[750px] rounded-[34px] overflow-hidden"
                        />

                    </div>
                    {/* SHORT COURSES */}
                    <div className="mt-[40px] w-full max-w-[1150px] mx-auto">
                        <div className="grid grid-cols-2 overflow-hidden rounded-[20px] md:rounded-[28px] border border-white/25 bg-[rgba(255,255,255,0.45)] backdrop-blur-[28px] shadow-[0_8px_35px_rgba(0,0,0,0.18)]">

                            {/* LEFT */}
                            <div className="border-r border-white/20">
                                <div className="h-[48px] md:h-[62px] flex items-center justify-center px-3 md:px-6 bg-[#d7d7d8]">
                                    <h3 className="text-[16px] md:text-[20px] text-black font-extrabold text-center leading-tight">
                                        {t("shortCourseTitle")}:
                                    </h3>
                                </div>
                                <div className="px-3 md:px-6 py-3 md:py-5">
                                    {tp.raw(`${key}.shortCourse`).map((item: string) => (
                                        <p
                                            className=" mt-4 text-[22px] md:text-[22px] leading-[145%] text-black"
                                            key={item}

                                        >
                                            • {item}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div>
                                <div className="h-[48px] md:h-[62px] flex items-center justify-center px-3 md:px-6 bg-[#d7d7d8]">
                                    <h3 className="text-[16px] text-black md:text-[20px] font-extrabold text-center leading-tight">
                                        {t("shortDurationTitle")}:
                                    </h3>
                                </div>

                                <div className="px-3 md:px-6 py-3 md:py-5">
                                    {tp.raw(`${key}.shortDuration`).map((item: string, index:number) => (
                                        <p
                                            className=" mt-4 text-[22px] md:text-[22px] leading-[145%] text-black"
                                            key={index}

                                        >
                                            • {item}
                                        </p>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* BUTTONS */}
                    <div
                        className=" mt-[40px] flex flex-col sm:flex-row items-center justify-center gap-5"
                    >

                        <ApplyModal />
                        {/* BACK */}
                        <Link
                            href="/"
                            className=" h-[56px] min-w-[170px] rounded-full bg-[#001EFF] flex items-center justify-center text-white text-[18px] font-semibold shadow-[0_0_25px_rgba(0,30,255,0.45)] hover:scale-105 transition"
                        >
                            {t("back")}
                        </Link>
                    </div>

                </div>
            </section>

        </>
    );
}