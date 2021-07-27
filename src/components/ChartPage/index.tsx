import { dataProcess } from "../../utils/dataProcess";
import { ProcessChart } from "../Chart";

export function ChartPage() {

    return (
        <>
            <ProcessChart data={dataProcess}/>
        </>
    );
}
