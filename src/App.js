import React, { Component } from 'react';
import Books from './Books';
import CreateBook from './CreateBook';
import { books } from './data'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      errorMessage: '',
      book: {    
        id: 0,    
        title: '',
        author: '',
        year: '',
      } 
    }

    this.state.handleSubmit = this.handleSubmit.bind(this);
    this.state.handleInputChange = this.handleInputChange.bind(this);   
    this.setRef = this.setRef.bind(this); 
  }
  
  setRef(input) {
    this.childRef = input;
  }

  handleValidation() {
    let errors = {};

    for (let key in this.state.book) {      
      if (this.state.book.hasOwnProperty(key)) {
        if (key != 'id' && !this.state.book[key]) {        
          if (!errors[key]) {
            errors[key] = 'invalid';
          }
        } else {        
          delete errors[key];
        }
      }      
    }

    return window.Object.keys(errors).length;  
  }  

  handleSubmit(e) {
    e.preventDefault();

    if (this.handleValidation() > 0) {
      this.setState({errorMessage: 'Enter all required fields.'});
      return;
    }

    this.setState({errorMessage: ''});

    this.state.book.id = this.state.books.length + 1;
    this.setState({
      book: { 
        title: this.state.book.title,
        author: this.state.book.author,
        year: this.state.book.year,
      }
    }); 

    this.setState({
      books: this.state.books.concat(this.state.book),
      book: { 
        title: '',
        author: '',
        year: '',
      }
    });    

    this.childRef.reset();
  }

  handleInputChange(e) {      
    this.state.book[e.target.name] = e.target.value;
  }

  componentWillMount() {
    this.setState({books: books})
  }

  render() {    
    return (
      <div className="App">
        <div className="container">
          <CreateBook 
              books={this.state.books}
              book={this.state.book }
              errorMessage = {this.state.errorMessage}
              handleSubmit={this.state.handleSubmit}
              handleInputChange={this.state.handleInputChange}
              setRef={this.setRef}
          />
          <br></br><hr></hr>          
          <Books books={this.state.books} />
        </div>        
      </div>
    );
  }
}

export default App;
