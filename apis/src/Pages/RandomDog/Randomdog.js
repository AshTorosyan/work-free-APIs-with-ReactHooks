// import { useEffect, useState } from "react";
// import Wrapper from "../../UI/Wrapper/Wrapper.js";
// import Image from "../../Components/Image/Image.js";
// import Card from "../../UI/Card/Card.js";
// import "./RandomDog.css";
// import Text from "../../Components/Text/Text.js";

import { Component } from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import Text from "../../Components/Text/Text";
import Card from "../../UI/Card/Card";
import Image from "../../Components/Image/Image";
import "./RandomDog.css";
// const Randomdog = () => {

// const [dog, setDog] = useState("");


// useEffect(() => {
// fetch("https://dog.ceo/api/breeds/image/random")
// .then(data => data.json())
// .then(result => {
//     console.log(result);
//     setDog({
//         picture: result.message
//     })
    
// });

// },[]);

//     return (
        
//            <Wrapper>
//         <Text className="text">Dog Picture</Text>
//         <Card className="card">
//           <Image width="300px" height="300px" src={dog.picture}/>
//           </Card>
        
        
       
//      </Wrapper>
//     );
// }

class RandomDog extends Component {
    constructor() {
        super();
        this.state = {
            picture: <img src=""/>
        }
    }

    componentWillMount() {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(data => data.json())
        .then(result => {
            console.log(result);
            this.setState({
                picture: result.message
            })
        })
    }

    render() {
        return (
            <Wrapper>
                 <Text className="text">Dog Picture</Text>
         <Card className="card">
           <Image width="300px" height="300px" src={this.state.picture}/>
          </Card>
            </Wrapper>
        )
    }
}

export default RandomDog;