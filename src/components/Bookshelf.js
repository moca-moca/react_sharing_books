import React, { Component } from 'react';

class Bookshelf extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}>
                    {book.title}
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