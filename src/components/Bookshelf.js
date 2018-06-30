import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}>
                    <Book book={book} />
                </li>
            );
        })
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

export default Bookshelf;