import React, { useEffect, useState } from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import Card from "../../UI/Card/Card.js";
import Text from "../../Components/Text/Text";
import Image from "../../Components/Image/Image";


const Randomuser = () => {

const [user, setUser] =  useState({});

useEffect(() => {
 fetch("https://randomuser.me/api/")
 .then(data => data.json())
 .then(result => {
    console.log(result)
    setUser({
        gender: result.results[0].gender,
        cell: result.results[0].cell,
        email: result.results[0].email,
        name: result.results[0].name.first,
        picture: result.results[0].picture.large,
    })
 });
}, []);

    return (
        <Wrapper>
           <Card>
           <Text>gender: {user.gender}</Text>
           <Text>cell: {user.cell}</Text>
           <Text>email:{user.email}</Text>
           <Text>name: {user.name}</Text>
           <Text>picture: {user.picture}</Text>
           <Image width="200px" height="200px" src={user.picture}/>
          </Card>
        </Wrapper>
       
    );
}

export default Randomuser;