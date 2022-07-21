import React, { useEffect, useState } from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import Card from "../../UI/Card/Card.js";
import Text from "../../Components/Text/Text";
import Image from "../../Components/Image/Image";
import "./RandomUser.css";

const Randomuser = () => {

const [user, setUser] =  useState({});
const [isFetched, setIsFetched] = useState(false);

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
    });
    setIsFetched(true);
 });
}, []);

    return (
        <Wrapper className="container">
            {
         isFetched && <Card className="card">
          <Text className="text1">gender: {user.gender}</Text>
          <Text className="text1">cell: {user.cell}</Text>
          <Text className="text1">email:{user.email}</Text>
          <Text className="text1">name: {user.name}</Text>
          <Text className="text1">picture: {user.picture}</Text>
          <Image width="200px" height="200px" src={user.picture}/>
         </Card>
            }
           
        </Wrapper>
       
    );
}

export default Randomuser;