import React, { Component } from 'react';
import ElementListy from "./ElementListy";
//komponent nadrzędny
class ListaZakupow extends Component {
    render() {
        return (
            <ul>
                <ElementListy ilosc="1">Chleb</ElementListy>
                <ElementListy ilosc="6">Jaja</ElementListy>
                <ElementListy ilosc="2">Mleko</ElementListy>
            </ul>
        )
    }
}

export default ListaZakupow;