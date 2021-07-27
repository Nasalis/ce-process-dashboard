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
                    <img style={{marginTop: "0.5rem"}} height={45} width="auto" alt="ceara-gov logo"
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
                    <img style={{marginLeft: '0.5rem', borderRadius: "50%"}} height={50} width={50} alt="user-profile-picture"
                    src="https://randomuser.me/api/portraits/men/99.jpg" />
                </Paragraph>
                </Row>
                <Row gutter={16} justify="end" align="middle"></Row>
            </Col>
            </Row>
        </Header>
    );
}