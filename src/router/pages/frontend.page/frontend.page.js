import React, { Component } from 'react';
import InfoBox from '../../../components/infobox/infobox';

class FrontEndPage extends Component {

    constructor(){
        super();

        this.state={
            History:{
                Header:'Front End',
                Text:[
                    'Jag har lanserat flera olika sidor och diverse grafiska system genom min karriär. Allt ifrån SPA, hemsidor och system inom industri för tidsrapportering och maskinövervakning.',
                    'De senaste åren har fokus varit på TypeScript / Javascript och då med ramverk såsom Angular och Ionic. Jag har då arbetat i mitt eget företag och utvecklat ett IOT system. Först prototypen var i Angular.js med Apache server (MySQL, PHP) men sen gick jag över till Angular 2+ och Googles firebase (Node.js). Under min tid i industrin så jobbade jag främst i VBA och vanlig HTML.',
                    'Samtliga projekt nedan har jag utvecklat på egenhand från start till mål. Kolla gärna information om detta online-cv som jag också har byggt från grunden.'
                ]
            }
        }
    }

    render() {
        const history=this.state.History;

        return (
            <div className="page-container">
                <InfoBox BoxData={history}></InfoBox>
            </div>
        )
    }
}
export default FrontEndPage
