import { useContext, useEffect, useState } from "react"
import { custom_dialog } from "../../types/custom_dialog"
import { customEvent } from "../../App"




export const DialogBox  = () =>
{
    const  [Dialog, setDialog] = useState<custom_dialog | null>(null)
    const listner = useContext(customEvent) 
    useEffect(() => {
        listner.resgister("dialog", (data: custom_dialog) =>{
            setDialog(data)
            setTimeout(() => {
                setDialog(null)
                console.log("time out of", data.time, "done")
            }, data.time * 1000);
        })
    }, [])
    return (
    <div className={`${Dialog ? "" : "hidden"} `}>
       {Dialog?.body}{Dialog?.header}
    </div>
    )
}