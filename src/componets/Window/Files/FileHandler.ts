import { highestid } from "../../../App";
import { ExecutionState, ProgramState, screen } from "../../../types/ProgramState";
import { file, state } from "../../../types/ProgramType";
import { contextx, contexty } from "../Window";

var x1 = 0, y1 = 0, x2 = 0, y2 = 0
export class FileHandler {
    menu : HTMLDivElement 
    element: HTMLDivElement;
    file:file
    menuset:any
    MemAccess :any
    setoperand: any
    drag:boolean
    constructor(element: HTMLDivElement, file: file, setoperand:any, menuset:any , MemAccess: any)
    {
        this.file = file
        this.element = element
        this.element.addEventListener("contextmenu",(e)=> this.handlecontext(e))
        this.menu = document.getElementById("filecontex") as HTMLDivElement;
        this.menuset = menuset
        this.MemAccess = MemAccess
        this.setoperand = setoperand
        this.element.onmousedown = this.dragMouseDown.bind(this)
        this.setElementpos()
        this.drag = false
        
        
    }

    dragMouseDown(e:any) {
        e.preventDefault()
        e.stopPropagation()
        
        console.log("moudedown")
        window.onmousemove = this.movemouse.bind(this)
        window.onmouseup = this.mouseup.bind(this)
    }
    movemouse(e:any)
    {
        if (!x1 && !y1)
        {
                y1 =  e.clientY
                x1 = e.clientX
        }
        x2 =  x1 - e.clientX
        y2 = y1 - e.clientY 
        y1 =  e.clientY
        x1 = e.clientX
        e.preventDefault();
        console.log("mouve")
        console.log(e.clientX, e.clientY)
        this.element.style.top = (this.element.offsetTop - y2) + "px";
        this.element.style.left = (this.element.offsetLeft - x2) + "px";
        this.drag = true
    
    }
    mouseup(e:any){
        e.preventDefault();
        e.stopPropagation()

        console.log("mouse up")
        window.onmousemove = null 
        window.onmouseup = null
        if (this.drag == false)
            this.handleclick()
        console.log(this.drag)
        this.drag = false
        y1 = 0
        x1 = 0
        this.file.windowState.left = this.element.offsetLeft
        this.file.windowState.top = this.element.offsetTop
        localStorage.setItem(this.file.id.toString(), JSON.stringify(this.file))

    }
  
    
  
    setElementpos()
    {
        this.element.style.left = this.file.windowState.left.toString() + "px"
        this.element.style.right = this.file.windowState.right.toString() + "px"
        this.element.style.top = this.file.windowState.top.toString() + "px"
        this.element.style.bottom = this.file.windowState.bottom.toString() + "px"
    }

    handleclick()
    {
        this.menuset(false)
        console.log("click inclick")
        const rename = document.getElementById("FileRename") ;
            if (rename && !rename.classList.contains("hidden"))
                rename.classList.add("hidden")
        if (this.menu && !this.menu.classList.contains("hidden"))
                this.menu.classList.add("hidden")
        
        this.setoperand((f:file | null) => {
            console.log("operand is" , f)
            if (f && f.id === this.file.id)
            {
                console.log(null, "nulled")
                this.MemAccess[1]((state: ProgramState []) => {state.push(this.getinitState()) ; return state.slice()})
                console.log(this.MemAccess[0], "memory")

                return null
            }
            console.log(this.file, "passed")
            return this.file
            })
    }
 
    handlecontext(e:any)
    {
        this.menuset(false)
        e.stopPropagation()
        e.preventDefault()
        
        const rename = document.getElementById("FileRename") ;
            if (rename && !rename.classList.contains("hidden"))
                rename.classList.add("hidden")
        const desktop = document.getElementById("Desktop");
        if (!desktop || !this.menu)
            return ;
        this.menu.style.left = `${e.clientX +  this.menu.offsetWidth < desktop?.offsetWidth ? e.clientX :  desktop?.offsetWidth -  this.menu.offsetWidth}px`
        this.menu.style.top = `${e.clientY +  this.menu.offsetHeight < desktop?.offsetHeight ? e.clientY :  desktop?.offsetHeight -  this.menu.offsetHeight}px`
        this.menu.classList.remove("hidden")
        this.setoperand(this.file )
       
    }
    getinitState() : ProgramState
    {
        const screen :screen = {
            height: 500,
            width:500,
            x:0,
            y: 0
        }
        return {
           file: this.file,
           state: ExecutionState.opened,
           screen : screen
        }
    }
    removerLisners() {
        this.element.removeEventListener("contextmenu",(e)=> this.handlecontext(e))
    }
}