import type { Skill } from "../../types/Skill";
import "./Skills.css"

const SingleSkill = (skill: Skill) => {
    console.log(skill.icon)

    return <div className="flex flex-col items-center gap-1 w-18">
        <div className="bg-gray-300 bg-no-repeat bg-size-[75%] bg-center w-10 h-10 rounded-full" style={ { backgroundImage: `url(${skill.icon})` } } />
        <span className="text-center text-xs text-nowrap">{skill.name}</span>
    </div>
}

export const Skills = ({ skills }: { skills: Skill[] }) => {
    return <section className="flex flex-col gap-12 items-center py-14 bg-black skills">
        <h2 className="text-4xl font-semibold">Kompetencje</h2>
        <div className="grid grid-cols-4 gap-x-2 gap-y-4 justify-center">
            {skills.map(skill => <SingleSkill name={skill.name} icon={skill.icon} />)}
        </div>
    </section>
}