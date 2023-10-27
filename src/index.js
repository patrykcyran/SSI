import React from 'react';
import ReactDOM from 'react-dom/client';
import TablicaKanbanKontener from './TablicaKanbanKontener.js'

let listaKart = [
    {   id: 1,
        tytul: "Przeczytać <b>książkę</b>",
        opis: "Muszę przeczytać całą książkę",
        status: "in-progress",
        kolor: "red",
        zadania: [] },
    {   id: 2,
        tytul: "Napisać trochę kodu ze strony <a href='https://dgrela.pl'>DGrela.pl</a>",
        opis: "Będę przepisywać kod przykładu z laboratorium",
        status: "todo",
        kolor: "blue",
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
      <TablicaKanbanKontener />
  </React.StrictMode>
);
