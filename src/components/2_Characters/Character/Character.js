import React from "react";

import CharacterModal from "../CharacterModal/CharacterModal";

import "../Character/Character.scss"

import "../CharacterModal/CharacterModal.scss"

class Character extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
        console.log(this.props.character.image)
    }

    render() {
        const character = this.props.character;

        return(
            <div className="popup" onClick={this.togglePopup.bind(this)}>
                <div className="card">
                    <img className="card-image" src={character.image} alt="character"/>
                    <h2 className="card-name">{character.name}</h2>
                    <p className="card-species">Species: {character.species}</p>
                    <p className="card-gender">Gender: {character.gender}</p>
                    <p className="card-gender">Status: {character.status}</p>
                </div>
                {this.state.showPopup ?
                    <CharacterModal
                        name={character.name}
                        species={character.species}
                        gender={character.gender}
                        episode={character.episode}
                        status={character.status}
                        image={character.image}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        )
    }
}

export default Character;