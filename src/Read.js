import React from 'react'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

const Read = (props) => {
    return (
        <BookShelf
            title={'Read'}
            bookList={props.bookList}
            onShelfChange={props.onShelfChange}
            faIcon={<FontAwesome name="check-square-o" />}
        />
    )
}

Read.propTypes = {
    bookList: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default Read