import Download from "../assets/download"
import cv from '../Files/SoftwareDev.pdf'

const Resume = ({dark} : {dark:boolean}) =>
{
    return (
        <a className="bg-green-950" href={cv} download="ouailzahir.pdf" target="_blank">
        <div className={`w-56 h-10 border-2 flex justify-start pl-16 items-center gap-2 cursor-pointer`}>
            <Download color={dark ? "#fcfcfc" : "#2D2D2D"}/>
            <h1 className="font-egoist ">
                Resume
            </h1>
        </div>
        </a>
    )
}
export default Resume