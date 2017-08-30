import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookGrid = (props) => {
    return (
        <div>
        <ol className="books-grid">
            {props.bookList.map((listItem) => (
                <li key={listItem.id}><Book book={listItem} onShelfChange={props.onShelfChange} /></li>
            ))}
        </ol>
        </div>
    )
}

BookGrid.propTypes = {
    bookList: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default BookGrid;