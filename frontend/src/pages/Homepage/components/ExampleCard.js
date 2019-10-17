import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import exemplioLogo from '../../../assets/LogoVertical.svg';

import '../../Homepage.css';

const EXAMPLE_BASE_LINK = '/exemplo/';
export default function ExampleCard(props) {
    const [ exampleLink, setExampleLink ] = useState('#');
    const [ imageLink, setImageLink ] = useState(exemplioLogo);
    const [ name, setName ] = useState('Carregando nome...');
    const [ tags, setTags ] = useState('Carregando tags...');
    
    //Update Image
    useEffect(() =>  {
        if (props.exampleInfo.imageLink)
            setImageLink(props.exampleInfo.imageLink);
    }, [props.exampleInfo.imageLink]);

    //Update Name
    useEffect(()=> {
        if (props.exampleInfo.firstName)
            setName(`${props.exampleInfo.firstName} ${props.exampleInfo.lastName}`);
    }, [props.exampleInfo.firstName, props.exampleInfo.lastName]);
    
    //Update Tags
    useEffect(() => {
        if (props.exampleInfo.tags) 
            setTags(props.exampleInfo.tags.reduce((a,b) => `${a}, ${b}`));
    }, [props.exampleInfo.tags]);

    useEffect(() => {
        if (props.exampleInfo.exemploID)
            setExampleLink(`${EXAMPLE_BASE_LINK}${props.exampleInfo.exemploID}`);
    }, [props.exampleInfo.exemploID]);

    console.log(props);

    /**
     * 
     * @param {String} className 
     */
    //TODO: put function in global utils
    // function buildResponsiveClassName(className, resolution) {
    //     if (!resolution || resolution === 'xs') return className;

    //     let i = className.indexOf('-');
    //     if (i < 0) return className;

    //     if (['sm','md','lg','xl'].indexOf(resolution) < 0) 
    //         throw new Error("Invalid resolution for ExampleHomepageCard");

    //     let leftSide = className.substr(0, i);
    //     let rightSide = className.substr(i+1);
    //     let newString = `${leftSide}-${resolution}-${rightSide}`;
    //     console.log(newString);
    //     return newString;
    // }

    return (
        <div className={`exampleHomepageCard ${''/*d-none ${buildResponsiveClassName('d-flex', props.minRes)}*/} flex-column m-2 align-items-center text-center`}>
            <Link to={ exampleLink }>
                <img className="exampleLink img-fluid imageDetails mt-4 mb-4" src={ imageLink } alt="Carregando imagem"/>
                <h2 className="exampleNameText mx-1"> 
                    { name } 
                </h2>
                <h4 className="exampleTagsText m-2 mb-4" >
                    { tags }
                </h4> 
            </Link>
        </div>
    );
}