import React,{ Component } from "react";
import Header from '../common/Header';
class Home extends Component{
    render(){
        return(
            <div>
              <Header 
              title = "Welcome To Our Studio!"
              subtitle = "It's Nice To Meet You"
              buttonText = "Tell Me More"
              link = "/services"
              showButton = {true}
              image = '../assets/img/header-bg.jpg'
              />  
            </div>
        );
    }
}
export default Home;