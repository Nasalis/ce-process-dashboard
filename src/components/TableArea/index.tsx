
import {
    Row,
    Col,
} from 'antd'

import { dataProcess } from '../../utils/dataProcess';

import style from './style.module.scss'

import dsgovce from 'cegov-antd';
import { GeneralButton } from '../Button';
import { ProcessTable } from '../ProcessTable';
const {InputSearch} = dsgovce();

export function TableArea() {

    return (
      <div className={style.tableAreaContainer}>  
        <Col
          className={style.processAreaContainer}
        >
          <div className={style.searchContainer}>
            <InputSearch
              placeholder="Concatenar com..."
            />
            <GeneralButton text="Filtrar" width="20%"/>
          </div>
          <ProcessTable processes={dataProcess}/>
        </Col>

        <Row>
            <GeneralButton text="Gerar dashboard" width="100%"/>
        </Row>
      </div>
    );
  }
  