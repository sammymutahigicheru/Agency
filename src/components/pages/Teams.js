import React, {Component} from 'react';
import Team from '../common/Team';

const teams = [
    {title:'Kay Garland',subtitle:'Lead Designer',image:'assets/img/team/1.jpg'},
    {title:'Larry Parker',subtitle:'Lead Marketer',image:'assets/img/team/2.jpg'},
    {title:'Diana Petersen',subtitle:'Lead Developer',image:'assets/img/team/3.jpg'}
];

class Teams extends Component{
    render(){
        return(
        <section ClassName="page-section bg-light" id="team">
            <div ClassName="container">
                <div ClassName="text-center">
                    <h2 ClassName="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 ClassName="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div ClassName="row">
                   {teams.map((team,index)=>{
                       return <Team 
                       {...team} key={index}
                       />
                   })}
                </div>
                <div ClassName="row">
                    <div ClassName="col-lg-8 mx-auto text-center"><p ClassName="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        );
    }
}
export default Teams;