import React, { Component } from 'react';

const Book = ({book, handleDelete, handleEdit}) => {
    return (
        <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td>
                <button onClick={(e) => handleDelete(book)}>Delete</button>
                <button onClick={(e) => handleEdit(book)}>Edit</button>
            </td>
        </tr>
    )
};

export default Book;