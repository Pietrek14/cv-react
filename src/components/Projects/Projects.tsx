import type { Project } from "../../types/Project";
import { Polaroid } from "../Polaroid/Polaroid";

const POLAROID_ROTATIONS_DEG = [
    13,
    -5,
    3,
    -8
];

const SingleProject = ({ project, index }: { project: Project, index: number } ) => {
    const rotation = POLAROID_ROTATIONS_DEG[index % POLAROID_ROTATIONS_DEG.length]

    return <div className={`flex ${index % 2 == 0 ? "" : "flex-row-reverse"} gap-12`}>
        <div className="flex flex-col flex-3 gap-2">
            <h3 className="text-2xl">{ project.title }</h3>
            <div className="flex flex-col gap-1 items-end">
                <p className="w-full text-justify leading-6">{ project.description }</p>
                <div className="flex flex-col items-end">
                    { project.links.map(link => <a href={link} className="text-blue-500 underline text-sm">{ link }</a>) }
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center flex-2">
            <Polaroid caption={project.title} imageUrl={project.imageUrl} rotation={rotation} />
        </div>
    </div>
}

export const Projects = ({ projects }: { projects: Project[] }) => {
    return <section className="flex flex-col gap-7 bg-yellow px-16 py-18">
        <h2 className="text-4xl font-semibold">Projekty</h2>
        <div className="flex flex-col gap-12">
            {projects.map((project, i) => <SingleProject
                project={project}
                index={i} />)}
        </div>
    </section>
}