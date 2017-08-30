import React from 'react'
import PropTypes from 'prop-types'
import BookGrid from './BookGrid'

const BookShelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.faIcon}{props.title}</h2>
            <div className="bookshelf-books">
                <BookGrid bookList={props.bookList} onShelfChange={props.onShelfChange} />
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    bookList: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    faIcon: PropTypes.object.isRequired
}

export default BookShelf;