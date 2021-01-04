import React, {Component} from 'react';

class Field extends Component{
    render(){
        return (
            <div>
                {this.props.elementName === 'input' ?
                    <div className = "form-group">
                    <input 
                    className="form-control"
                    id={this.props.name} 
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    required="required" 
                    data-validation-required-message="Please enter your name." 
                    name = {this.props.name}
                    onChange = {this.props.onChange}
                    onBlur = {this.props.onBlur}
                    />
                    <p className="help-block text-danger">
                        {(this.props.touched && this.props.errors) &&
                        <span>
                            This Field is Required!!
                        </span>
                        }
                    </p>
                    </div>  
                :
                <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control" 
                                id={this.props.name} 
                                type={this.props.type}
                                placeholder={this.props.placeholder}
                                data-validation-required-message="Please enter a message." 
                                name = {this.props.name}
                                onChange = {this.props.onChange}
                                onBlur = {this.props.onBlur}
                                />
                                <p className="help-block text-danger"></p>
                        </div>
                }
                </div>
        );
    }
}
export default Field;