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
                </tr>
            </thead>
            <tbody>
              {
                this.props.books.map(book => {
                  return (
                      <Book book={book} />               
                  );
                })
              }
            </tbody>
          </table>
        );
    }
}

export default Books;