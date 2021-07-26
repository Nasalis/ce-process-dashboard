import { 
    Row, 
    Col, 
} from "antd";
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';

import dsgovce from 'cegov-antd';
const {Header} = dsgovce();

export function GlobalHeader() {
    return (
        <Header
            accessibility
            onClickAccessibility={(name) => console.log(name)}
            title="Acesso Cidadão"
        >
            <Row
                className="example-header"
                gutter={8}
                align="middle"
                justify="space-between"
                style={{ width: '95%' }}
            >
            <Col>
                <Row justify="end" align="middle" >
                <Col >
                    <img height={45} width="auto"
                    src="https://www.ceara.gov.br/wp-content/themes/ceara2017/assets/images/logo-ceara.svg" />
                </Col>
                <Col>
                    <div style={{ background: 'white', height: 32, width: 2, marginLeft: 15, marginRight: 15 }} />
                </Col>
                <Col >
                    <Title level={5} style={{ marginBottom: 0, color: 'white' }} >
                    Processos - CE
                    </Title>
                </Col>
                </Row>
            </Col>
            <Col>
                <Row>
                <Paragraph style={{ textAlign: 'end', color: 'white' }} >
                    Seja bem-vindo(a)
                </Paragraph>
                </Row>
                <Row gutter={16} justify="end" align="middle">
                <Col>
                    <a style={{ fontSize: '1.2rem', color: "white" }} href="/">
                        Exemplo
                    </a>
                </Col>
                <Col>
                    <a style={{ fontSize: '1.2rem', color: "white" }} href="/">
                        Exemplo
                    </a>
                </Col>
                </Row>
            </Col>
            </Row>
        </Header>
    );
}