import React from "react";
import { Navbar } from "../common/navbar/Navbar";
import { Footer } from "../common/footer/Footer";
import { Profile } from "../profile/Profile";

import { useState } from "react";
import img1 from "../../assets/image/back.png"
import img2 from "../../assets/image/cancel.png"
import img3 from "../../assets/image/like.png"
import img4 from "../../assets/image/star.png"
import img5 from "../../assets/image/thunder.png"
import Swal from 'sweetalert2'

// or via CommonJS
// const Swal = require('sweetalert2')


const profile=[
  {
      "id": 1,
      "name": "Silpee Gupta",
      "age": 22,
      "gender": "Female",
      "basics": ["Bachelors", "Video Chatter", "Romance"],
      "lifestyle": ["Cat", "Non-smoker", "Gym Lover", "Vegetarian"],
      "interests": ["Writing", "Workout", "Travel", "Poetry"],
      "looking": "Long-term Relationship",
      "address": "MANIT Bhopal",
      "distance": 5,
      "height": 161,
      "college": "MANIT",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/hushl%2FIMG-20231123-WA0008.jpg?alt=media&token=662e579d-c43c-4b5b-97b6-4c9acb424a43"
    },
    {
      "id": 2,
      "name": "Aria Patel",
      "age": 24,
      "gender": "Female",
      "basics": ["Masters", "Video Chatter", "Romance"],
      "lifestyle": ["Dog", "Non-smoker", "Yoga Enthusiast", "Vegetarian"],
      "interests": ["Reading", "Painting", "Hiking", "Music"],
      "looking": "Long-term Relationship",
      "address": "Downtown, Cityville",
      "distance": 10,
      "height": 165,
      "college": "City University",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/hushl%2FIMG-20231123-WA0009.jpg?alt=media&token=c6cc3545-e6af-4824-b87e-46c8c9371391"
    },
    {
      "id": 3,
      "name": "Eva Singh",
      "age": 23,
      "gender": "Female",
      "basics": ["Bachelors", "Video Chatter", "Romance"],
      "lifestyle": ["Cat", "Non-smoker", "Gym Lover", "Vegetarian"],
      "interests": ["Writing", "Workout", "Travel", "Poetry"],
      "looking": "Long-term Relationship",
      "address": "Uptown, Cityville",
      "distance": 8,
      "height": 160,
      "college": "City University",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/hushl%2FIMG-20231123-WA0010.jpg?alt=media&token=00c0cf35-8b4b-40ca-bc01-da5260cb3915"
    },
    {
      "id": 4,
      "name": "Zara Khan",
      "age": 25,
      "gender": "Female",
      "basics": ["Masters", "Video Chatter", "Romance"],
      "lifestyle": ["Dog", "Non-smoker", "Yoga Enthusiast", "Vegetarian"],
      "interests": ["Reading", "Painting", "Hiking", "Music"],
      "looking": "Long-term Relationship",
      "address": "Suburbia, Cityville",
      "distance": 12,
      "height": 168,
      "college": "City University",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/hushl%2FIMG-20231123-WA0011.jpg?alt=media&token=04abc789-0839-469b-8c21-3d5a21f5f7da"
    },
    {
      "id": 5,
      "name": "Nina Das",
      "age": 22,
      "gender": "Female",
      "basics": ["Bachelors", "Video Chatter", "Romance"],
      "lifestyle": ["Cat", "Non-smoker", "Gym Lover", "Vegetarian"],
      "interests": ["Writing", "Workout", "Travel", "Poetry"],
      "looking": "Long-term Relationship",
      "address": "Downtown, Cityville",
      "distance": 9,
      "height": 163,
      "college": "City University",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/hushl%2FIMG-20231123-WA0012.jpg?alt=media&token=a74ea9da-b5aa-4e84-80e9-5a286c81b903"
    },
    {
      "id": 6,
      "name": "Lily Sharma",
      "age": 26,
      "gender": "Female",
      "basics": ["Masters", "Video Chatter", "Romance"],
      "lifestyle": ["Dog", "Non-smoker", "Yoga Enthusiast", "Vegetarian"],
      "interests": ["Reading", "Painting", "Hiking", "Music"],
      "looking": "Long-term Relationship",
      "address": "Uptown, Cityville",
      "distance": 7,
      "height": 167,
      "college": "City University",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/hushl%2FIMG-20231123-WA0013.jpg?alt=media&token=2dfdf1e6-229c-4ffa-a60d-f379b3b01f9c"
    },
    {
      "id": 7,
      "name": "Zoe Kapoor",
      "age": 23,
      "gender": "Female",
      "basics": ["Bachelors", "Video Chatter", "Romance"],
      "lifestyle": ["Cat", "Non-smoker", "Gym Lover", "Vegetarian"],
      "interests": ["Writing", "Workout", "Travel", "Poetry"],
      "looking": "Long-term Relationship",
      "address": "Downtown, Cityville",
      "distance": 8,
      "height": 162,
      "college": "City University",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/hushl%2FIMG-20231123-WA0008.jpg?alt=media&token=662e579d-c43c-4b5b-97b6-4c9acb424a43"
    },
    {
      "id": 8,
      "name": "Mia Khan",
      "age": 24,
      "gender": "Female",
      "basics": ["Masters", "Video Chatter", "Romance"],
      "lifestyle": ["Dog", "Non-smoker", "Yoga Enthusiast", "Vegetarian"],
      "interests": ["Reading", "Painting", "Hiking", "Music"],
      "looking": "Long-term Relationship",
      "address": "Suburbia, Cityville",
      "distance": 10,
      "height": 165,
      "college": "City University",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/hushl%2FIMG-20231123-WA0009.jpg?alt=media&token=c6cc3545-e6af-4824-b87e-46c8c9371391"
    },
    {
      "id": 9,
      "name": "Sophie Das",
      "age": 22,
      "gender": "Female",
      "basics": ["Bachelors", "Video Chatter", "Romance"],
      "lifestyle": ["Cat", "Non-smoker", "Gym Lover", "Vegetarian"],
      "interests": ["Writing", "Workout", "Travel", "Poetry"],
      "looking": "Long-term Relationship",
      "address": "Downtown, Cityville",
      "distance": 9,
      "height": 163,
      "college": "City University",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/hushl%2FIMG-20231123-WA0010.jpg?alt=media&token=00c0cf35-8b4b-40ca-bc01-da5260cb3915"
    },
    {
      "id": 10,
      "name": "Ivy Patel",
      "age": 25,
      "gender": "Female",
      "basics": ["Masters", "Video Chatter", "Romance"],
      "lifestyle": ["Dog", "Non-smoker", "Yoga Enthusiast", "Vegetarian"],
      "interests": ["Reading", "Painting", "Hiking", "Music"],
      "looking": "Long-term Relationship",
      "address": "Uptown, Cityville",
      "distance": 7,
      "height": 166,
      "college": "City University",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/hushl%2FIMG-20231123-WA0011.jpg?alt=media&token=04abc789-0839-469b-8c21-3d5a21f5f7da"
    },
    {
      "id": 11,
      "name": "Aisha Gupta",
      "age": 23,
      "gender": "Female",
      "basics": ["Bachelors", "Video Chatter", "Romance"],
      "lifestyle": ["Cat", "Non-smoker", "Gym Lover", "Vegetarian"],
      "interests": ["Writing", "Workout", "Travel", "Poetry"],
      "looking": "Long-term Relationship",
      "address": "MANIT Bhopal",
      "distance": 6,
      "height": 162,
      "college": "MANIT",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/hushl%2FIMG-20231123-WA0012.jpg?alt=media&token=a74ea9da-b5aa-4e84-80e9-5a286c81b903"
    },
    {
      "id": 12,
      "name": "Isabella Singh",
      "age": 24,
      "gender": "Female",
      "basics": ["Masters", "Video Chatter", "Romance"],
      "lifestyle": ["Dog", "Non-smoker", "Yoga Enthusiast", "Vegetarian"],
      "interests": ["Reading", "Painting", "Hiking", "Music"],
      "looking": "Long-term Relationship",
      "address": "Downtown, Cityville",
      "distance": 9,
      "height": 165,
      "college": "City University",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/hushl%2FIMG-20231123-WA0013.jpg?alt=media&token=2dfdf1e6-229c-4ffa-a60d-f379b3b01f9c"
    },
    {
      "id": 13,
      "name": "Harper Kapoor",
      "age": 25,
      "gender": "Female",
      "basics": ["Bachelors", "Video Chatter", "Romance"],
      "lifestyle": ["Cat", "Non-smoker", "Gym Lover", "Vegetarian"],
      "interests": ["Writing", "Workout", "Travel", "Poetry"],
      "looking": "Long-term Relationship",
      "address": "Uptown, Cityville",
      "distance": 8,
      "height": 160,
      "college": "City University",
      "ImageUrl": "https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/hushl%2FIMG-20231123-WA0008.jpg?alt=media&token=662e579d-c43c-4b5b-97b6-4c9acb424a43"
    },
    {
      "id": 14,
      "name": "Luna Das",
      "age": 22,
      "gender": "Female",
      "basics": ["Bachelors", "Video Chatter", "Romance"],
      "lifestyle": ["Cat", "Non-smoker", "Gym Lover", "Vegetarian"],
      "interests": ["Writing", "Workout", "Travel", "Poetry"],
      "looking": "Long-term Relationship",
      "address": "Downtown, Cityville",
      "distance": 7,
      "height": 163,
      "college": "City University",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/hushl%2FIMG-20231123-WA0009.jpg?alt=media&token=c6cc3545-e6af-4824-b87e-46c8c9371391"
    },
    {
      "id": 15,
      "name": "Grace Khan",
      "age": 26,
      "gender": "Female",
      "basics": ["Masters", "Video Chatter", "Romance"],
      "lifestyle": ["Dog", "Non-smoker", "Gym Lover", "Vegetarian"],
      "interests": ["Reading", "Painting", "Hiking", "Music"],
      "looking": "Long-term Relationship",
      "address": "Suburbia, Cityville",
      "distance": 10,
      "height": 166,
      "college": "City University",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/ecell-1b04d.appspot.com/o/hushl%2FIMG-20231123-WA0009.jpg?alt=media&token=c6cc3545-e6af-4824-b87e-46c8c9371391"
    }
]

const profileLikeMe=[
  {
    "id":2
  },
  {
    "id":5
  },
  {
    "id":6
  }
]

export const Home=()=>{

  const [id,setid]=useState(0);

  function match( findid)
  {
    for(var i=0;i<profileLikeMe.length;i++)
    {
      if(profileLikeMe[i].id==findid)
      {
        return true;
      }
      return false;
    }

  }
  function likeButton ()
  {
    if(match(id))
    {
      Swal.fire({
        title: "Its a Match Start Messeging",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    }
    if(id==profile.length)
    {
      setid(0)
    }
    else 
    {
      setid(id+1)
    }
  }

  function dislikeButton ()
  {
    
    if(id==profile.length)
    {
      setid(0)
    }
    else 
    {
      setid(id+1)
    }
  }
  function supperchatButton ()
  {
    
    Swal.fire({
      title: "Your First messege",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Send",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Sended`
        });
      }
    });
  }
  function backbutton(){
    if(id==0)
    {
      setid(profile.length)
    }
    else 
    {
      setid(id-1)
    }

  }
  function superlike()
  {
    Swal.fire({
      title: "Super Like sended",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });

  }

    
    return(
        <>
        <Navbar />
        <Profile data={profile[id]}/>
        <div className="button-box">
          <div className="inner-button-box"> 
            <div className="box1" onClick={backbutton}><img src={img1} alt="" /></div>
            <div className="box2" onClick={dislikeButton}><img src={img2} alt="" /></div>
            <div className="box3" onClick={likeButton} ><img src={img3} alt="" /></div>
            <div className="box4" onClick={supperchatButton}><img src={img4} alt="" /></div>
            <div className="box5" onClick={superlike}><img src={img5} alt="" /></div>
          </div>
        
        </div>

        
        <Footer />


         
        </>
    )
}