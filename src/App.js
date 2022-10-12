import React from "react";
import Header from "./componentes/header/Header";
import Nav from "./componentes/nav/Nav";
import About from "./componentes/about/About";
import Exper from "./componentes/experience/Exper";
import Services from "./componentes/services/Services";
import Portfolio from "./componentes/portfolio/Portfolio";
import Testimonials from "./componentes/testimonials/Testimonials";
import Contact from "./componentes/contact/Contact";
import Footer from "./componentes/footer/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Exper />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
};

export default App;