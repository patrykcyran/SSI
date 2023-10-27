import React, {Component} from "react";
import update from 'immutability-helper';
import TablicaKanban from "./TablicaKanban";

class TablicaKanbanKontener extends Component {
    constructor() {
        super();
        this.state = {
            karty: []
        };
    }

    componentDidMount() {
        fetch('./karty.json')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({karty: responseData});
            })
            .catch((error) => {
                console.log('Błąd pobierania i przetwarzania danych.', error)
            });
    }

    dodajZadanie(idKarty, nazwaZadania) {
        console.log(`dodaj zadanie: idKarty: '${idKarty}', nazwaZadania: '${nazwaZadania}'`);

        let indexKarty = this.state.karty.findIndex((karta) => karta.id === idKarty);

        let noweZadanie = {id: Date.now(), nazwa: nazwaZadania, zrobione: false};

        let nowyStan = update(this.state.karty, {
            [indexKarty]: {
                zadania: {$push: [noweZadanie]}
            }
        });

        this.setState({karty: nowyStan});
    }

    usunZadanie(idKarty, idZadania, indexZadania) {
        console.log(`usun zadanie: idKarty: '${idKarty}', idZadania: '${idZadania}', indexZadania: '${indexZadania}`);

        let indexKarty = this.state.karty.findIndex((karta) => karta.id === idKarty);

        let nowyStan = update(this.state.karty, {
            [indexKarty]: {
                zadania: {$splice: [[indexZadania, 1]]}
            }
        });

        this.setState({karty: nowyStan});
    }

    zmienZadanie(idKarty, idZadania, indexZadania) {
        console.log(`zmien zadanie: idKarty: '${idKarty}', idZadania: '${idZadania}', indexZadania: '${indexZadania}`);

        let indexKarty = this.state.karty.findIndex((karta) => karta.id === idKarty);

        let nowaWartoscZrobione;

        let nowyStan = update(this.state.karty, {
            [indexKarty]: {
                zadania: {
                    [indexZadania]: {
                        zrobione: {
                            $apply: (zrobione) => {
                                nowaWartoscZrobione = !zrobione;
                                console.log(`Zmieniamy zrobione na: ${nowaWartoscZrobione}`);
                                return nowaWartoscZrobione;
                            }
                        }
                    }
                }
            }
        });
        this.setState({karty: nowyStan});
    }

    przesunWPrawo(idKarty, status) {
        console.log(`Przesun w prawo: ${idKarty} ${status}`)

        this.setState(this.state);
    }

    render() {
        return (
            <TablicaKanban karty={this.state.karty}
            funkcjeZwrotne={{
                dodaj: this.dodajZadanie.bind(this),
                usun: this.usunZadanie.bind(this),
                zmien: this.zmienZadanie.bind(this),
                wPrawo: this.przesunWPrawo.bind(this)}}
                />
        );
    }
}

export default TablicaKanbanKontener;