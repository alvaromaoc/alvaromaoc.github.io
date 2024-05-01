import {ReactNode} from "react";

export default function GlowingBox({children}: { children: ReactNode }) {
    return (
        <div className={"w-full h-full bg-gradient-to-br from-accent-500 to-accentSidecar-500 rounded-lg box-border p-[1px] hover:shadow-lg hover:shadow-accent-500/30 transition-shadow"}>
            <div className="bg-body-800 rounded-lg w-full h-full">
                {children}
            </div>
        </div>
    )
}