import { generateDialog } from "../../utilities/DialogGen"
import customEvent from "../../utilities/events";

export const Overview = () =>
{
    const data = generateDialog(1);
    customEvent.invoke("dialog", data)
    return (
    <div>
        Overview
    </div>
    )
}