import { Table } from 'antd';

// import { dataConfig } from '../../utils/dataProcessConfig';
import { ProcessesProps, ProcessProps } from '../../utils/types';

import style from './style.module.scss'

const { Column } = Table;

const columnStyle: React.CSSProperties = {
    display: "flex", 
    alignItems: 'center', 
    justifyContent: "center",
    fontSize: "0.8rem",
    textAlign:"center",
    width: '110px',
} 

const columns = [
    {
        title: "Assunto",
        dataIndex:"process",
        key:"process",
        sorter: (a: ProcessProps, b: ProcessProps) => a.process.length - b.process.length,
        render: (text: string) => (
            <div style={columnStyle}>
              {text}
            </div>
        ),
    },
    {
        title: "Num_processo", 
        dataIndex:"num_process",
        key:"num_process",
        render: (text: string) => (
            <div style={columnStyle}>
              {text}
            </div>
        ),
    },
    {
        title: "Media_duracao_processo", 
        dataIndex:"med_process_duration",
        key:"med_process_duration",
        sorter: (a: ProcessProps, b: ProcessProps) => a.med_process_duration - b.med_process_duration,
        render: (text: string) => (
            <div style={columnStyle}>
              {text}
            </div>
        ),
    },
    {
        title: "Maxima_duracao_processo", 
        dataIndex:"max_process_duration",
        key:"max_process_duration",
        sorter: (a: ProcessProps, b: ProcessProps) => a.max_process_duration - b.max_process_duration,
        render: (text: string) => (
            <div style={columnStyle}>
              {text}
            </div>
        ),
    },
    {
        title: "Num-eventos", 
        dataIndex:"num_events",
        key:"num_events",
        render: (text: string) => (
            <div style={columnStyle}>
              {text}
            </div>
        ),
    },
    {
        title: "Min_num_eventos", 
        dataIndex:"min_num_events",
        key:"min_num_events",
        render: (text: string) => (
            <div style={columnStyle}>
              {text}
            </div>
        ),
    },
    {
        title: "Med_num_eventos", 
        dataIndex:"med_num_events",
        key:"med_num_events",
        sorter: (a: ProcessProps, b: ProcessProps) => a.med_num_events - b.med_num_events,
        render: (text: string) => (
            <div style={columnStyle}>
              {text}
            </div>
        ),
    },
    {
        title: "Max_num_eventos", 
        dataIndex:"max_num_events",
        key:"max_num_events",
        sorter: (a: ProcessProps, b: ProcessProps) => a.max_num_events - b.max_num_events,
        render: (text: string) => (
            <div style={columnStyle}>
              {text}
            </div>
        ),
    },
]

export function ProcessTable({processes}: ProcessesProps) {

    return (
        <div>
            {/* <Table 
                className={style.tableContainer}
                dataSource={processes}
                scroll={{x:"1200px"}}
                size="middle"
            >
                {columns.map(data => (
                    <Column 
                        className={style.tableInfo}
                        align="center" 
                        title={data.title} 
                        dataIndex={data.dataIndex} 
                        key={data.dataIndex}
                    />
                ))}
            </Table> */}
            <Table 
                className={style.tableContainer}
                dataSource={processes}
                columns={columns}
                pagination={{pageSize: 4}}
                scroll={{x:"1200px"}}
                size="middle"
            />
        </div>
        
    )
}