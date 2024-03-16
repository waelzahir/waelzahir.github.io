export interface events{

    resgister: (name: string, callback: () => void) => void,
    invoke : (name: string) => void,
    remove: (name: string) => void
}

class event implements events {
    callbacks: Map<string, () => void>
    constructor()
    {
        this.callbacks  = new Map()
    }
    resgister( name:string , callback: () => void )
    {
        this.callbacks.set(name , callback);
    }
    invoke(name:string)
    {
        const callback = this.callbacks.get(name)
        if (callback=== undefined)
            {
                return ;
            }
            callback();
    }
    remove(name:string)
    {
        if(this.callbacks.has(name))
            this.callbacks.delete(name)
    }
}

const customEvent = new event();

export default customEvent;