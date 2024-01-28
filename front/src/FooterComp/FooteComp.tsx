
export const FooterComp = ({pxHeight}: {pxHeight : number}) =>
{   console.log(pxHeight)
    return (
        <div className="w-full h-full bg-red-400" style={{height: `${pxHeight}px`}}>
        </div>
    )
}