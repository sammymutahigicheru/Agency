import React,{ Component } from "react";
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';
class Home extends Component{
    render(){
        return(
            <div>
              <Header 
              title = "About Us"
              subtitle = "It's really a great story"
              buttonText = "Tell Me More"
              link = "/services"
              showButton = {false}
              image = {image}
              />  
            </div>
        );
    }
}
export default Home;