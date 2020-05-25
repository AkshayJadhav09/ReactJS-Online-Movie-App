import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/silder';
import PopularMedia from './components/popularMedia';
import MediaContent from './components/mediaContent'

class App extends React.Component {
    render() {
        //console.log()
        return (
            <div>
                <Slider />
                <PopularMedia />
                <MediaContent />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
