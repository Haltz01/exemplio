import React from 'react';

import '../ExamplesList.css';

// import locationIcon from '../../../assets/icons/locationIcon.svg'

export default function ExamplesListCardInvalid() {
    return (
        <div className="examplesListCardInvalid d-flex flex-column m-2 align-items-center text-center">
            <div className="topCardDetail justify-content-center"></div>
            <div className="invalidImage my-3 invalidBox"></div>
            <h2 className="exampleNameText mx-1 invalidBox"> Carregando nome... </h2>
            <h5 className="placeOfOriginText mb-2 invalidBox"> 
                {/* <img className="mr-2" alt="location" src={ locationIcon }/> */}
                Carregando localização...
            </h5>
            <h4 className="exampleTagsText m-2 mb-4 invalidBox">
                Carregando tags...
            </h4> 
        </div>
    );
}