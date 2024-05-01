import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Master's degree in Software Development and Architecture",
};

export default function LifePath() {
    return (
        <section className="my-container">
            <h1 className={"font-bold text-2xl pb-3 bg-gradient-to-r from-accent-500 to-accentSidecar-500 inline-block text-transparent bg-clip-text"}>
                {metadata.title?.toString()}
            </h1>
            <p className="text-body-400"><em>Empty</em></p>
        </section>
    )
}