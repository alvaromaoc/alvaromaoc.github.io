import React from "react";
import StoryPath from "@/components/storypath/StoryPath";
import GlowingBox from "@/components/glowing-box/GlowingBox";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Backend Software Engineering at GFT",
    description: "The place where I grew up, where my responsibilities got bigger and my duties more relevant.",
};

function AcademicStoryPoint(title: string, subtitle: string, badge?: string,) {
    return (
        <GlowingBox>
            <div className="w-full h-full box-border p-3 flex justify-center items-center flex-col">
                {badge
                    ? <span className={"text-center bg-accent-500/50 rounded text-sm font-bold px-2 mb-2"}>{badge}</span>
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
            storyPoint: AcademicStoryPoint("Started as Junior", "Feb 2023"),
            storyContent: <p className="text-body-400"><em>Empty</em></p>
        },
        {
            storyPoint: AcademicStoryPoint("Promoted to Mid", "Apr 2024"),
            storyContent: <p className="text-body-400"><em>Empty</em></p>
        },
    ]

    return (
        <section className="my-container">
            <h1 className={"font-bold text-2xl pb-3 bg-gradient-to-r from-accent-500 to-accentSidecar-500 inline-block text-transparent bg-clip-text"}>
                {metadata.title?.toString()}
            </h1>
            <p className="text-body-400"><em>Empty</em></p>
            <StoryPath items={story}></StoryPath>
        </section>
    )
}