import React from "react";
import Link from "next/link";
import type {Metadata} from "next";
import StoryPathWithGlowingBoxes from "@/components/storypath/StoryPathWithGlowingBoxes";

export const metadata: Metadata = {
    title: "Bachelor's degree in Informatics Engineering",
    description: "My first big academic achievement, being a student in one of the most recognized universities in Europe.",
};

export default function LifePath() {
    const story = [
        {
            title: "Start",
            subtitle: "Sep 2018",
            content: <p>
                I registered in the university the July 10th of 2018 to start the next september, my first subjects were
                programming, introduction to computers, physics and math fundamentals.
            </p>
        },
        {
            title: "BEST Barcelona enrollment",
            subtitle: "May 2020",
            badge: "cross-highlight",
            content: <>
                <p className={"pb-2"}>
                    In my second year I decided to enroll in an international student association from my university
                    made for engineers, <strong>Board of European Students of Technology (BEST)</strong>, one of the
                    best decisions I could ever take.
                </p>
                <p>
                    Learn more about this phase in <Link href={"/best"} className={"text-link"}>its page</Link>.
                </p>
            </>
        },
        {
            title: "Specialization in computing",
            subtitle: "Sep 2020",
            content: <>
                <p className={"pb-2"}>
                    The university bring the opportunity to students to specialize from one to two of the 5 fields that
                    the
                    university has, computing, computer engineering, software engineering, information systems and
                    information technologies (learn more about this specializations in the <Link target={"_blank"}
                                                                                                 href={"https://www.fib.upc.edu/en/studies/bachelors-degrees/bachelor-degree-informatics-engineering/curriculum/specializations"}
                                                                                                 className={"text-link"}>
                    official page</Link>).
                </p>
                <p className={"pb-2"}>
                    I chose computing, which is described by the university as:
                </p>
                <p>
                    <em>&quot;Students who choose this specialisation will learn to design complex computer systems that
                        comply
                        with critical efficiency, reliability and security requirements. They will acquire the knowledge
                        to
                        assess these requirements and recommend the most suitable hardware, programming languages and
                        algorithms for specific solutions.&quot;</em>
                </p>
            </>
        },
        {
            title: "Intern at IThinkUPC",
            subtitle: "Sep 2020",
            badge: "cross-highlight",
            content: <>
                <p className={"pb-2"}>
                    The university allow the students to start as interns in several of the associated companies with
                    the Universitat Politècnica de Catalunya (UPC) when a minimum set of requirements is met by the
                    student. I took advantage of this opportunity and contacted IThinkUPC to ask for an internship in
                    the <em>Application Outsourcing</em> department of the company, after a few interviews they hired
                    me.
                </p>
                <p>
                    Learn more about this phase in <Link href={"/ithinkupc"} className={"text-link"}>its page</Link>.
                </p>
            </>
        },
        {
            title: "International studies in Prague",
            subtitle: "Sep 2022",
            content: <>
                <p className={"pb-2"}>
                    Thanks to Erasmus+ program that my university was part of I had the opportunity to study abroad for
                    6 months, my destination was Prague in the Czech Republic. During this experience I enrolled in
                    several subjects related with information security such
                    as <em>Cryptanalysis</em>, <em>Cryptography</em>, <em>Computer forensics</em>, <em>Algorithms of
                    Information Security</em> and <em>DevOps</em>
                </p>
                <p className={"pb-2"}>
                    Apart from the academic achievements, the most significant part for me was my personal evolution as
                    being in a different country with completely different language, sharing the experience with unknown
                    people in an unknown city boosted rapidly my adaptability, resilience and social capacities.
                </p>
                <p>
                    This 6 months were a point and apart in my life.
                </p>
            </>
        },
        {
            title: "Graduation",
            subtitle: "Feb 2023",
            content: <p>
                I became officially an Engineer the February 23rd of 2023, when the university issued my provisional
                diploma. Since that moment I kept an eye in the software development and architecture as I wanted to
                continue expanding my knowledge.
            </p>
        },
    ]

    return (
        <section className="my-container">
            <h1 className={"font-bold text-2xl pb-3 bg-gradient-to-r from-accent-500 to-accentSidecar-500 inline-block text-transparent bg-clip-text"}>
                {metadata.title?.toString()}
            </h1>
            <p className={"pb-2"}>
                In september 2018 I started my <Link
                href={"https://www.fib.upc.edu/en/studies/bachelors-degrees/bachelor-degree-informatics-engineering"}
                target={"_blank"} className={"text-link"}>Bachelor&apos;s Degree in Informatics Engineering</Link> at
                the <strong>Facultat d&apos;Informàtica de Barcelona (FIB)</strong> of the <strong>Universitat
                Politècncia de Catalunya (UPC)</strong>. The Universitat Politècnica de Catalunya (UPC) is one of the
                most recognized universities in Europe for technical studies.
            </p>
            <p>
                <em className={"text-body-400"}>
                    Click in the items below in order to navigate throw all the key events during my bachelor&apos;s
                    degree
                </em>
            </p>
            <StoryPathWithGlowingBoxes items={story}></StoryPathWithGlowingBoxes>
        </section>
    )
}