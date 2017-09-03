import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import BookCase from './BookCase'

class BooksApp extends React.Component {

  state = {
    bookList: [],
    searchResults: []
  }

  getAllShelvedBooks = () => {
    BooksAPI.getAll().then(response => {
      if (response && response.length) {
        this.setState({
          bookList: response
        })
      }
    })
  }

  getBookList = (query) => {
    BooksAPI.search(query).then(response => {
      if (response && response.length) {
        this.state.bookList.forEach((book, index) => {
          const responseBook = response.find((element) => {
            return element.id === book.id
          })
          if (responseBook) {
            responseBook.shelf = book.shelf
          }
        })
        this.setState({
          searchResults: response
        })
      }
    })
  }

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(response => {
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
      })
    })
  }

  saveToShelfFromSearch = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(response => {
      this.setState(state => ({
        bookList: state.bookList.filter(item => {
          return item.id !== book.id
        }).concat([book])
        ,
        searchResults: state.searchResults
        .map(item => {
          if (item.id === book.id) {
            book.shelf = newShelf
          }
          return item
        })
      }))
    })
  }

  resetBooks = () => {
    this.setState({
      searchResults: []
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks onQueryApi={this.getBookList} bookList={this.state.searchResults} onShelfChange={this.saveToShelfFromSearch} onCleanup={this.resetBooks} />
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
