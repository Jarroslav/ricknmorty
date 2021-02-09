import React from 'react';
import "./CharacterModal.scss"

class CharacterModal extends React.Component {
    render() {
        let actingInEpisodes = this.props.episode.map(item => (item.slice(40)));
        let formattedActingInEpisodes = actingInEpisodes.join(", ") + " ";
        const episodesLength = () => (actingInEpisodes.length > 2 ? "episodes" : "episode");

        return (
            <div className='modal'>
                <div className='modal__content'>
                    <div className="modal__left">
                        <h2 className="modal__name">Meet {this.props.name}</h2>
                        <div>
                            <img className="modal__image" src={this.props.image} alt="character"/>
                        </div>
                    </div>
                    <div className="modal__right">
                        <p>I starred in: <span>{formattedActingInEpisodes}</span>{episodesLength()}.</p>
                        <div>
                            <button onClick={this.props.closePopup}>close me</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterModal;
