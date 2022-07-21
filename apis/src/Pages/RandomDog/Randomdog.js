import { useEffect, useState } from "react";
import Wrapper from "../../UI/Wrapper/Wrapper.js";
import Image from "../../Components/Image/Image.js";
import Card from "../../UI/Card/Card.js";
import "./RandomDog.css";
import Text from "../../Components/Text/Text.js";

const Randomdog = () => {

const [dog, setDog] = useState("");
const [isFetched, setIsFetched] = useState(false);
useEffect(() => {
fetch("https://dog.ceo/api/breeds/image/random")
.then(data => data.json())
.then(result => {
    console.log(result);
    setDog({
        picture: result.message
    })
    setIsFetched(true);
});

},[]);

    return (
     <Wrapper>
        <Text className="text">Dog Picture</Text>
        {
         isFetched && <Card className="card">
          <Image width="300px" height="300px" src={dog.picture}/>
          </Card>
        }
        
       
     </Wrapper>
    );
}

export default Randomdog;