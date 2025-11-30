import type { Education } from "../../types/Education"
import ArrowIcon from "../../assets/arrow_forward.svg"
import "./EducationHistory.css"

const SingleEducationInstance = ({ school, startDate, endDate, descriptors }: Education) => {
    return <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-semibold">{ school }</h3>
            <h4 className="text-md">{ startDate == endDate ? startDate : `${startDate}-${endDate}` }</h4>
        </div>
        <ul className="flex flex-col gap-1 pl-7">
            { descriptors.map(descriptor => <li className="flex items-center gap-2">
                <img src={ArrowIcon} className="h-5" />
                <span className="text-sm">{ descriptor }</span>
            </li>) }
        </ul>
    </div>
}

export const EducationHistory = ({ educationHistory }: { educationHistory: Education[] }) => {
    return <section className="education-history">
        <div className="flex flex-col gap-12 bg-red px-16 pt-32 pb-21">
            <h2 className="text-4xl font-semibold">Wykształcenie</h2>
            <div className="flex flex-col gap-6">
                {educationHistory.map(education => <SingleEducationInstance
                    school={education.school}
                    startDate={education.startDate}
                    endDate={education.endDate}
                    descriptors={education.descriptors}
                />)}
            </div>
        </div>
    </section>
}