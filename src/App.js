import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import BookCase from './BookCase'

class BooksApp extends React.Component {

  state = {
    bookList: []
  }

  updateBookList = (response) => {
    if (response && response.length) {
      this.setState({
        bookList: response
      })
    }
  }

  getAllShelvedBooks = () => {
    BooksAPI.getAll().then(response => {
      this.updateBookList(response)
    })
  }

  getBookList = (query) => {
    BooksAPI.search(query).then(response => {
      this.updateBookList(response)
    })
  }

  changeShelf = (book, newShelf) => {
    this.setState((state) => {
      state.bookList = state.bookList
        .filter(item => {
          return item.shelf !== 'none'
        })
        .map(item => {
          if (item.id === book.id) {
            book.shelf = newShelf
          }
          return item
        })
    }, () => {
      BooksAPI.update(book, newShelf)
    })
  }

  resetBooks = () => {
    this.setState({
      bookList: []
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks onQueryApi={this.getBookList} bookList={this.state.bookList} onShelfChange={this.changeShelf} onCleanup={this.resetBooks} />
        )}
        />
        <Route exact path="/" render={() => (
          <BookCase bookList={this.state.bookList} onInit={this.getAllShelvedBooks} onShelfChange={this.changeShelf} />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
