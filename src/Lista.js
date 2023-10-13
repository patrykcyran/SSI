import React, { Component } from 'react';
import Karta from './Karta';
class Lista extends Component {
    render() {
        let karty = this.props.karty.map((karta) => {
            return <Karta key={karta.id}
                          id={karta.id}
                          tytul={karta.tytul}
                          opis={karta.opis}
                          kolor={karta.kolor}
                          zadania={karta.zadania}/>
        });
        return (
            <div className="list">
                <h1>{this.props.tytul}</h1>
                {karty}
            </div>
        )
    }
}
export default Lista;