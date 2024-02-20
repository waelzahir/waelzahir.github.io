import { file } from "../../types/ProgramType";
import { contextx, contexty } from "./Window";

export class FileHandler {
    menu : HTMLDivElement 
    element: HTMLDivElement;
    clicked: boolean
    file:file
    menuset:any
    constructor(element: HTMLDivElement, file: file, filessetter:any, menuset:any)
    {
        this.file = file
        this.element = element
        this.clicked = false
        this.element.addEventListener("click",(e)=> this.handleclick(e))
        this.element.addEventListener("contextmenu",(e)=> this.handlecontext(e))
        // this.element.addEventListener('mousemove', (e) => this.dragelement(e))
        this.menu = document.getElementById("filecontex") as HTMLDivElement;
        this.menuset = menuset
        
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
        if (this.menu && !this.menu.classList.contains("hidden"))
                this.menu.classList.add("hidden")

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
        const desktop = document.getElementById("Desktop");
 
            if (!desktop || !this.menu)
                return ;
                this.menu.style.left = `${e.clientX +  this.menu.offsetWidth < desktop?.offsetWidth ? e.clientX :  desktop?.offsetWidth -  this.menu.offsetWidth}px`
                this.menu.style.top = `${e.clientY +  this.menu.offsetHeight < desktop?.offsetHeight ? e.clientY :  desktop?.offsetHeight -  this.menu.offsetHeight}px`
                this.menu.classList.remove("hidden")
       
    }
    removerLisners() {
        this.element.removeEventListener("click",(e)=> this.handleclick(e))
        this.element.removeEventListener("contextmenu",(e)=> this.handlecontext(e))
        this.element.removeEventListener('mousemove', (e) => this.dragelement(e))
    }
}