import React from "react";

const About = () => {
    return (
        <div className="relative min-h-screen bg-[#EEF1F6] py-24 overflow-hidden">

            {/* Ruled notebook-paper backdrop, consistent with Hero */}
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(to bottom, transparent 0px, transparent 35px, #C7D0DD 36px)",
                }}
            />
            <div
                aria-hidden="true"
                className="absolute top-0 bottom-0 left-16 md:left-24 w-px bg-red-300/60 hidden sm:block"
            />

            <div className="relative max-w-5xl mx-auto px-6 md:pl-28">

                {/* Heading */}
                <div className="mb-16">
                    <span className="inline-flex items-center gap-2 bg-white text-[#3457D5] px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm border border-[#C7D0DD]">
                        ✎ Why we built this
                    </span>

                    <h1
                        className="mt-6 text-5xl font-bold text-[#1B2430] leading-[1.1]"
                        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                    >
                        About{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10">NoteJS</span>
                            <span
                                aria-hidden="true"
                                className="absolute left-0 right-0 bottom-1 h-4 -z-0"
                                style={{ backgroundColor: "#FFD84D", transform: "rotate(-1deg)" }}
                            />
                        </span>
                    </h1>

                    <p className="mt-5 text-lg text-[#3E4757] leading-8 max-w-2xl">
                        NoteJS is a collaborative platform that lets students
                        upload, share, and access study materials anytime,
                        anywhere — sorted by faculty and semester, not
                        buried in a group chat.
                    </p>
                </div>

                {/* Mission */}
                <div className="relative bg-white rounded-lg border border-[#E3E7EF] shadow-sm p-8 md:p-10 mb-8 pl-10">
                    <div
                        aria-hidden="true"
                        className="absolute left-0 top-0 bottom-0 w-2 rounded-l-lg"
                        style={{ backgroundColor: "#3457D5" }}
                    />

                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#3457D5] bg-[#EEF1F6] px-2 py-1 rounded">
                        Our mission
                    </span>

                    <h2
                        className="text-2xl font-semibold text-[#1B2430] mt-3 mb-4"
                        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                    >
                        Simplify learning through sharing
                    </h2>

                    <p className="text-[#3E4757] leading-8 max-w-3xl">
                        Our mission is to simplify learning by providing a
                        centralized platform where students can easily share
                        notes, assignments, and educational resources. We
                        believe knowledge grows when it is shared.
                    </p>
                </div>

                {/* Why Choose / Built for Students */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">

                    <div className="bg-white rounded-lg border border-[#E3E7EF] shadow-sm p-8">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-[#3457D5] bg-[#EEF1F6] px-2 py-1 rounded">
                            Why choose NoteJS
                        </span>

                        <h2
                            className="text-xl font-semibold text-[#1B2430] mt-3 mb-5"
                            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                        >
                            Made for real coursework
                        </h2>

                        <ul className="space-y-3 text-[#3E4757]">
                            {[
                                "Easy note uploading",
                                "Download study materials anytime",
                                "Organized by faculty and semester",
                                "Clean, distraction-free interface",
                                "Secure student accounts",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span
                                        aria-hidden="true"
                                        className="mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: "#FFD84D" }}
                                    />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg border border-[#E3E7EF] shadow-sm p-8">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-[#3457D5] bg-[#EEF1F6] px-2 py-1 rounded">
                            Who it's for
                        </span>

                        <h2
                            className="text-xl font-semibold text-[#1B2430] mt-3 mb-5"
                            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                        >
                            Built for students
                        </h2>

                        <p className="text-[#3E4757] leading-8">
                            Whether you're preparing for exams, revising
                            lecture notes, or helping classmates catch up,
                            NoteJS gives you a reliable place to collaborate
                            and learn together. Our goal is to make
                            educational resources more accessible for
                            everyone.
                        </p>
                    </div>

                </div>

                {/* Vision */}
                <div
                    className="relative rounded-lg p-10 md:p-12 text-center overflow-hidden"
                    style={{ backgroundColor: "#1B2430" }}
                >
                    <div
                        aria-hidden="true"
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(to bottom, transparent 0px, transparent 35px, rgba(255,255,255,0.05) 36px)",
                        }}
                    />

                    <div className="relative">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-[#FFD84D] bg-white/10 px-3 py-1 rounded">
                            Looking ahead
                        </span>

                        <h2
                            className="text-3xl font-bold text-white mt-4 mb-5"
                            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                        >
                            Our vision
                        </h2>

                        <p className="text-lg text-[#C7D0DD] leading-8 max-w-2xl mx-auto">
                            We envision a community where every student has
                            quick access to quality study materials, and can
                            contribute to the success of others through
                            knowledge sharing.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
