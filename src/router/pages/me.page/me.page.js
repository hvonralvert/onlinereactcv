import React,{Component} from 'react';
import './me.page.css'


import InfoBox from '../../../components/infobox/infobox';

class MePage extends Component{

    constructor(){
        super();

        this.state={
            InfoBoxes:{
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

        this.removeInfoBox = this.removeInfoBox.bind(this);
        this.getKey = this.getKey.bind(this);
        this.InfoBoxes=this.InfoBoxes.bind(this);
    }


    removeInfoBox(box){
        const key=this.getKey(box);
        
        if(key !== undefined){
            delete this.state.InfoBoxes[key]

            this.setState(
                this.state
            )
        }
    }


    getKey(box){
        let Statekey;
       Object.keys(this.state.InfoBoxes).map(key=>{
            const property=this.state.InfoBoxes[key];
            if(property.Header!==undefined && property.Header===box.Header){
                Statekey= key;
            }
        });

        return Statekey;
    }


    /*----------------------------rendsers----------------------*/
    InfoBoxes(removeInfoBox){
        const boxes = Object.keys(this.state.InfoBoxes).map((boxkey,index)=>{
            const BoxData=this.state.InfoBoxes[boxkey];
            return (
                <InfoBox key={index} removeInfoBox={removeInfoBox} BoxData={BoxData}></InfoBox>
            )
        })

        return boxes;
    }


    render(){

        const removeInfoBox=this.removeInfoBox;

        return (
            <div className="page-container centerPos">
                {this.InfoBoxes(removeInfoBox)}
            </div>
        )
    }
}

export default MePage