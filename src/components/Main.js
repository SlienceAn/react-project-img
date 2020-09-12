import React, { useState } from 'react';
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
import { IotText, JunoText, KVText, MidText, IotSkill, JunoSkill, KVSkill, MidSkill } from '../Text'
import Content from './Content'
import { CSSTransition } from 'react-transition-group'
import '../assets/carousel.css'
const style = {
    width: '80%',
    margin: '5rem auto'
}
function Main(props) {
    const [isShow, setShow] = useState(true)
    const [list, setList] = useState([])
    const [text, setText] = useState([])
    const [skill,setSkill] = useState([])
    const toggle = (event) => {
        console.log(event)
        switch (event) {
            case "IOT":
                setList([
                    require("../assets/IOT/Iot-login.jpg"),
                    require("../assets/IOT/IOT-01.png"),
                    require("../assets/IOT/IOT-02.png"),
                    require("../assets/IOT/IOT-03.png"),
                    require("../assets/IOT/IOT-04.png"),
                    require("../assets/IOT/IOT-05.png"),
                ])
                setText(IotText)
                setSkill(IotSkill)
                break;
            case "Juno":
                setList([
                    require("../assets/Juno/Juno-login.png"),
                    require("../assets/Juno/Juno-01.png"),
                    require("../assets/Juno/Juno-02.png"),
                    require("../assets/Juno/Juno-03.png"),
                    require("../assets/Juno/Juno-04.png"),
                    require("../assets/Juno/Juno-05.png"),
                    require("../assets/Juno/Juno-06.png"),
                    require("../assets/Juno/Juno-07.png"),
                    require("../assets/Juno/Juno-08.png"),
                ])
                setText(JunoText)
                setSkill(JunoSkill)
                break;
            case "KV":
                setList([
                    require("../assets/KV/KV-02.png"),
                    require("../assets/KV/KV-01.png"),
                    require("../assets/KV/KV-04.png"),
                    require("../assets/KV/KV-05.png"),
                    require("../assets/KV/KV-05.png"),
                    require("../assets/KV/KV-06.png"),
                    require("../assets/KV/KV-07.png"),
                    require("../assets/KV/KV-09.png"),
                    require("../assets/KV/KV-10.png"),
                    require("../assets/KV/KV-11.png"),
                    require("../assets/KV/KV-12.png"),
                    require("../assets/KV/KV-13.png"),
                ])
                setText(KVText)
                setSkill(KVSkill)
                break;
            case "MID":
                setList([
                    require("../assets/MID/01.jpg"),
                    require("../assets/MID/02.jpg"),
                    require("../assets/MID/03.jpg"),
                    require("../assets/MID/04.jpg"),
                    require("../assets/MID/05.jpg"),
                    require("../assets/MID/06.jpg"),
                    require("../assets/MID/07.jpg"),
                    require("../assets/MID/08.jpg"),
                ])
                setText(MidText)
                setSkill(MidSkill)
                break;
        }
        setShow(false)
    }
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
            {isShow ? <div className="d-flex cards" style={style}>
                <Col>
                    <ProjectCard
                        cover={login}
                        avatar="IOT"
                        header="IOT微感資訊中心"
                        makedate="Nov 14,2019"
                        action={vue}
                        width="30px"
                        show={toggle}
                        title="內部機台數據網站，提供每個感測器觀看數據、搜尋數據、數據視覺化功能"
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
                        show={toggle}
                        title="內部數據改版網站，提供每個測站觀看數據、搜尋數據、數據視覺化功能"
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
                        show={toggle}
                        title="內部機台數據網站，提供每個感測器觀看數據、搜尋數據、數據視覺化功能"
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
                        show={toggle}
                        title="娃娃機後台管理系統，提供管理與訂單等多樣服務，並由對方提供設計圖"
                    />
                </Col>
            </div> : <div style={style} className="content">
                    <Content
                        show={setShow}
                        imglist={list}
                        lists={text}
                        skill={skill}
                    />
                </div>}


        </div>
    );
}
export default Main;