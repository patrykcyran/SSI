import React, { Component } from 'react';
import Lista from './Lista';
class TablicaKanban extends Component {
    render(){
        return (
            <div className="app">
                <Lista id='todo' tytul="Do zrobienia" karty={
                    this.props.karty.filter((karta) => karta.status === "todo")
                } />
                <Lista id='in-progress' tytul="W toku" karty={
                    this.props.karty.filter((karta) => karta.status === "in-progress")
                } />
                <Lista id='done' tytul="Zrobione" karty={
                    this.props.karty.filter((karta) => karta.status === "done")
                } />
            </div>
        );
    }
}
export default TablicaKanban;