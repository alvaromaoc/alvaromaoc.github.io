import React, {ReactNode} from "react";
import Hero from "@/app/components/hero/Hero";
import Link from "next/link";
import GlowingBox from "@/components/glowing-box/GlowingBox";

function Path({title, children, subtitle}: { title: string, children: ReactNode, subtitle?: string }) {
    return (
        <div className={"w-full"}>
            <div className={"pb-3"}>
                <h3 className={"font-bold text-xl bg-gradient-to-r from-accent-500 to-accentSidecar-500 inline-block text-transparent bg-clip-text"}>
                    {title}
                </h3>
                {subtitle ? <small className={"text-slate-500 block"}>{subtitle}</small> : null}
            </div>
            <div className={"text-body-400"}>
                {children}
            </div>
        </div>
    )
}

function BachelorsPath() {
    return (
        <Path title={"Bachelor's degree in Informatics Engineering"} subtitle={"Universitat Politècnica de Catalunya"}>
            <p>
                My first big academic achievement, being a student in one of the most recognized universities in Europe.
            </p>
        </Path>
    )
}

function BestPath() {
    return (
        <Path title={"Board of European Students of Technology (BEST)"}>
            <p>
                From being a rookie member to be Head of Department and Lead of the Week of Engineering Competition. The
                place where I took my firsts real world responsibilities.
            </p>
        </Path>
    )
}

function MastersPath() {
    return (
        <Path title={"Master's degree in Software Development and Architecture"}
              subtitle={"La Salle - Universitat Ramon Llull"}>
            <em>Phase in progress...</em>
        </Path>
    )
}

function IThinkUPCPath() {
    return (
        <Path subtitle={"Full Stack Software Developer"} title={"IThinkUPC"}>
            <p>
                My first professional experience, a place where I experienced with all the aspects of the Software
                Engineering and where I discovered which will be my career path.
            </p>
        </Path>
    )
}

function GftPath() {
    return (
        <Path subtitle={"Java Software Engineer"} title={"GFT IT Consulting"}>
            <p>
                The place where I grew up, where my responsibilities got bigger and my duties more relevant.
            </p>
        </Path>
    )
}

function TymitPath() {
    return (
        <Path subtitle={"Java Backend Engineer"} title={"Tymit"}>
            <p>
                <em>Empty</em>
            </p>
        </Path>
    )
}

function HighlightsSection({title, highlights, children}: {
    title: string,
    highlights: { path: string, content: ReactNode }[],
    children: ReactNode
}) {
    return (
        <section className="my-container my-10">
            <h2 className={"font-bold text-xl pb-3 bg-gradient-to-r from-accent-500 to-accentSidecar-500 inline-block text-transparent bg-clip-text"}>
                {title}
            </h2>
            <p className={"pb-5"}>
                {children}
            </p>
            <ul className="w-full flex flex-row flex-wrap gap-5 justify-center">
                {highlights.map((element, index) => (
                    <li key={index}
                        className={"xl:basis-[calc(100%/3-5rem/6)] lg:basis-[calc(50%-0.75rem)] basis-full grow-0 shrink-0"}>
                        <Link href={element.path}>
                            <GlowingBox>
                                <div className="flex items-center justify-start flex-col box-border p-5">
                                    {element.content}
                                </div>
                            </GlowingBox>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default function Home() {
    const academicHighlights: { path: string, content: ReactNode }[] = [
        {path: "/bachelors", content: <BachelorsPath/>},
        {path: "/masters", content: <MastersPath/>},
    ]

    const professionalHighlights: { path: string, content: ReactNode }[] = [
        {path: "/ithinkupc", content: <IThinkUPCPath/>},
        {path: "/gft", content: <GftPath/>},
        {path: "/tymit", content: <TymitPath/>}
    ]

    const personalHighlights: { path: string, content: ReactNode }[] = [
        {path: "/best", content: <BestPath/>},
    ]

    return (
        <>
            <section className="my-container">
                <div className={"block bg-accent-500/20 rounded-lg text-body-300 box-border p-5"}>
                    <strong>Hi visitor!</strong> Welcome to my portfolio, it is still in construction so you will see
                    some contents still
                    pending to be completed. Thank you for your understanding.
                </div>
            </section>
            <section className="my-container my-5">
                <Hero></Hero>
            </section>
            <HighlightsSection title={"Academic highlights"} highlights={academicHighlights}>
                I advocate an <em>always learning</em> mindset, this one helps me to deep into specific market niches or
                either drives me through unexplored disciplines. In this section you will find my bachelor&apos;s and
                master&apos;s degrees and other types of academic achievements.
            </HighlightsSection>
            <HighlightsSection title={"Professional highlights"} highlights={professionalHighlights}>
                This is the most interesting part if you&apos;re considering to work with me, my professional
                experience. Here you will see which are the technologies I expertise on, the market sectors I know the
                most and other relevant information that will help you know which kind of team mate I am.
            </HighlightsSection>
            <HighlightsSection title={"Personal highlights"} highlights={personalHighlights}>
                Here you will find stories that deserve to have a chapter apart, challenges that I decide to face which
                helped me to achieve harmony between my academic and professional tracks.
            </HighlightsSection>
        </>
    )
}