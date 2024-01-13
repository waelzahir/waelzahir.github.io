import { custom_dialog } from "../types/custom_dialog"


const dialogs: custom_dialog [] = [
    {
        body : "salam cv",
        header : "tm7wwa",
        time: 50,
    },
    {
        body : "salam cv",
        header : "mamak",
        time: 50,
    }
]




export const generateDialog = (index:number) : custom_dialog => 
{
    return dialogs[index]
}