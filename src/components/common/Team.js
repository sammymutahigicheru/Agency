import React, {Component} from 'react';

class Team extends Component{
    render(){
        return (
            <div ClassName="col-lg-4">
                        <div ClassName="team-member">
                            <img ClassName="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="" />
                            <h4>{this.props.title}</h4>
                            <p ClassName="text-muted">{this.props.subtitle}</p>
                            <a ClassName="btn btn-dark btn-social mx-2" href="#!"><i ClassName="fab fa-twitter"></i></a>
                            <a ClassName="btn btn-dark btn-social mx-2" href="#!"><i ClassName="fab fa-facebook-f"></i></a>
                            <a ClassName="btn btn-dark btn-social mx-2" href="#!"><i ClassName="fab fa-linkedin-in"></i></a>
                        </div>
            </div>
        );
    }
}
export default Team;