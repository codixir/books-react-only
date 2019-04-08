import React, { Component } from 'react';
import Book from './Book';

class Books extends Component {
    render() {
        return (
            <table className="table"> 
            <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Year</th>
                  <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              {
                this.props.books.map(book => {
                  return (
                      <Book 
                        key={book.id} 
                        book={book} 
                        handleDelete={this.props.handleDelete}
                        handleEdit={this.props.handleEdit}
                      />               
                  );
                })
              }
            </tbody>
          </table>
        );
    }
}

export default Books;