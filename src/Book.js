import React, { Component } from 'react';

const Book = ({book}) => {
    return (
        <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
        </tr>
    )
};

export default Book;