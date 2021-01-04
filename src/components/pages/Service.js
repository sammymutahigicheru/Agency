import React, {Component} from 'react';
import SingleService from '../common/SingleService';

const services = [
    {title:'E-Commerce',description: '',icon: 'fa-shopping-cart'}
];

class Service extends Component{
    render(){
        return (
            <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row text-center">
                    {services.map((service,index) => {
                        return <SingleService 
                        {...service} key={index}
                        />
                    })}
                </div>
            </div>
        </section>
        );
    }
}
export default Service;