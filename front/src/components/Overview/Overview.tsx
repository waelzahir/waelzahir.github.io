import { useContext } from "react"
import { customEvent } from "../../App"
import { custom_dialog } from "../../types/custom_dialog"

export const Overview = () =>
{
    const listner = useContext(customEvent) 
    const data : custom_dialog = {
        body : "salam cv",
        header : "tm7wwa",
        time: 50,
    }

    listner.invoke("dialog", data)
    return (
    <div>
        Overview
    </div>
    )
}