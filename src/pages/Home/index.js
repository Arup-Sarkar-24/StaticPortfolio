import React from "react";
import Header from '../../components/Header';
import Intro from "./intro";
import { About } from "./About";
import { Experiences } from "./Experiences";
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";

function Index() {
    return (
        <>
            <div className="bg-primary px-40 sm:px-5">
                {/* Header Section */}
                <Header />
                
                {/* Intro Section */}
                <Intro />
                
                {/* About Section */}
                <About />
                
                {/* Experiences Section */}
                <Experiences />
                
                {/* Projects Section */}
                <Projects />
                
                {/* Courses Section */}
                <Courses />
                
                {/* Contact Section */}
                <Contact />
                {/* Left Sider Section */}
                <LeftSider />
                {/* Footer Section */}
                <Footer />
            </div>
        </>
    );
}

export default Index;
