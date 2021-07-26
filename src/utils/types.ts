export type ProcessProps = {
    id: string,
    process: string,
    num_process: number,
    min_process_duration: number,
    med_process_duration: number,
    max_process_duration: number,
    num_events: number,
    min_num_events: number,
    med_num_events: number,
    max_num_events: number,
}

export type ProcessesProps = {
    processes: ProcessProps[]
}