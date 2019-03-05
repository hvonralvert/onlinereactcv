import React, { Component } from 'react';
import './../../../styles/app.styles.css';
import './other.page.css';

export class OtherPage extends Component {


    constructor() {
        super();

        this.state = {
            PerformanceHitRunning:false,
            Parents: [
                {
                    Name: 'Klas',
                    Age: 76,
                    Money: 123048,
                    City: 'Horsaryd',
                    Children: [
                        {
                            Name: 'Carina',
                            Age: 41,
                            Money: 53244,
                            City: 'Lomma',
                        },
                        {
                            Name: 'Annelie',
                            Age: 36,
                            Money: 69857,
                            City: 'Åkarp',
                        },
                        {
                            Name: 'Andre',
                            Age: 32,
                            Money: 4523,
                            City: 'New York',
                        },
                        {
                            Name: 'Henrik',
                            Age: 32,
                            Money: 87654,
                            City: 'Stockholm',
                        }
                    ]
                },
                {
                    Name: 'Nils-Erik',
                    Age: 81,
                    Money: 3654532,
                    City: 'Horsaryd',
                    Children: [
                        {
                            Name: 'Mats',
                            Age: 47,
                            Money: 398787,
                            City: 'Karlshamn',
                        },
                    ]
                },
                {
                    Name: 'Britt-Inger',
                    Age: 65,
                    Money: 75484,
                    City: 'Horsaryd',
                    Children: [
                        {
                            Name: 'Rebecca',
                            Age: 32,
                            Money: 26534,
                            City: 'Oslo',
                        },
                        {
                            Name: 'Morgan',
                            Age: 41,
                            Money: 9857,
                            City: 'Asarum',
                        },
                        {
                            Name: 'Karl',
                            Age: 45,
                            Money: 54761,
                            City: 'Horsaryd',
                        }
                    ]
                },
                {
                    Name: 'Bo',
                    Age: 62,
                    Money: 56487658,
                    City: 'Vellinge',
                    Children: [
                        {
                            Name: 'Erik',
                            Age: 31,
                            Money: 98657,
                            City: 'Vellinge',
                        },
                        {
                            Name: 'Ola',
                            Age: 27,
                            Money: 54687,
                            City: 'Trelleborg',
                        }
                    ]
                },
                {
                    Name: 'Henrik',
                    Age: 33,
                    Money: 453233,
                    City: 'Stockholm'
                },
            ]
        }

        this.parents = this.parents.bind(this);
        this.PerformanceButtonClass=this.PerformanceButtonClass.bind(this);
        this.runPerformanceHit=this.runPerformanceHit.bind(this);
    }

    /*--------------------------- performance hits ----------------------*/
    runPerformanceHit(){

        this.setState({
            PerformanceHitRunning:true
        })

        this.runLoops().then(res=>{
            this.setState({
                PerformanceHitRunning:false
            })
        })
    }


    async runLoops() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                var tot = 0;

                for (var i = 0; i < 1000000000; i++) {
                    tot += i;
                }

                res(tot);
            },100)
        })
    }



    PerformanceButtonClass(){
        const buttnClasses={
            'other-button':true,
            'other-button-running':this.state.PerformanceHitRunning
        }

        const classString = Object.keys(buttnClasses).map(classKey=>{return buttnClasses[classKey]?classKey:undefined}).filter(buttClass=>{return buttClass}).join(' ');

        console.log(classString)
        return classString;
    }

    /*---------------------------- graphical parts-----------------------*/
    parents() {

        const parents = this.state.Parents;

        const parentRow = parents.map((parent, index) => {
            return (
                <tr key={index}>
                    <td className="parent">

                        <div className="parent-header">
                            <div className="parent-name">
                                {parent.Name}
                            </div>
                        </div>

                        {parent.Children &&
                            <div className="children-container">
                                {this.children(parent)}
                            </div>
                        }
                    </td>
                    <td>
                        {parent.Money}
                    </td>
                </tr>
            )
        })

        console.log(parentRow)

        return (
            <table className="parents-container">
                <tr>
                    <th>Parent</th>
                    <th>Money</th>
                </tr>
                {parentRow}
            </table>
        )
    }


    children(parent) {

        const children = parent.Children;

        const childRows = children.map((child, index) => {
            return (
                <li key={index} rocking="no" className="child-name">
                    {child.Name}
                </li>
            )
        })

        return (
            <ul>
                {childRows}
            </ul>
        )
    }


    render() {
        const parents = this.parents;
        const runPerformanceHit=this.runPerformanceHit;
        const PerformanceButtonClass=this.PerformanceButtonClass;

        return (
            <div className="page-container centerPos">
            <div onClick={()=>runPerformanceHit()} className={PerformanceButtonClass()}>Kör profrmance hit!</div>
                {parents()}
            </div>
        )
    }
}