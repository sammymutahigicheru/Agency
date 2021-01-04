import React,{ Component } from "react";
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';
//Reusable components
import Service from '../pages/Service';
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
              <Service />
            </div>
        );
    }
}
export default Home;