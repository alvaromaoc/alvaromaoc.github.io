"use client"

import {MouseEvent, ReactNode, useRef, useState} from "react";

export interface StoryPathItem {
    storyPoint: ReactNode,
    storyContent: ReactNode,
}

export default function StoryPath({items}: { items: StoryPathItem[] }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [activeStory, setActiveStory] = useState(0);
    const contentRef = useRef<HTMLElement>(null);

    const transitionDuration = 300;

    const storyPointClick = (event: MouseEvent<HTMLLIElement>, index: number) => {
        event.preventDefault();
        if (activeStory !== index) {
            setIsTransitioning(true);

            const timeout = setTimeout(() => {
                setActiveStory(index);
                setIsTransitioning(false);
                contentRef.current?.scrollIntoView({behavior: "smooth"});
            }, transitionDuration);

            return () => clearTimeout(timeout);
        } else {
            contentRef.current?.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <div className="w-full py-5">
            <ul className="w-full flex md:flex-row flex-col gap-5">
                {items.map((item, index) => (
                    <li key={index} onClick={(e) => storyPointClick(e, index)}
                        className={`cursor-pointer flex md:flex-col flex-row-reverse rounded-md flex-1`}>
                        {item.storyPoint}
                        <div
                            className="w-full relative flex md:flex-row flex-col box-border md:py-5 md:px-0 px-5 flex-1 md:items-end items-center">
                            <span
                                className={`h-[1px] flex-1 md:-ml-5 md:mt-0 -mt-5 w-1/2 border ${index === 0 ? 'border-transparent' : 'border-body-400'}`}/>
                            <span
                                className={`absolute left-[calc(50%-0.5rem)] top-[calc(50%-0.5rem)] w-[1rem] h-[1rem] rounded-full border border-body-300 ${activeStory === index ? 'bg-body-300' : 'bg-body-900'}`}/>
                            <span
                                className={`h-[1px] flex-1 md:-mr-5 md:mb-0 -mb-5 w-1/2 border ${index === items.length - 1 ? 'border-transparent' : 'border-body-400'}`}/>
                        </div>
                    </li>
                ))}
            </ul>
            <section ref={contentRef}
                     className={`w-full box-border pt-3 transition-opacity duration-${transitionDuration} ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {items.at(activeStory)?.storyContent}
            </section>
        </div>
    )
}