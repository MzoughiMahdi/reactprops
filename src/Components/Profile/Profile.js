import React from "react";


const Profile = ({fullName,bio,profession,images,handleName}) => {

  const myStyle={
    textAlign:"center",
    color:"rgb(9, 30, 90)",
    textTransform: "uppercase",
    fontFamily: 'Roboto Condensed',margin:"auto",
}


  return (
    <>
    <div onClick={() => alert("Mahdi Mzoughi")}   >
    <div style ={{color:"black",textAlign:"center"}}>
    <h3 style ={myStyle}>  {fullName} </h3>
    <h3 style ={myStyle}>  {bio} </h3>
    <h3 style ={myStyle}>  {profession} </h3>
    <img src={images  } alt="Profile" />

    

    </div>

   
     

      </div>
    </>
  );
};

export default Profile;
