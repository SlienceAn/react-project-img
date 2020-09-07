import React from 'react';
import { Navbar } from 'react-bootstrap';
import ProjectCard from './ProjectCard'
function Main(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
      專案經歷
    </Navbar.Brand>
            </Navbar>
            <ProjectCard />
        </div>
    );
}

export default Main;