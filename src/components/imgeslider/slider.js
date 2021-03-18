import React from "react";
import "./slider.css";


function ImgeSlider() {

    return (
        <>
            <div className="slider-frame">

                <div class="slide-images">
                    <div className="slide-items">
                    <div class="img-container">
                            <img src="images/slider1.jpg" alt="slider"></img>
                            <div className="Content-box-slider">
                            <h1>Internship</h1>
                            <span></span>
                            <p> An internship is a professional learning experience that offers meaningful,
                                 practical work related to a student's field of study or career interest. 
                                 An internship gives a student the opportunity for career exploration and development, 
                                 and to learn new skills</p>
                        </div>
                        </div>
                       
                    </div>
                    <div className="slide-items">
                        <div class="img-container">
                            <img src="images/slider2.jpg" alt="slider"></img>
                        </div>
                        <div className="Content-box-slider">
                            <h1> Make a Good Impression </h1>
                            <span></span>
                            <p> As an intern it is your responsibility to show your supervisor and others
                                 within the organization that you have what it takes, 
                                 both personally and professionally, to fit in with the corporate culture.
                                  Taking time to learn about the mission of the organization 
                                  and what it values in its employees can provide essential information 
                                  on how the company identifies and defines success.</p>
                        </div>
                    </div>
                    <div className="slide-items">
                        <div class="img-container">
                            <img src="images/slider3.jpg" alt="slider"></img>
                        </div>
                        <div className="Content-box-slider">
                            <h1> Digital marketing </h1>
                            <span></span>
                            <p> Where do you start if you want to develop a digital marketing strategy? 
                                It's still a common challenge since many businesses know how vital digital 
                                and mobile channels are today for acquiring and retaining customers. 
                                Yet they don't have an integrated plan to support digital transformation 
                                and company growth, and engage their audiences effectively online</p>
                        </div>
                    </div>
                  
                </div>

            </div>

        </>

    );


};
export default ImgeSlider;
