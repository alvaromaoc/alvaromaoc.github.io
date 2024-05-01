import React from "react";

export default function Hero() {
    return (
        <div className="text-center">
            <h1 className="mb-5 text-5xl font-bold">Álvaro Mañoso Oca, Software Engineer</h1>
            <p className="mb-5">
                I&apos;m Álvaro Mañoso, a software engineer based in Barcelona. I use engineering as a way of
                thinking
                and, I love to bring this thinking strategy to each project I contribute to. I also advocate
                for a multidisciplinary learning which helps us to excel in a world where specialized tasks
                are destined to be done by our technological advances.
            </p>
            <blockquote className="text-2xl font-semibold italic text-center">
                Learn a new skill, this one will
                <span
                    className="mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-br before:from-accent-500 before:to-accentSidecar-500 relative inline-block">
                        <span className="relative text-white">enforce</span>
                    </span>
                the ones you already have
            </blockquote>
        </div>
    )
}