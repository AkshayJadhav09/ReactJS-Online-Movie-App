import React from 'react';
import Axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BasicFilm from 'react-film';
import './style.css';


class PopularMedia extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        const response = await Axios.get("http://staging.connectingdotsinfotech.com:8080/firestixAPI_dev_2/api/v2/media/getHomeScreenMediaContentPopularAndUICategory")
            .then((response) => {
                //console.log(response.data)
                this.setState({
                    data: response.data.popularMediaContent
                })
            })
    }

    render() {
        const { data } = this.state;
        return (
            <>
                <BasicFilm height={326}>
                    {this.state.data.map(({ description, id, portraitPosterId }) => {
                        return (
                            <img
                                key={id}
                                alt={description}
                                src={`http://staging.connectingdotsinfotech.com:8080/firestixAPI_dev_2/api/v1/files/download/${portraitPosterId}`}
                                style={{ margin: '10px' }}
                            />
                        );
                    })}
                </BasicFilm>
            </>
        )
    }
}
export default PopularMedia;
