import React from "react";
import '../../assets/css/main.css'
import home from "../../assets/image/house-solid.svg"
import location from "../../assets/image/location-dot-solid.svg"
import heart from "../../assets/image/heart-solid.svg"


export const Profile=(props)=>{

    return(
        <>
        <div className="profile-main">
            
            <div className="image-box">
                <img src={props.data.imageUrl} alt="" />
            </div>
            <div className="name-box">
                <h1>{props.data.name} , </h1>
                <h1> {props.data.age}</h1>
            </div>
            <div className="live-in">
                <div className="round-box">
                    <img src={home} alt="" />
                    <h3>Lives in {props.data.address}</h3>
                </div>
                <div className="round-box">
                    <img src={location} alt="" />
                    <h3>{props.data.distance} Km away</h3>
                </div>
            </div>
            
            <div className="looking-box">
                <div className="looking-left"> 
                    <h1>&#129300;</h1>
                </div>
                <div className="looking-right">
                    <h3>Looking for</h3>
                    <h2>{props.data.looking}</h2>
                </div>
            </div>

            <div className="about-box">
                <h3>
                    Basics
                </h3>
                <div className="about-main-box">
                {
                    props.data.basics.map((value)=>{
                        return(
                            <>
                            <div className="round-box addmargin">
                                <h3>{value}</h3>
                            </div>
                            </>
                        )
                    })
                }
                </div>
            </div>
            <div className="about-box">
                <h3>
                    Lifestyle
                </h3>
                <div className="about-main-box">
                {
                    props.data.lifestyle.map((value)=>{
                        return(
                            <>
                            <div className="round-box addmargin">
                                <h3>{value}</h3>
                            </div>
                            </>
                        )
                    })
                }
                </div>
            </div>
            <div className="about-box">
                <h3>
                    Interests
                </h3>
                <div className="about-main-box">
                {
                    props.data.interests.map((value)=>{
                        return(
                            <>
                            <div className="round-box addmargin">
                                <h3>{value}</h3>
                            </div>
                            </>
                        )
                    })
                }
                </div>
            </div>
            
        
        </div>

       
       


       

        </>
    )
}