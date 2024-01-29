import { useEffect, useRef, useState } from "react"
import { SideBar } from "./SideBar/SideBar"
import { Window } from "./Window/Window"
import { FooterComp } from "../FooterComp/FooteComp"


export const MainComp = () =>
{

    return (
        <div id="maincomp" className="w-full h-full bg-slate-500 flex flex-col overflow-y-hidden">
            <Window />
            <div id='mainresize' className='bg-gray-600 h-1'></div>
            <FooterComp />

        </div>
    )
}