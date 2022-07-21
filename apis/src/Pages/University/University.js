import React, { useEffect, useState, useRef } from "react";
import Card from "../../UI/Card/Card";
import Wrapper from '../../UI/Wrapper/Wrapper';
import Text from "../../Components/Text/Text";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import List from "../../Components/List/List";
import ListItem from "../../Components/ListItem/ListItem";

const University = () => {

const [universities, setUniversities] = useState([]);

const searchValue = useRef("");
const api = "http://universities.hipolabs.com/search?country=";


    const findUniversities = () => {
        fetch(api + searchValue.current.value)
        .then(data => data.json())
        .then(result => {
         console.log(result);
         setUniversities(result);
        })
    }
 



    return (
      <Wrapper>
       <Card>
        <Text>Country to search univercities</Text>
        <Input propsRef={searchValue} type="text" placeholder="universities"/>
        <Button onClick={findUniversities}>Find Universities</Button>
       </Card>
        <List>
            {
                universities.map(university => {
                    return (
                        <ListItem key={Math.random()}>
                         <Text>name: {university.name}</Text>
                        </ListItem>
                    );
                })
            }
        </List>
      </Wrapper>
    );
}

export default University;