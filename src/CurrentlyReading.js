import React from 'react'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

const CurrentlyReading = (props) => {
    return (
        <BookShelf
            title={'Currently Reading'}
            bookList={props.bookList}
            onShelfChange={props.onShelfChange}
            faIcon={<FontAwesome name="book" />}
        />
    )
}

CurrentlyReading.propTypes = {
    bookList: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default CurrentlyReading