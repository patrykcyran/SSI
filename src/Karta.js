import React, { Component } from 'react';
import PropTypes from "prop-types";
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
                    <ListaZadan idKarty={this.props.id}
                                zadania={this.props.zadania}
                                funkcjeZwrotne={this.props.funkcjeZwrotne} />
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


        let strzalka;
        let prawo = <button onClick={() => this.props.funkcjeZwrotne.wPrawo(this.props.id, this.props.status)}>🠖</button>;
        let lewo = <button onClick={() => this.props.funkcjeZwrotne.wLewo(this.props.id, this.props.status)}>🠔</button>;
        if (this.props.status === 'todo') {
            strzalka = (
                <div>
                    {prawo}
                </div>
            )
        }
        if (this.props.status === 'in-progress') {
            strzalka = (
                <div>
                    {lewo}
                    {prawo}
                </div>
            )
        }
        if (this.props.status === 'done') {
            strzalka = (
                <div>
                    {lewo}
                </div>
            )
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
                {strzalka}
            </div>
        );
    }
}

let sprawdzamyTytul = (props, propName, componentName) => {
    if (props[propName]) {
        let wartosc = props[propName];
        if (typeof wartosc !== 'string' || wartosc.length > 50) {
            return new Error(
                `Wartosc ${propName} w ${componentName} jest dłuższa iż 50 znaków`
            )
        }
    }
}

Karta.propTypes = {
    id: PropTypes.number.isRequired,
    tytul: sprawdzamyTytul,
    opis: PropTypes.string,
    status: PropTypes.string,
    kolor: PropTypes.string,
    zadania: PropTypes.arrayOf(PropTypes.object),
    funkcjeZwrotne: PropTypes.object
}

export default Karta;