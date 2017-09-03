import React from 'react'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

const WantToRead = (props) => {
    return (
        <BookShelf
            title={'Want to Read'}
            bookList={props.bookList}
            onShelfChange={props.onShelfChange}
            faIcon={<FontAwesome name="bookmark" />}
        />
    )
}

WantToRead.propTypes = {
    bookList: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default WantToRead