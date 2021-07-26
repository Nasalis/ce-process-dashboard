
import {
    Row,
    Col,
} from 'antd'

import style from './style.module.scss'

import dsgovce from 'cegov-antd';
import { GeneralButton } from '../Button';
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
        </Col>

        <Row>
            <GeneralButton text="Gerar dashboard" width="100%"/>
        </Row>
      </div>
    );
  }
  