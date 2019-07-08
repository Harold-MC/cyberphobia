import React from 'react'
import './../Styles/Parallax.css'

function ParallaxLayout({ background, children }) {

    return (
            <div className="paral" style={{ backgroundImage: `url(${background})` }}>
                {children}
            </div>
    );
}

export default ParallaxLayout;