import React from 'react';

class TextBox extends React.Componenet {
    constructor (props) {
                super(props);
                this,state = {
                    test: ''
                };
                this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
        }
        handleTextBoxChange(e) {
            this.setState({
                text: e.target.value
            })
            console.log(e.target.value)
        }
    
    render () {
        const { text } = this.props;
        return (
        <inoput placeholder ="I'm a little trxt box" onChange={this.handleTextBoxChange}/>
        )
    }
}


export default TextBox