// Interfaces that may be used across the application are to be put here!

export interface ISnippet {
    id: number,
    name: string,
    code: string,
    color: string,
    language: string
}

export interface ITag {
    id: number,
    name: string
}
