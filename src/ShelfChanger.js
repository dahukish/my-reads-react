import React from 'react'
import PropTypes from 'prop-types'

const ShelfChanger = (props) => {

    return (
        <div className="book-shelf-changer">
            <select value={props.book.shelf || 'none'} onChange={(event) => props.onShelfChange(props.book, event.target.value)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

ShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default ShelfChanger