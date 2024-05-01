import React from "react";
import type {Metadata} from "next";
import StoryPathWithGlowingBoxes from "@/components/storypath/StoryPathWithGlowingBoxes";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Full Stack Software Engineer at IThinkUPC",
    description: "My first professional experience, a place where I experienced with all the aspects of the Software Engineering and where I discovered which will be my career path.",
};

export default function LifePath() {
    const story = [
        {
            title: "Started as Intern",
            subtitle: "Sep 2020",
            content: <>
                <p>
                    My first day at the office was september 16th of 2020, that day I met my team colleagues,
                    engineering managers and other people involved in the day by day. My first impression was quite
                    good, I saw that I could work in many different projects with different technologies which would
                    help me learn multiple disciplines.
                </p>
            </>
        },
        {
            title: "Promoted to Junior",
            subtitle: "Apr 2022",
            content: <>
                <p className={"pb-2"}>
                    After some time in IThinkUPC I got very experienced in the projects I was involved and became quite
                    efficient in my tasks and responsibilities.
                </p>
                <p>
                    My engineering managers wanted me to be closer to the client and more commited to the company so
                    they offered me my first employment contract. The april 1st of 2022 I went to the office the same as
                    every day but with a different feeling. At that moment I was still studying my bachelor&apos;s
                    degree
                    so it was a challenging experience for me.
                </p>
            </>
        },
        {
            title: "Leave",
            subtitle: "Jul 2022",
            content: <>
                <p className={"pb-2"}>
                    I left IThinkUPC due to academic purposes, as you can see in the <Link className={"text-link"}
                                                                                           href={"/bachelors"}>Bachelor&apos;s
                    degree in Informatics Engineering</Link> page, I went to study abroad and it was incompatible with
                    my responsibilities in IThinkUPC.
                </p>
                <p>
                    This was a difficult decision to take, but correctly taken, as it was also the moment to step back to
                    go forward in my near future.
                </p>
            </>
        },
    ]

    return (
        <section className="my-container">
            <h1 className={"font-bold text-2xl pb-3 bg-gradient-to-r from-accent-500 to-accentSidecar-500 inline-block text-transparent bg-clip-text"}>
                {metadata.title?.toString()}
            </h1>
            <p>In september 2020 I started as intern in <Link className={"text-link"} target={"_blank"}
                                                              href={"https://www.ithinkupc.com"}>IThinkUPC</Link>, the
                first company I worked for. Being part of IThinkUPC was decisive in my professional career as thanks to
                the internship program they had, the team I enrolled in and the colleagues I met there, I learned a lot
                about the business, the technical stack and team work dynamics.</p>
            <StoryPathWithGlowingBoxes items={story}></StoryPathWithGlowingBoxes>
        </section>
    )
}