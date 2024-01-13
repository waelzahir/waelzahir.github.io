import { custom_dialog } from "../types/custom_dialog"


export interface events{

    resgister: (name: string, x: (e: any) => void) => void,
    invoke : (name: string, data: any) => void,
    remove: (name: string) => void
}

class event implements events {
    callbacks: Map<string, (e: custom_dialog) => void >
    delayed: Map<string, number>
    constructor()
    {
        console.log("init at what cost")
        this.delayed = new Map()
        this.callbacks  = new Map()
    }
    resgister( name:string , x: (e:custom_dialog) => void )
    {
        this.callbacks.set(name , x);
    }
    invoke(name:string, data: custom_dialog)
    {
        const x = this.callbacks.get(name)
        if (x=== undefined)
            {
                const delay = this.delayed.get(name)
                if (typeof delay === "number")
                {
                    if (delay >= 3)
                    {
                        this.delayed.delete(name)
                        alert("debug: {" + name + "} event reached maximum delay removed from queue")
                        return 
                    }
                    this.delayed.set(name, delay + 1) 
                    setTimeout(() => this.invoke(name, data), 1000)
                }
                else
                    this.delayed.set(name, 0);
                console.log("delayed")
                return ;
            }
        x(data);
    }
    remove(name:string)
    {
        if(this.callbacks.has(name))
            this.callbacks.delete(name)
    }
}
const customEvent = new event();

export default customEvent;