import React,{Component} from 'react';
import './me.css'


import InfoBox from '../../../components/infobox/infobox';

class Me extends Component{

    constructor(){
        super();

        this.state={
            Status:{
                Header:'Status',
                Text:[
                    'Just nu söker jag uppdrag inom Front End-utveckling. Vid sidan om sökningen utvecklar jag mitt företags IOT-system och GroupCaller.'
                ]
            },
            Personality:{
                Header:'Personlighet',
                Text:[
                    'Arbetskamraterna beskriver mig oftast som rolig och lite arbetsmyra (med dålig musiksmak). Jag tycker om effektivitet och värdeskapande tid. Detta gör att jag gärna är strukturerad och förbered. Resultat, humor och mål ligger mig varmt om hjärtat.',
                    'Jag tar alltid mina utmaningar seriöst, oavsett dess natur. Behöver något göras så löser vi det.'
                ]
            },
            Contact:{
                Header:'Kontakt',
                Text:[
                    '+46(0)7 68 65 77 66',
                    'henrik@ralva.se'
                ]
            }
        }
    }


    render(){

        const status=this.state.Status;
        const personality=this.state.Personality;
        const contact=this.state.Contact;
        

        return (
            <div className="page-container">
                <InfoBox infoData={status}></InfoBox>
                <InfoBox infoData={personality}></InfoBox>
                <InfoBox infoData={contact}></InfoBox>
            </div>
        )
    }
}

export default Me