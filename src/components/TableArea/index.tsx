import { useState } from 'react';

import {
  Row,
  Col,
} from 'antd'

import { dataProcess } from '../../utils/dataProcess';

import style from './style.module.scss'

import dsgovce from 'cegov-antd';
import { GeneralButton } from '../Button';
import { ProcessTable } from '../ProcessTable';
import { ProcessChart } from '../Chart';
const {InputSearch} = dsgovce();

export function TableArea() {
    
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState(dataProcess);

    function filterSearch() {
        const lowerSearchItem = search.toLowerCase();
    
        const filteredProcesses = dataProcess.filter(item => {
          return item.process.toLowerCase().includes(lowerSearchItem)
        })
        
        setFilter(filteredProcesses)
    }

    return (
      <div className={style.tableAreaContainer}>  
        <Col
          className={style.processAreaContainer}
        >
          <div className={style.searchContainer}>
            <InputSearch
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder="Concatenar com..."
            />
            <GeneralButton text="Filtrar" width="20%" action={filterSearch}/>
          </div>
          <ProcessTable processes={filter}/>
        </Col>

        <Row>
            <GeneralButton text="Gerar dashboard" width="100%"/>
        </Row>
        <ProcessChart data={dataProcess}/>
      </div>
    );
  }
  