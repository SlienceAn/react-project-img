import React from 'react';
import { Carousel, Col } from 'react-bootstrap'
const Content = (props) => {
    return (
        <div className="d-flex w-100">
            <Col lg={8} className="p-0">
                <Carousel>
                    {props.imglist.map(el => <Carousel.Item>
                        <img src={el} style={{ width: '100%', height: '500px' }}>
                        </img>
                    </Carousel.Item>)}
                </Carousel>
            </Col>
            <Col lg={4}>
                <h5>使用技術</h5>
                
                <button className="btn btn-primary" onClick={() => props.show(true)}>返回</button>
            </Col>
        </div>
    );
}

export default Content;