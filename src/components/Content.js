import React from 'react';
import { Carousel, Col } from 'react-bootstrap'
import styled from 'styled-components'
const Content = (props) => {
    return (
        <div className="d-flex w-100">
            <Col lg={8} className="p-0">
                <Carousel interval={500} style={{ background: '#222' }}>
                    {props.imglist.map(el =>
                        <Carousel.Item>
                            <InerImg img={el} />
                        </Carousel.Item>)}
                </Carousel>
            </Col>
            <Col lg={4}>
                <h5>專案說明</h5>
                <div style={{ height: '85%' }}>
                    <ul>
                        {props.lists.map(el => <li key={el}>{el}</li>)}
                    </ul>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={() => props.show(true)}>
                        <i className=""></i>
                        返回
                        </button>
                </div>
            </Col>
        </div>
    );
}
const InerImg = styled.div`
    height:700px;
    width:100%;
    border:.5px solid #aaa;
    border-radius:1rem;
    background-image:${props => `url(${props.img})`};
    background-repeat:no-repeat;   
    background-size:contain;
    background-position:center center;
`
export default Content;