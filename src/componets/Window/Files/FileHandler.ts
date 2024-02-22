import { ExecutionState, ProgramState, screen } from "../../../types/ProgramState";
import { file, state } from "../../../types/ProgramType";
import { contextx, contexty } from "../Window";

export class FileHandler {
    menu : HTMLDivElement 
    element: HTMLDivElement;
    file:file
    menuset:any
    MemAccess :any
    setoperand: any
    constructor(element: HTMLDivElement, file: file, setoperand:any, menuset:any , MemAccess: any)
    {
        this.file = file
        this.element = element
        this.element.addEventListener("click",(e)=> this.handleclick(e))
        this.element.addEventListener("contextmenu",(e)=> this.handlecontext(e))
        // this.element.addEventListener('mousemove', (e) => this.dragelement(e))
        this.menu = document.getElementById("filecontex") as HTMLDivElement;
        this.menuset = menuset
        this.MemAccess = MemAccess
        this.setoperand = setoperand
        this.setElementpos()

        
    }
  
    setElementpos()
    {
        this.element.style.left = this.file.windowState.left.toString() + "px"
        this.element.style.right = this.file.windowState.right.toString() + "px"
        this.element.style.top = this.file.windowState.top.toString() + "px"
        this.element.style.bottom = this.file.windowState.bottom.toString() + "px"
    }
    handleclick(e:any)
    {
        this.menuset(false)
        e.stopPropagation()
        e.preventDefault()
        const rename = document.getElementById("FileRename") ;
            if (rename && !rename.classList.contains("hidden"))
                rename.classList.add("hidden")
        if (this.menu && !this.menu.classList.contains("hidden"))
                this.menu.classList.add("hidden")
        this.setoperand((f:file | null) => {
            if (f && f.id === this.file.id)
            {
                this.MemAccess[1]((state: ProgramState []) => {state.push(this.getinitState()) ; return state.slice()})
                return null
            }
            return this.file
            })
    }
    dragelement(e:any)
    {
        this.menuset(false)
        e.stopPropagation()
        e.preventDefault()
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
        console.log("sett foe context", this.file)
       
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
        this.element.removeEventListener("click",(e)=> this.handleclick(e))
        this.element.removeEventListener("contextmenu",(e)=> this.handlecontext(e))
        this.element.removeEventListener('mousemove', (e) => this.dragelement(e))
    }
}