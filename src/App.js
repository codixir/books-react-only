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
    this.state.handleDelete = this.handleDelete.bind(this);
    this.state.handleEdit = this.handleEdit.bind(this);
    this.state.handleInputChange = this.handleInputChange.bind(this);   
  }

  handleDelete(book) {
    let idx = -1;

    for (let i = 0; i < this.state.books.length; i++) {
      if (this.state.books[i].id === book.id) {
        idx = i;
        break;
      }
    }

    this.state.books.splice(idx, 1);
    this.setState({books: this.state.books});
  }

  handleEdit(book) {
    for (let key in this.state.book) {
      if (this.state.book.hasOwnProperty(key)) {
        this.state.book[key] = book[key];
      }
    }

    this.setState({book: this.state.book});
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

    if (this.state.book.id) {
      let idx = -1;

      for (let i = 0; i < this.state.books.length; i++) {
        if (this.state.books[i].id === this.state.book.id) {        
          this.state.books[i] = this.state.book;
          break;
        }
      }
      
      this.setState({books: this.state.books});
      this.setState({ 
        book: { 
          id: 0,
          title: '',
          author: '',
          year: '',
        }
      });
    } else {      
      let id = this.state.books[this.state.books.length - 1].id;

      this.state.book.id = id + 1;
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
          id: 0,
          title: '',
          author: '',
          year: '',
        }
      });   
    } 
  }

  handleInputChange(e) {        
    this.state.book[e.target.name] = e.target.value;
    this.setState({book: this.state.book});
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
          />
          <br></br><hr></hr>          
          <Books 
            books={this.state.books}
            handleDelete={this.state.handleDelete}
            handleEdit={this.state.handleEdit}
          />
        </div>        
      </div>
    );
  }
}

export default App;
