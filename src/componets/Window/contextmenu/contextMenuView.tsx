import { useEffect } from "react"

const ContextMenuViewMenu= ({setter}: { setter:any}) =>{
    useEffect(() => {
        const el = document.getElementById("ViewOption")
        if (!el)
            return 
        el.addEventListener("click", (e:any) => {
            if (e.target.classList.contains("Small"))
                setter(1)
            if (e.target.classList.contains("Medium"))
                setter(2)
            if (e.target.classList.contains("Large"))
                setter(3)
        })
        return () => {
            if (!el)
            return 
        el.removeEventListener("click", (e:any) => {
            if (e.target.classList.contains("Small"))
                setter(1)
            if (e.target.classList.contains("Medium"))
                setter(2)
            if (e.target.classList.contains("Large"))
                setter(3)
        })
        }
    }, [])
    return (
        <div id="ViewOption" className={` hidden absolute  bg-contextMenu w-44  flex flex-col items-center border-[1px] border-Contextborder font-tahoma z-[51]`}>
            <div className="w-full  flex justify-center items-center h-8 hover:bg-ContextSelection">
                <h1  className="w-[90%] Small">
                    Small
                </h1>
            </div>
            <div className="w-full flex justify-center items-center h-8  hover:bg-ContextSelection">
                <h1 id="Medium" className="w-[90%] Medium">
                    Medium
                </h1>
            </div>
            <div className="w-full flex justify-center items-center h-8  hover:bg-ContextSelection">
                <h1 id="Large" className="w-[90%] Large">
                    Large
                </h1>
            </div>
        </div>
    )
}
export default ContextMenuViewMenu