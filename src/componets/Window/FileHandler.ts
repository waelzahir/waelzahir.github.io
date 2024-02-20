import { file } from "../../types/ProgramType";

export class FileHandler {
    element: HTMLDivElement;
    clicked: boolean
    file:file
    constructor(element: HTMLDivElement, file: file, filessetter:any)
    {
        this.file = file
        this.element = element
        this.clicked = false
        this.element.addEventListener("click",(e)=> this.handleclick(e))
        this.element.addEventListener("contextmenu",(e)=> this.handlecontext(e))
        this.element.addEventListener('mousemove', (e) => this.dragelement(e))
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

    }
    dragelement(e:any)
    {

    }
    handlecontext(e:any)
    {

    }
    removerLisners() {
        this.element.removeEventListener("click",(e)=> this.handleclick(e))
        this.element.removeEventListener("contextmenu",(e)=> this.handlecontext(e))
        this.element.removeEventListener('mousemove', (e) => this.dragelement(e))
    }
}