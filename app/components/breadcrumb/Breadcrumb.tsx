"use client"

import {usePathname} from "next/navigation";
import Link from "next/link";
import React from "react";

export default function Breadcrumb() {
    const pathname = usePathname();
    const hierarchy = pathname.split("/").filter(element => element.length !== 0);

    const separator = <span className={"px-2 text-body-500"}>/</span>;

    return (
        <div
            className={`${hierarchy.length === 0 ? 'hidden' : 'block mb-5'} bg-body-700 rounded-lg text-body-300 box-border p-5`}>
            <ul className={"flex flex-row"}>
                <li className={"font-medium bg-gradient-to-r from-accent-500 to-accentSidecar-500 inline-block text-transparent bg-clip-text"}>
                    <Link href={"/"}>Home</Link>
                </li>
                {hierarchy.length > 0 && separator}
                {hierarchy.map((element, index) => {
                    let href = `/${hierarchy.slice(0, index + 1).join("/")}`;
                    return (<>
                        <li key={index} className={"hover:text-body-400"}>
                            <Link href={href}>{element}</Link>
                        </li>
                        {hierarchy.length !== index + 1 && separator}
                    </>)
                })}
            </ul>
        </div>
    )
}