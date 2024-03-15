export enum windowState {
    minimized,
    maximized,
    reduced
}

export type LoadedProg ={
    process: number,
    loadedFile: number,
    windowState:windowState,
}