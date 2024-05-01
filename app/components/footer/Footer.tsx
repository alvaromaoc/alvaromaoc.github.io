import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import packageJson from '../../../package.json';
import Link from "next/link";

export default function Contact() {
    const academicHighlights = [
        {title: 'Bachelor\'s degree in Informatics Engineering', path: '/bachelors'},
        {title: 'Master\'s degree in Software Development and Architecture', path: '/masters'},
    ]
    const professionalHighlights = [
        {title: 'Full Stack Software Engineer @ IThinkUPC', path: '/ithinkupc'},
        {title: 'Java Software Engineer @ GFT', path: '/gft'},
    ]
    const personalHighlights = [
        {title: 'Board of European Students of Technology (BEST)', path: '/best'},
    ]
    return (
        <div className="text-body-300 bg-body-800">
            <div className={"my-container py-5 box-border"}>
                <div className="w-full flex flex-row flex-wrap gap-5 justify-center pb-5">
                    <div className={"lg:basis-[calc(50%-0.75rem)] basis-full grow-0 shrink-0 flex flex-col gap-y-5"}>
                        <NavigationList title={"Academic highlights"}
                                        navigationItems={academicHighlights}></NavigationList>
                        <NavigationList title={"Professional Highlights"}
                                        navigationItems={professionalHighlights}></NavigationList>
                        <NavigationList title={"Personal Highlights"}
                                        navigationItems={personalHighlights}></NavigationList>
                    </div>
                    <div
                        className={"lg:basis-[calc(50%-0.75rem)] basis-full grow-0 shrink-0 flex flex-col justify-end items-end"}>
                        <ul className={"flex gap-x-3"}>
                            <li><Link href={"https://linkedin.com/in/alvaromaoc"} target={"_blank"}><FontAwesomeIcon
                                className={"h-6 hover:text-[#0e76a8]"} icon={faLinkedin}/></Link></li>
                            <li><Link href={"https://github.com/alvaromaoc"} target={"_blank"}><FontAwesomeIcon
                                className={"h-6 hover:text-black"} icon={faGithub}/></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-between text-body-400">
                    <p>alvaromaoc.dev</p>
                    <p>{packageJson.version}</p>
                </div>
            </div>
        </div>
    )
}

function NavigationList({title, navigationItems}: {
    title: string,
    navigationItems: { title: string, path: string }[]
}) {
    return (
        <div className={"leading-loose"}>
            <p className={"underline font-medium"}>{title}</p>
            <ul>
                {navigationItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.path}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}