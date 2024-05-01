import GlowingBox from "@/components/glowing-box/GlowingBox";
import React, {ReactNode} from "react";
import StoryPath from "@/components/storypath/StoryPath";

export interface StoryPathWithGlowingBoxesItem {
    title: string,
    subtitle: string,
    content: ReactNode,
    badge?: string,
}

function GlowingBoxStoryPoint({title, subtitle, badge}: { title: string, subtitle: string, badge?: string }) {
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

export default function StoryPathWithGlowingBoxes({items}: { items: StoryPathWithGlowingBoxesItem[] }) {
    const glowingBoxItems = items.map(item => (
        {
            storyPoint: <GlowingBoxStoryPoint title={item.title} subtitle={item.subtitle} badge={item.badge}/>,
            storyContent: item.content
        }));

    return (
        <StoryPath items={glowingBoxItems}/>
    )
}