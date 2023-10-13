import React, { Component } from "react";
class ListaZadan extends Component {
    render() {
        let zadania = this.props.zadania.map((zadanie) => (
            <li key={zadanie.id} className="checklist__task">
                <input type="checkbox" defaultChecked={zadanie.zrobione} />
                {zadanie.nazwa}
                <a href="#" className="checklist__task--remove"/>
            </li>
        ));
        return (
            <div className="checklist">
                <ul>{zadania}</ul>
            </div>
        );
    }
}
export default ListaZadan;