import mailIcon from "../../assets/mail.svg";
import phoneIcon from "../../assets/phone.svg";
import githubIcon from "../../assets/github-mark-white.svg";

const SingleContact = ({ svg, content }: { svg: string, content: string }) => {
    return <div className="flex items-center gap-2 h-5">
        <img src={svg} className="h-full" />
        <span className="text-sm">{ content }</span>
    </div>
}

export const ContactInfo = ({ email, phoneNumber, githubHandle }: { email: string, phoneNumber: string, githubHandle: string }) => {
    return <div className="flex gap-x-4 gap-y-2 flex-wrap">
        <SingleContact svg={mailIcon} content={email} />
        <SingleContact svg={phoneIcon} content={phoneNumber} />
        <SingleContact svg={githubIcon} content={githubHandle} />
    </div>
}