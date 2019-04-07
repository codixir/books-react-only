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
      book: {    
        id: 0,    
        title: '',
        author: '',
        year: '',
      } 
    }

    this.state.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.state.book.id = this.state.books.length + 1;
    this.setState({
      book: { 
        title: this.state.book.title,
        author: this.state.book.author,
        year: this.state.book.year,
      }
    }); 

    this.setState({books: this.state.books.concat(this.state.book)});
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
              handleSubmit={this.state.handleSubmit}
          />
          <br></br><hr></hr>          
          <Books books={this.state.books} />
        </div>        
      </div>
    );
  }
}

export default App;
