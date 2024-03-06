import { file } from "./ProgramType"

export type screen = {
    x:number,
    y:number
    width:number
    height:number
}

export enum ExecutionState
{
    opened = 0,
    reduced = 1,
    staged = 2,
}

export type ProgramState = {
    proccess: number
    file: file,
    screen : screen,
    state : ExecutionState

}

