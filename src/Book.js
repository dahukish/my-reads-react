import React from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'
import Thumbnail from './Thumbnail'

const Book = (props) => {

    return (
        <div className="book">
            <div className="book-top">
                <Thumbnail imageInfo={props.book.imageLinks}/>
                <ShelfChanger book={props.book} onShelfChange={props.onShelfChange} />
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors && props.book.authors.join(', ')}</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default Book