import React, { Component } from 'react';

import './infobox.css';

class InfoBox extends Component {

    Paragraph(props) {
        const paragraphs = props.paragraphs.map((paragraph, index) => {
            return (
                <div key={index} className="infobox-text">{paragraph}</div>
            )
        });

        return (
            paragraphs
        )
    }

    render() {
        const header = this.props.infoData.Header;
        const paragraphs = this.props.infoData.Text;

        return (
            <div className="infobox-container">
                <div className="infobox-header">
                    {header}
                </div>
                <div>
                    <this.Paragraph paragraphs={paragraphs}></this.Paragraph>

                </div>
            </div>
        )
    }
}

export default InfoBox
