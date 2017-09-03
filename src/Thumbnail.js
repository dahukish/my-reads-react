import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

class Thumbnail extends Component {

    static propTypes = {
        imageInfo: PropTypes.object
    }

    getThumbnail() {

        let thumb

        if (this.props.imageInfo) {
            const { thumbnail } = this.props.imageInfo
            thumb = <div className="book-cover" style={{ backgroundImage: `url("${thumbnail}")` }}></div>
        } else {
            thumb = <div className="book-cover"><FontAwesome name="newspaper-o" size="4x" /></div>
        }

        return thumb
    }

    render() {
        return (this.getThumbnail())
    }

}

export default Thumbnail