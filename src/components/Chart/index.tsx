import { Column } from '@ant-design/charts';
import { ProcessProps } from '../../utils/types';

type dataChartProps = {
    label: string;
    type: string;
    value: number;
}

type ProcessChartProps = {
    data: ProcessProps[]
}

export function ProcessChart({data}: ProcessChartProps) {

    const dataChart: dataChartProps[] = [];

    function settingDataForChart() {
        data.map(process => {
            let config = [
                {label: process.process, type: 'Tempo Médio', value: process.med_process_duration},
                {label: process.process, type: 'Tempo Máximo', value: process.max_process_duration},
                {label: process.process, type: 'Eventos - mínimo', value: process.min_num_events},
                {label: process.process, type: 'Eventos - médio', value: process.med_num_events},
                {label: process.process, type: 'Eventos - máximo', value: process.max_num_events},
            ]

            dataChart.push(...config);
        })
    }
    
    settingDataForChart();

    return (
        <>
            <Column 
                style={{width: '96%'}}
                data={dataChart} 
                xField="label"
                yField="value" 
                seriesField="type"
                isGroup={true}
                columnStyle={{
                    radius: [5, 5, 0, 0],
                }}
            />
        </>
    )
};