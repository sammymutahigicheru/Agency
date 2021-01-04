import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Team extends Component{
    render(){
        return (
            <div ClassName="col-lg-4">
                        <div ClassName="team-member">
                            <img ClassName="mx-auto rounded-circle" src={this.props.image} alt="" />
                            <h4>{this.props.title}</h4>
                            <p ClassName="text-muted">{this.props.subtitle}</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                <Link  ClassName="btn btn-dark btn-social mx-2" to="#!"><i ClassName="fab fa-twitter"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                <Link ClassName="btn btn-dark btn-social mx-2" to="#!"><i ClassName="fab fa-facebook-f"></i></Link>   
                                </li>
                                <li className="list-inline-item">
                                <Link ClassName="btn btn-dark btn-social mx-2" to="#!"><i ClassName="fab fa-linkedin-in"></i></Link>
                                </li>
                            </ul>
                        </div>
            </div>
        );
    }
}
export default Team;