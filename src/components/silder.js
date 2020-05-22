import React from 'react';
import Axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class Slider extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        const response = await Axios.get("http://staging.connectingdotsinfotech.com:8080/firestixAPI_dev_2/api/v2/media/fetchAllMediaSlider")
            .then((response) => {
                //console.log(response.data)
                this.setState({
                    data: response.data
                })
            })
    }

    render() {
        const { data } = this.state;
        return (
            <>
                <div>
                    <Carousel autoPlay>
                        {this.state.data.map(({ description,  id, landscapePosterId }) => {
                            return (
                                <img
                                    key={id}
                                    alt={description}
                                    src={`http://staging.connectingdotsinfotech.com:8080/firestixAPI_dev_2/api/v1/files/download/${landscapePosterId}`}
                                />
                            );
                        })}
                    </Carousel>
                </div>
            </>
        )
    }
}

export default Slider;