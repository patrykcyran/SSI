import React from 'react';
import ReactDOM from 'react-dom/client';
import ListaZakupow from './ListaZakupow';

let listaKart = [
    {   id: 1,
        tytul: "Przeczytać książkę",
        opis: "Muszę przeczytać całą książkę",
        status: "in-progress",
        zadania: [] },
    {   id: 2,
        tytul: "Napisać trochę kodu",
        opis: "Będę przepisywać kod przykładu z laboratorium",
        status: "todo",
        zadania: [
            {   id: 1,
                nazwa: "Przykład listy zakupów",
                zrobione: true },
            {   id: 2,
                nazwa: "Przykład Kanban",
                zrobione: false },
            {   id: 3,
                nazwa: "Mój własny przykład",
                zrobione: false }
        ]
    }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListaZakupow />
  </React.StrictMode>
);
