
import about from "../../assets/about.svg"
import person from "../../assets/person.svg"
import project from "../../assets/project.svg"

export const Option =({index,choice, name , type ,setter} : {index : number,choice:number, name : string, type:number,setter :any}) =>
{
    let icon;
    if (type === 0)
        icon = person
    if (type === 1)
        icon = about
    if (type === 2)
        icon = project
    return(
        <div onClick={() => setter(index)} className={`${index === choice ?"bg-gray-600"  : "" }  `}>
            
            <div className="flex flex-row items-center">
                <img src={icon} className="w-[15px] h-[15px]"></img>
                <p className="text-center">
                    {name}
                </p>
            </div>
        </div>
    ) 
}