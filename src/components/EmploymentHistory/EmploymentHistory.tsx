import type { Employment } from "../../types/Employment"
import ArrowIcon from "../../assets/arrow_forward.svg"
import "./EmploymentHistory.css"

const SingleEmployment = ({ title, employer, startDate, endDate, responsibilities }: Employment) => {
    return <div className="flex flex-col gap-2">
        <div className="flex flex-col">
            <h3 className="text-2xl font-semibold">{ employer } ({startDate == endDate ? startDate : `${startDate}-${endDate}`})</h3>
            <h4 className="text-xl">{ title }</h4>
        </div>
        <ul className="flex flex-col gap-1 pl-7">
            { responsibilities.map(responsibility => <li className="flex items-center gap-2">
                <img src={ArrowIcon} className="h-5" />
                <span className="text-sm">{ responsibility }</span>
            </li>) }
        </ul>
    </div>
}

export const EmploymentHistory = ({ previousEmployments }: { previousEmployments: Employment[] }) => {
    return <section className="employment-history">
        <div className="flex flex-col gap-12 bg-blue px-16 py-6">
            <h2 className="text-4xl font-semibold">Historia zatrudnienia</h2>
            <div className="flex flex-col gap-6">
                {previousEmployments.map(employment => <SingleEmployment
                    title={employment.title}
                    employer={employment.employer}
                    startDate={employment.startDate}
                    endDate={employment.endDate}
                    responsibilities={employment.responsibilities}
                />)}
            </div>
        </div>
    </section>
}