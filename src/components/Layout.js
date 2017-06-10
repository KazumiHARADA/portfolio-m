/**
 * Created by haradakazumi on 2017/06/10.
 */
import React from 'react'
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import AboutMe from '../components/AboutMe'
import LatestPosts from '../components/LatestPosts'



const Layout = () => (
    <Container fluid={true}>
        <Row>
            <Col md="8"><AboutMe/></Col>
            <Col md="4"><LatestPosts/></Col>
        </Row>
        <Row>
            <Col md="12">c</Col>
        </Row>
        <Row>
            <Col md="12">d</Col>
        </Row>
    </Container>
)

export default Layout