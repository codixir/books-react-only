import React, { Component } from 'react';
import './CreateBook.css';  

class CreateBook extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit} ref={this.props.setRef}>  
                    <div className="form-group">
                        <label>Title<i className="required">*</i></label>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Enter Title" 
                        name="title"
                        onChange={(e) => this.props.handleInputChange(e) }
                        />
                    </div>
                    <div className="form-group">
                        <label>Author<i className="required">*</i></label>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Enter Author"
                        name="author" 
                        onChange={(e) => this.props.handleInputChange(e) }
                        />
                    </div>
                    <div className="form-group">
                        <label>Year<i className="required">*</i></label>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Enter Year" 
                        name="year"
                        onChange={(e) => this.props.handleInputChange(e) }
                        />                                      
                    </div>

                {this.props.errorMessage.length ? <p className="error-message"> {this.props.errorMessage}</p> : ''}                                    
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>            
        )
    }
}

export default CreateBook;