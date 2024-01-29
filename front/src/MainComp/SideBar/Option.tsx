export const Option =({index,choice, setter} : {index : number,choice:number, setter :any}) =>
{
    return(
        <div onClick={() => setter(index)} className={`${index === choice ?"bg-red-600"  : "" }  `}>
            {index}
        </div>
    ) 
}