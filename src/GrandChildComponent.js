import React from 'react';

class GrandChildComponent extends React.Component{
    
    render() {
        console.log('this.props', this.props);
        return (
            <div>
                <p>{this.props.state1}</p>
                <p>{this.props.state2}</p>
                <p>{this.props.greet}</p>
            </div>
        )
    }
}

export default GrandChildComponent;