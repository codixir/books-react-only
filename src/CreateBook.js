import React, { Component } from 'react';
import './CreateBook.css';  

class CreateBook extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.book) {
            for (let key in this.props.book) {
                if (this.props.book.hasOwnProperty(key)) {
                    if (nextProps.book[key]) {
                        this.props.book[key] = nextProps.book[key];
                    }
                }
            }
        } 
    }
      
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>  
                    <div className="form-group">
                        <label>Title<i className="required">*</i></label>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Enter Title" 
                        name="title"
                        value={this.props.book.title}
                        onChange={this.props.handleInputChange }
                        />
                    </div>
                    <div className="form-group">
                        <label>Author<i className="required">*</i></label>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Enter Author"
                        name="author"   
                        value={this.props.book.author}
                        onChange={this.props.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Year<i className="required">*</i></label>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Enter Year" 
                        name="year"
                        value={this.props.book.year}
                        onChange={this.props.handleInputChange}
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