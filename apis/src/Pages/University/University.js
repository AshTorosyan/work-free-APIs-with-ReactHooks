import React, {useState, useRef } from "react";
import Card from "../../UI/Card/Card";
import Wrapper from '../../UI/Wrapper/Wrapper';
import Text from "../../Components/Text/Text";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import List from "../../Components/List/List";
import ListItem from "../../Components/ListItem/ListItem";
import "./University.css";


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
      <Wrapper className="univer_wrapper">
       <Card className="univer_card">
        <Text className="univer_text_search">Country to search universities</Text>
        <Input className="univer_input" propsRef={searchValue} type="text" placeholder="write country"/>
        <Button className="univer_button" onClick={findUniversities}>Find Universities</Button>
       </Card>
        <List className="univer_list">
            {
                universities.map(university => {
                    return (
                        <ListItem className="univer_listIem" key={Math.random()}>
                         <Text className="univer_text">{university.name}</Text>
                        </ListItem>
                    );
                })
            }
        </List>
      </Wrapper>
    );
}

export default University;