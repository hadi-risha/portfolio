import React, { useRef } from "react";

import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
    const introRef = useRef(null); // store reference for Introduction component

    return (
        <div>
            <div ref={introRef}>
                <Introduction />
            </div>
            <Projects />
            <Services />
            <Footer scrollToIntro={() => introRef.current?.scrollIntoView({ behavior: "smooth" })} />
        </div>
    );
};

export default Home;
