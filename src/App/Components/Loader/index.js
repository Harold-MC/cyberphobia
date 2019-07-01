import React from 'react'
import './../../Styles/Loader.css'

export const Loader = () => {
    return (
        <div className="loader-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="loader">
                            <div className="finger finger-1">
                                <div className="finger-item">
                                    <span></span><i></i>
                                </div>
                            </div>
                            <div className="finger finger-2">
                                <div className="finger-item">
                                    <span></span><i></i>
                                </div>
                            </div>
                            <div className="finger finger-3">
                                <div className="finger-item">
                                    <span></span><i></i>
                                </div>
                            </div>
                            <div className="finger finger-4">
                                <div className="finger-item">
                                    <span></span><i></i>
                                </div>
                            </div>
                            <div className="last-finger">
                                <div className="last-finger-item"><i></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}