import { useContext, useEffect, useState } from "react"
import { custom_dialog } from "../../types/custom_dialog"
import customEvent from "../../utilities/events";




export const DialogBox  = () =>
{
    const  [Dialog, setDialog] = useState<custom_dialog | null>(null)
    useEffect(() => {
        customEvent.resgister("dialog", (data: custom_dialog) =>{
            setDialog(data)
            setTimeout(() => {
                setDialog(null)
                console.log("time out of", data.time, "done")
            }, data.time * 1000);
        })
        return () => customEvent.remove("dialog")
    }, [])
    if (!Dialog)
        return null
    return (
    <div className={`${Dialog ? "" : "hidden"}  flex items-center justify-center absolute h-[60%] w-full border-solid border-green-900 border-2`}>
        <div className=" h-[20%] w-[50%]  bg-black text-white">
            <div className="h-full flex-col justify-center border-solid border-red-600 border-2">
                <div className=" border-solid border-white border-2">
                    {Dialog.header}
                </div>
                <div className="border-solid border-white border-2">
                    {Dialog.body}
                </div>
                <div className="flex justify-around border-solid border-white border-2">
                        <button>
                            yes
                        </button>
                        <button>
                            no
                        </button>
                </div>
            </div>
        </div>
    </div>
    )
}