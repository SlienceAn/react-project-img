import React from 'react';
import { Navbar, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard'
import login from '../assets/IOT/Iot-login.jpg'
import Jlogin from '../assets/Juno/Juno-login.png'
import Mlogin from '../assets/MID/01.jpg'
import vue from '../assets/Logo/vue.png'
import reactimg from '../assets/Logo/react.jpg'
import java from '../assets/Logo/java.png'
import Klogin from '../assets/KV/login.png'
import show from '../assets/Logo/show.jpg'
import { IotText, JunoText, KVText, MidText } from '../Text'
const style = {
    width: '80%',
    margin: '5rem auto'
}
function Main(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt="missing"
                        src={show}
                        width="30"
                        height="30"
                        className="d-inline-block align-top mr-2"
                    />
                專案經歷
                </Navbar.Brand>
            </Navbar>
            <div className="d-flex" style={style}>
                <Col>
                    <ProjectCard
                        cover={login}
                        avatar="IOT"
                        header="IOT微感資訊中心"
                        makedate="Nov 14,2019"
                        action={vue}
                        width="30px"
                        title="內部機台數據網站，提供每個感測器觀看數據、搜尋數據、數據視覺化功能"
                        text={IotText}
                    />
                </Col>
                <Col>
                    <ProjectCard
                        cover={Jlogin}
                        avatar="Juno"
                        header="Juno數據中心"
                        makedate="March 14,2020"
                        action={reactimg}
                        width="30px"
                        title="內部數據改版網站，提供每個測站觀看數據、搜尋數據、數據視覺化功能"
                        text={JunoText}
                    />
                </Col>
                <Col>
                    <ProjectCard
                        cover={Klogin}
                        avatar="KV"
                        header="榮總鋼瓶管理系統"
                        makedate="March 14,2020"
                        action={java}
                        width="45px"
                        title="內部機台數據網站，提供每個感測器觀看數據、搜尋數據、數據視覺化功能"
                        text={KVText}
                    />
                </Col>
                <Col>
                    <ProjectCard
                        cover={Mlogin}
                        avatar="MID"
                        action={vue}
                        width="30px"
                        header="MID集點大聯盟"
                        makedate="March 14,2020"
                        title="娃娃機後台管理系統，提供管理服務，並由對方提供設計圖"
                        text={MidText}
                    />
                </Col>
            </div>

        </div>
    );
}
export default Main;