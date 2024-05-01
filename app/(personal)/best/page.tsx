import React from "react";
import StoryPath from "@/components/storypath/StoryPath";
import GlowingBox from "@/components/glowing-box/GlowingBox";
import type {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Board of European Students of Technology (BEST)",
    description: "From being a rookie member to be Head of Department and Lead of the Week of Engineering Competition. The place where I took my firsts real world responsibilities.",
};

function AcademicStoryPoint(title: string, subtitle: string, badge?: string,) {
    return (
        <GlowingBox>
            <div className="w-full h-full box-border p-3 flex justify-center items-center flex-col">
                {badge
                    ?
                    <span className={"text-center bg-accent-500/50 rounded text-sm font-bold px-2 mb-2"}>{badge}</span>
                    : ''
                }
                <p className={"pb-2 max-w-80 text-center"}>{title}</p>
                <p className={"text-body-400 text-center"}>{subtitle}</p>
            </div>
        </GlowingBox>
    )
}

export default function LifePath() {
    const story = [
        {
            storyPoint: AcademicStoryPoint("Baby member", "May 2020"),
            storyContent: <p className="text-body-400"><em>Empty</em></p>
        },
        {
            storyPoint: AcademicStoryPoint("IT Department Coordinator", "Apr 2023"),
            storyContent: <p className="text-body-400"><em>Empty</em></p>
        },
        {
            storyPoint: AcademicStoryPoint("Lead of Week of Engineering Competition", "Apr 2023 - Dec 2023"),
            storyContent: <p className="text-body-400"><em>Empty</em></p>
        },
        {
            storyPoint: AcademicStoryPoint("Full member", "May 2023"),
            storyContent: <>
                <p>I became Full member the May 20th of 2024</p>
            </>
        },
        {
            storyPoint: AcademicStoryPoint("Corporate Relations Department Coordinator", "Dec 2023 - Oct 2024"),
            storyContent: <p className="text-body-400"><em>Empty</em></p>
        },
        {
            storyPoint: AcademicStoryPoint("Alumni", "May 2024"),
            storyContent: <>
                <p>I became Alumni member the May 18th of 2024</p>
            </>
        },
    ]

    return (
        <section className="my-container">
            <h1 className={"font-bold text-2xl pb-3 bg-gradient-to-r from-accent-500 to-accentSidecar-500 inline-block text-transparent bg-clip-text"}>
                {metadata.title?.toString()}
            </h1>
            <p className={"pb-2"}>
                <Link target={"_blank"} className={"text-link"} href={"https://best.eu.org"}>BEST: Board of European
                    Students of Technology</Link> is an international organization present among multiple universities
                in Europe. The Universitat Politècnica de Catalunya (UPC) is one of this universities as it has <Link
                target={"_blank"} className={"text-link"} href={"https://bestbarcelona.org"}>BEST
                Barcelona</Link> registered in it.
            </p>
            <p>
                I enrolled in <strong>BEST Barcelona</strong> aiming to expose myself to new international experiences
                and challenges, and it exceeded my expectations.
            </p>
            <StoryPath items={story}></StoryPath>
        </section>
    )
}