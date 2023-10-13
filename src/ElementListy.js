import React, { Component } from 'react';
//komponent podrzędny
class ElementListy extends Component {
    render() {
        return (
            <li>
                {this.props.ilosc}x{this.props.children}
            </li>
        )
    }
}

export default ElementListy;