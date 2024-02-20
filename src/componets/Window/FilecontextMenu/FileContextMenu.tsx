const FileContextMenu =() =>
{
    return (
        <div id="filecontex" className="hidden absolute w-40 bg-contextMenu font-tahoma flex flex-col items-center z-[50] border-[1px] border-Contextborder">
            <div className="w-[80%] h-8 flex flex-col items-center justify-around">
                <div className="w-full items-center">
                    <h1>
                        Open
                    </h1>
                </div>
            </div>
            <div className="h-1 w-[95%]  border-t-2 border-Contextborder"></div>
            <div className="w-[80%] h-16 flex flex-col items-center justify-around">
              
                <div className="w-full items-center">
                    <h1>
                        Cut
                    </h1>
                </div>
                <div className="w-full  items-center">
                    <h1>
                        Delete
                    </h1>
                </div>
            </div>
            <div className="h-1 w-[95%]  border-t-2 border-Contextborder"></div>
            <div className="w-[80%] h-16 flex flex-col items-center justify-around">
                <div className="w-full items-center">
                    <h1>
                        Rename
                    </h1>
                </div>
                <div className="w-full  items-center">
                    <h1>
                        Properties
                    </h1>
                </div>
            </div>
        </div>
    )
}
export default FileContextMenu