import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookGrid from './BookGrid'

class SearchBooks extends Component {

    static propTypes = {
        onQueryApi: PropTypes.func.isRequired,
        bookList: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired,
        onCleanup: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery(query) {
        this.setState({
            query: query.trim()
        })

        if (this.state.query.length) {
            this.props.onQueryApi(this.state.query)
        }
    }

    clearQuery() {
        this.setState({
            query: ''
        })
        this.props.onCleanup()
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input onChange={(event) => { this.updateQuery(event.target.value) }} type="text" value={this.state.query} placeholder="Search by title or author" />
                    </div>
                    <button onClick={() => { this.clearQuery() }}><FontAwesome name="trash" size='2x' /></button>
                </div>
                <div className="search-books-results">
                    {this.props.bookList.length > 0 && (<BookGrid bookList={this.props.bookList} onShelfChange={this.props.onShelfChange} />)}
                </div>
            </div>
        )
    }
}

export default SearchBooks;
