import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fire from "../../../assets/image/fire-solid.svg"
import search from "../../../assets/image/magnifying-glass-solid.svg"
import star from "../../../assets/image/star-solid.svg"
import profile from "../../../assets/image/user-solid.svg"
export const Footer = () => {
    return (
        <>
            <div className="footer-main"> 
                <div className="inner-footer">
                    <img src={fire} alt="" />
                    <img src={search} alt="" />
                    <img src={star} alt="" />
                    <img src={profile} alt="" />
                </div>
            </div>


        </>
    )
}