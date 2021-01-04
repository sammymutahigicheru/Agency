import React, {Component} from 'react';
import SinglePortfolio from '../common/SinglePortfolio';
const portfolios = [
    {title:'Threads',subtitle:'Illustration',image:'assets/img/portfolio/01-thumbnail.jpg'},
    {title:'Explore',subtitle:'Graphic Design',image:'assets/img/portfolio/02-thumbnail.jpg'},
    {title:'Finish',subtitle:'Identity',image:'assets/img/portfolio/03-thumbnail.jpg'},
    {title:'Lines',subtitle:'Branding',image:'assets/img/portfolio/04-thumbnail.jpg'},
    {title:'Southwest',subtitle:'Web Design',image:'assets/img/portfolio/05-thumbnail.jpg'},
    {title:'Window',subtitle:'Photography',image:'assets/img/portfolio/06-thumbnail.jpg'}
];
class Portfolio extends Component{
    render(){
        return (
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {portfolios.map((portfolio,index) =>{
                        return <SinglePortfolio
                         {...portfolio} key={index}
                        />
                    })}
                </div>
            </div>
        </section>
        );
    }
}
export default Portfolio;