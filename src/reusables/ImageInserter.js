import React, { Component } from 'react';
class ImageInserter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const {classes, styles, src, onClick} = this.props;
        return ( 
                <img className={this.props.classes} onClick={this.props.onClick} style={this.props.styles} src={this.props.src}></img>
         );
    }
}
 
export default ImageInserter;