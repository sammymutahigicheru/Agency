import React,{ Component } from "react";
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';
//Reusable components
import Service from '../pages/Service';
import Portfolio from "./Portfolio";
import About from "./About";
class Home extends Component{
    render(){
        return(
            <div>
              <Header 
              title = "Welcome To Our Studio!"
              subtitle = "We're Really Awesome"
              buttonText = "Tell Me More"
              link = "/service"
              showButton = {true}
              image = {image}
              />  
              <Service />
              <Portfolio />
            </div>
        );
    }
}
export default Home;