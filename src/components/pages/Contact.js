import React,{Component} from 'react';
import Field from '../common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = {
    sections: [
       [
        {name:'name',elementName: 'input', type: 'text',placeholder:'Your Name'},
        {name:'email',elementName: 'input', type: 'email',placeholder:'Your Email'},
        {name:'phone',elementName: 'input', type: 'text',placeholder:'Your Phone'}
       ],
        [
            {name:'message',elementName: 'textarea', type: 'text',placeholder:'Type Your Message'}
        ]
    ],
    
}

class Contact extends Component{

    submitForm = (e) =>{
        alert("Form Submitted!! Thank You");
    }
    render(){
        return (
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form id="contactForm" onSubmit={e => this.submitForm} name="sentMessage">
                    <div className="row align-items-stretch mb-5">
                           {fields.sections.map((section,sectionIndex) =>{
                               return (
                                <div className="col-md-6" key={sectionIndex}>
                                    {section.map((field,i)=>{
                                        return <Field 
                                        {...field}
                                        key={i}
                                        value = {this.props.values[field.name]}
                                        name = {field.name}
                                        onChange = {this.props.handleChange}
                                        />
                                    })}
                                </div>
                               );
                           })} 
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button className="btn btn-primary btn-xl text-uppercase" 
                        id="sendMessageButton"
                         type="submit"
                         onClick = {e => this.submitForm}
                         >Send Message</button>
                    </div>
                </form>
            </div>
        </section>
        );
    }
}
export default withFormik({
    mapPropsToValues: () =>({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3,'Your name must be longer than that!!').required('You must give us your name.')
    }),
    handleSubmit: (values, {setSubmitting}) =>{
        alert("You've submitted the form",JSON.stringify(values));
    }
})(Contact);