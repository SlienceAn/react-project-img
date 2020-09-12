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
                <div style={{ height: '85%' }}>
                    <h5><i className="fas fa-pen" />-技術</h5>
                    <ul>
                        {props.skill.map(el => <li key={el}>{el}</li>)}
                    </ul>
                    <hr></hr>
                    <h5><i className="	fas fa-tags" />-說明</h5>
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
    border-radius:1rem;
    background-image:${props => `url(${props.img})`};
    background-repeat:no-repeat;   
    background-size:contain;
    background-position:center center;
`
export default Content;