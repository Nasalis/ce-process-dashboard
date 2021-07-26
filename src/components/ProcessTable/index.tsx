import { Table } from 'antd';

import { dataConfig } from '../../utils/dataProcessConfig';
import { ProcessesProps } from '../../utils/types';

import style from './style.module.scss'

const { Column } = Table;

export function ProcessTable({processes}: ProcessesProps) {

    return (
        <div>
            
            <Table 
                className={style.tableContainer}
                dataSource={processes}
                scroll={{x:"1200px"}}
                size="middle"
            >
            {dataConfig.map(data => (
                <Column 
                    className={style.tableInfo}
                    align="center" 
                    title={data.title} 
                    dataIndex={data.dataIndex} 
                    key={data.dataIndex}
                />
            ))}
        </Table>
        </div>
        
    )
}