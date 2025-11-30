import { ContactInfo } from "../ContactInfo/ContactInfo";
import "./Header.css";

export const Header = ({ fullName, position, email, phoneNumber, githubHandle }: {
    fullName: string,
    position: string,
    email: string,
    phoneNumber: string,
    githubHandle: string,
}) => {
    return <header className="flex justify-between bg-black px-15 pt-16 pb-0">
        <div className="flex flex-col justify-between w-1/2">
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-semibold">{ fullName }</h1>
                <span className="text-xl text-gray-200">{ position }</span>
            </div>
            <ContactInfo email={email} phoneNumber={phoneNumber} githubHandle={githubHandle} />
        </div>
        <div className="portrait portrait-round w-48 h-48"></div>
    </header>
}