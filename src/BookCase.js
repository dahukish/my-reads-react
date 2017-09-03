import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'

class BookCase extends Component {

    static propTypes = {
        bookList: PropTypes.array.isRequired,
        onInit: PropTypes.func.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }

    getBooksForShelf(shelfName) {
        return this.props.bookList.filter(book => {
            return book.shelf && book.shelf === shelfName
        })
    }

    componentDidMount() {
        this.props.onInit()
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads <FontAwesome name="newspaper-o" /></h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <CurrentlyReading
                            bookList={this.getBooksForShelf('currentlyReading')}
                            onShelfChange={this.props.onShelfChange}
                        />
                        <WantToRead
                            bookList={this.getBooksForShelf('wantToRead')}
                            onShelfChange={this.props.onShelfChange}
                        />
                        <Read
                            bookList={this.getBooksForShelf('read')}
                            onShelfChange={this.props.onShelfChange}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search" >
                        Add a book
                    </Link>
                </div>
            </div>
        )
    }
}

export default BookCase