import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookCase extends Component {

    static propTypes = {
        bookList: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }

    getBooksForShelf(shelfName) {
        return this.props.bookList.filter(book => {
            return book.parentShelf && book.parentShelf === shelfName
        })
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads <FontAwesome name="newspaper-o" /></h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            title={'Currently Reading'}
                            bookList={this.getBooksForShelf('currentlyReading')}
                            onShelfChange={this.props.onShelfChange}
                            faIcon={<FontAwesome name="book" />}
                        />

                        <BookShelf
                            title={'Want to Read'}
                            bookList={this.getBooksForShelf('wantToRead')}
                            onShelfChange={this.props.onShelfChange}
                            faIcon={<FontAwesome name="bookmark" />}
                        />

                        <BookShelf
                            title={'Read'}
                            bookList={this.getBooksForShelf('read')}
                            onShelfChange={this.props.onShelfChange}
                            faIcon={<FontAwesome name="check-square-o" />}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search" >
                        Add a book
                    </Link>
                </div>
            </div>
        );
    }
}

export default BookCase;