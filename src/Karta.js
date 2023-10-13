import React, { Component } from 'react';
import ListaZadan from './ListaZadan';
class Karta extends Component {
    constructor() {
        super();
        this.state = {
            pokazSzczegoly: false
        }
    }

    zmienSzczegoly() {
        this.setState({pokazSzczegoly: !this.state.pokazSzczegoly});
    }
    render() {
        let szczegolyKarty;
        if (this.state.pokazSzczegoly) {
            szczegolyKarty = (
                <div className="card__details">
                    {this.props.opis}
                    <ListaZadan idKarty={this.props.id} zadania={this.props.zadania} />
                </div>
            )
        }

        let kolorowyPasek = {
            width: 7,
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            backgroundColor: this.props.kolor
        }

        return (
            <div className="card">
                <div style={kolorowyPasek} />
                <div className={ this.state.pokazSzczegoly ?
                    "card__title card__title--is-open" : "card__title" }
                     onClick={this.zmienSzczegoly.bind(this)}>
                    <span dangerouslySetInnerHTML={{__html:this.props.tytul}}/>
                    </div>
                {szczegolyKarty}
            </div>
        );
    }
}
export default Karta;