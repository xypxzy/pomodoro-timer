export enum ModeStatus {
    FOCUS = 'focus',
    SHORT = 'short',
    LONG = 'long'
}

export interface Time {
    minutes: number,
    seconds: number
}


export interface ModeProps {
    status: ModeStatus,
    time: Time
}