import React from 'react';
import {Link} from "react-router-dom";

function PetCard(props) {
    const pet = props.pet

    return (
        <div className='card'>
            <Link className="link" to={`/pet/${pet.id}`}>
                <h3>{pet.name}</h3>
                <div className="content">
                    <img src="https://thecontemporarypet.com/wp-content/themes/contemporarypet/images/default.png" alt={pet.name}/>
                    <div>
                        <div >Birth date: {pet.birth_date}</div>
                        <div>Sex: {pet.sex}</div>
                        <div>Species: {pet.species}</div>
                        <div>Status: {pet.status}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default PetCard;