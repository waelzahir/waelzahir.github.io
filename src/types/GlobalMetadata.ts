export type GlobalMetadata = {
    id:number
    zindex:number,
    exec  :number
}

export type InitState = {
    persistant: boolean,
    user:number,
    iconsize: number,
    background: number
} 

export const  defaultState = {
    persistant: false,
    user: -1,
    iconsize :1,
    background:1
} as InitState