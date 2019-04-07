import React, { Component } from 'react';

class CreateBook extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {        
        this.props.book[e.target.name] = e.target.value;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Enter Title" 
                        name="title"
                        onChange={this.handleInputChange }
                        />                
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Enter Author"
                        name="author" 
                        onChange={this.handleInputChange }
                        />                
                    </div>
                    <div className="form-group">
                        <label>Year</label>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Enter Year" 
                        name="year"
                        onChange={this.handleInputChange }
                        />                
                    </div>
                                    
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>            
        )
    }
}

export default CreateBook;