export enum windowState {
    minimized,
    maximized,
}

export type LoadedProg ={
    reduced:boolean
    process: number,
    loadedFile: number,
    windowState:windowState,
}