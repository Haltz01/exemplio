    import React, {useState, useEffect} from 'react';
    import Navbar from '../../components/Navbar';

    import './NewExample.css';
    import Footer from '../../components/Footer';
    import TimelineItemList from './components/TimelineItemList';

    import api from '../../services/api';

    export default function NewExample() {

        //Form states
        const [imageFileName, setImageFileName] = useState('Selecionar Imagem');
        const [timelineItems, setTimelineItems] = useState([]);
        
        const [serverErrCode, setServerErrCode] = useState(''); //Error code
        const [invalidStates, setInvalidStates] = useState({});

        const ERRROR_MESSAGES = {
            ER_DUP_ENTRY: 'Já existe alguém cadastrado com esse nome',
            ER_UNAUTHORIZED: 'Senha incorreta', 
        }

        
        useEffect(() => {
            const defaultInvalidStates = {
                firstname: false,
                lastname: false,
                placeoforigin: false,
                briefing: false,
                podcastlink: false,
                imagelink: false,
                passwd: false,
            };

            console.log('Errorcode: ', serverErrCode)
            
            switch(serverErrCode) {
                case 'ER_DUP_ENTRY':
                        setInvalidStates({
                            ...defaultInvalidStates,
                            firstname: true,
                            lastname: true,
                        });
                    break;
                case 'ER_UNAUTHORIZED':
                        setInvalidStates({
                            ...defaultInvalidStates,
                            passwd: true,
                        });
                        break;
                default:
                    setInvalidStates(defaultInvalidStates)
                    break;
                    
            }
        }, [serverErrCode]);

        async function enviarExemplo(formData) {
            function concatTags(tags) { //Here, tags are separated by commas
                const match = tags.match(/((?:\b\s?[\wáéíóúãẽĩõũâêîôûàèìòù]+)+)/gi)
                // console.log(tags)    
                if (match && match.length > 0) {
                    return match.reduce((a,b)=>`${a}|${b}`);
                }
                return 'Sem tags';
            }

            async function encodeImage(imageFile) {
                return await new Promise((res, rej) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(imageFile);
                    reader.onload = () => res(reader.result);
                    reader.onerror = (error) => rej(error);
                });
            }

            const data = 
            {
                id: (formData[1].value + formData[2].value).toLowerCase(),
                firstname: formData[1].value,
                lastname: formData[2].value,
                placeoforigin: formData[3].value,
                tags: concatTags(formData[4].value),
                briefing: formData[5].value,
                base64image: await encodeImage(formData[7].files[0]),
                podcastlink: formData[6].value,
                insertiondate:formData[8].value,
                timelineinfo: timelineItems,
                passwd: formData[formData.length-2].value
            }
            console.log(formData)
            console.log(data)
            try {
                await api.post('/exemplos/insert/new', data,
                {
                    headers: { 'Content-Type': 'application/json' }
                });
                setServerErrCode('OK');
                alert('Cadastro realizado com sucesso!');
                //TODO: mudar tela de sucesso   
            } catch (error) {
                console.dir(error);
                setServerErrCode(error.response.data.errorCode);
            }
        };

        return (
            <React.Fragment>
                <Navbar/>
                <div className="newExample-form-div container my-3 p-5">
                    <div className="row">
                        <div className="col mx-auto">
                            <h1 className="text-center">Inserir novo exemplo</h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xg-6 mx-auto">

                        <form className="p-3 p-xs-4 p-md-5 border mx-auto" onSubmit={(e)=>{e.preventDefault(); enviarExemplo(e.target.elements); return false;}}>
                            <fieldset>
                                <legend> Informações Básicas </legend>
                                <div className="row no-gutters">   
                                    <div className="col-12 col-md mr-1">
                                        <input required className={`form-control mr-1 px-2 mt-1 ${invalidStates.firstname?'is-invalid':''}`} name="firstname" placeholder="Nome"/>
                                        <div className="invalid-feedback">{ERRROR_MESSAGES[serverErrCode]}</div>
                                    </div>
                                    <div className="col-12 col-md">
                                        <input required className={`form-control mr-1 px-2 mt-1 ${invalidStates.lastname?'is-invalid':''}`} name="lastname" placeholder="Sobrenome"/>
                                        <div className="invalid-feedback">{ERRROR_MESSAGES[serverErrCode]}</div>
                                    </div>
                                </div>
                                <div className="row no-gutters">   
                                    <div className="col-12 col-md-5 pr-md-1">
                                        <input required className="form-control px-2 mt-1" name="placeOfOrigin" placeholder="Cidade de origem"/>
                                    </div>
                                    <div className="col-12 col-md-7">
                                        <input required className="form-control px-2 mt-1" name="tags" placeholder="Tags (separadas por ,)"/>
                                    </div>
                                </div>
                                <textarea id="briefing" className="form-control px-2 mt-1 w-100" placeholder="Briefing"/>
                                <input required className="form-control px-2 mt-1" name="podcastlink" placeholder="Link do podcast"/>
                                <div className="custom-file mt-1">
                                    <input required id="custom-file" className="custom-file-input px-2 " type="file" onChange={(e)=>{setImageFileName(e.target.value.split('\\')[2])}}/>
                                    <label className="custom-file-label text-muted" htmlFor="custom-file"> {imageFileName} </label>
                                </div>
                                <label htmlFor="example-date-input" className="mt-4 text-muted">Data de inserção</label>
                                <input required id="example-date-input" className="form-control text-muted" type="date" defaultValue={
                                    (() => {
                                        const localDateTime = new Date(Date.now());
                                        const UTCDateTimenew = new Date(localDateTime.toISOString().replace('Z',''));
                                        const offset = UTCDateTimenew - localDateTime;
                                        const exibitionString = new Date(localDateTime - offset).toISOString().slice(0,10);
                                        console.log(exibitionString)
                                        return exibitionString;
                                    })()
                                }/>
                                <br/><br/>
                            </fieldset>
                            <fieldset>
                                <legend> Timeline </legend>
                                <input    id="title" className="form-control px-2 mt-1 w-100" type="text" placeholder="Título"/>
                                <textarea id="description" className="form-control px-2 mt-1 w-100" placeholder="Descrição"/>
                                <input type="button" value="Adicionar" className="form-control mt-1 bg-success text-white" onClick={()=>{setTimelineItems([...timelineItems, {title:document.getElementById('title').value, description:document.getElementById('description').value}])}}/>
                                <br/>
                                {
                                    (timelineItems.length > 0) ?
                                    (
                                        <h5>Itens da timeline:</h5>
                                    ) : ''
                                }
                                <TimelineItemList name="timelineItemList" itemList={timelineItems} setTimelineItems={setTimelineItems}/>
                                <br/><br/>
                                <input type="password" className={`form-control px-2 mt-1 ${invalidStates.passwd?'is-invalid':''}`} placeholder="Senha"/>
                                <div className="invalid-feedback">{ERRROR_MESSAGES[serverErrCode]}</div>
                                <input type="submit" className="form-control px-2 mt-1" value="Enviar"></input>
                            </fieldset>
                        </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }