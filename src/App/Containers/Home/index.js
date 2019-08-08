import React from 'react'
import { ParallaxLayout } from './../../Layouts'
import { Header, Content, Chart, Footer } from './../../Components'

import { WhatIs, Estadistics, Cause, Solution } from './../../Constants'

import HeaderImage from './../../Assets/Images/header.jpg'
import Content1 from './../../Assets/Images/content1.jpg'
import Content2 from './../../Assets/Images/content2.png'
import Content3 from './../../Assets/Images/content3.jpg'
import Content4 from './../../Assets/Images/content4.jpg'

function Home() {

    return [
        <ParallaxLayout
            key="header-parallax"
            background={HeaderImage}
        >
            <Header />
        </ParallaxLayout>
        ,
        <ParallaxLayout
            key="content-parallax-1"
            background={Content1}>
            <Content
                title={WhatIs.title}
                description={WhatIs.description}
            />
        </ParallaxLayout>,
        <ParallaxLayout
            key="content-parallax-2"
            background={Content2}>
            <Content
                title={Estadistics.title}
                description={Estadistics.description}
            />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", top: "21vh" }}>
                <Chart />
            </div>
        </ParallaxLayout>,
        <ParallaxLayout
            key="content-parallax-3"
            background={Content3}>
            <Content
                title={Cause.title}
                description={Cause.description} />
        </ParallaxLayout>,
        <ParallaxLayout
            key="content-parallax-3"
            background={Content2}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", top: "21vh" }}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/V9-RKAfx7hA"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </ParallaxLayout>,
        <ParallaxLayout
            key="content-parallax-4"
            background={Content4}>
            <Content
                title={Solution.title}
                description={Solution.description} />
        </ParallaxLayout>,
        <div>
            <Footer />
        </div>
    ];
}

const sty = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
}

export default Home;