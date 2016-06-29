import React from 'react';
import axios from 'axios';

class Logo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {color: "#00a985"};
    }

    loadFromServer() {
        axios.get(this.props.url).then((response) => {
            var color = "#00a985";
            if (response.data.cpu > 50) {
              color = "#FFa985"
            }
            if (response.data.cpu < 20) {
              color = "#00a9FF"
            }
            this.setState({data: response.data, color: color});
        });
    }

    componentDidMount() {
        this.loadFromServer();
        this.interval = setInterval(this.loadFromServer.bind(this), this.props.pollInterval);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
        return (<div className="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 570 720">
<path fill="#000" d="m158.38,1.6562c-3.6193,0.11232-7.5172,1.4493-11.938,4.9375-10.83-4.1763-21.33-5.6271-30.72,2.8751-14.5-1.8808-19.212,2.0002-22.782,6.5312-3.183-0.066-23.819-3.272-33.282,10.844-23.781-2.814-31.297,13.988-22.781,29.656-4.8569,7.519-9.8895,14.947,1.4688,29.281-4.018,7.9835-1.5274,16.644,7.9375,27.125-2.4979,11.223,2.4121,19.141,11.219,25.312-1.6471,15.358,14.084,24.287,18.781,27.469,1.8037,8.9487,5.5629,17.393,23.531,22.062,2.9632,13.336,13.762,15.639,24.219,18.438-34.562,20.09-64.201,46.523-64,111.38l-5.0625,9.0312c-39.63,24.1-75.285,101.56-19.53,164.52,3.6419,19.708,9.7496,33.864,15.188,49.531,8.1338,63.131,61.218,92.692,75.219,96.188,20.517,15.628,42.368,30.457,71.938,40.844,27.875,28.749,58.074,39.706,88.438,39.688,0.44515-0.00028,0.89853,0.005,1.3438,0,30.364,0.0189,60.562-10.938,88.438-39.688,29.569-10.387,51.421-25.216,71.938-40.844,14.001-3.4959,67.085-33.057,75.219-96.188,5.4379-15.667,11.546-29.823,15.188-49.531,55.754-62.965,20.1-140.43-19.531-164.53l-5.07-9.03c0.20067-64.852-29.438-91.285-64-111.38,10.457-2.7984,21.256-5.1014,24.219-18.438,17.968-4.6698,21.728-13.114,23.531-22.062,4.6978-3.1813,20.428-12.111,18.781-27.469,8.8067-6.1716,13.717-14.09,11.219-25.312,9.4649-10.481,11.956-19.141,7.9375-27.125,11.36-14.328,6.32-21.756,1.47-29.275,8.51-15.668,1-32.47-22.79-29.656-9.46-14.116-30.09-10.91-33.28-10.844-3.57-4.531-8.28-8.412-22.78-6.5312-9.39-8.5022-19.89-7.0514-30.72-2.875-12.86-10.148-21.37-2.0133-31.09,1.0624-15.57-5.0877-19.13,1.881-26.78,4.7188-16.98-3.5881-22.14,4.224-30.28,12.469l-9.4688-0.1875c-25.611,15.093-38.334,45.826-42.844,61.625-4.5121-15.802-17.206-46.535-42.812-61.625l-9.4688,0.1875c-8.15-8.245-13.31-16.057-30.29-12.469-7.65-2.8378-11.2-9.8065-26.78-4.7188-6.3797-2.0185-12.247-6.2144-19.156-6z"/>
<path fill="#75a928" d="m107.39,68.056c67.948,35.031,107.45,63.369,129.09,87.504-11.082,44.418-68.896,46.445-90.036,45.199,4.3284-2.0147,7.9399-4.4278,9.2205-8.1357-5.3045-3.7698-24.113-0.39719-37.244-7.7742,5.0441-1.045,7.4035-2.063,9.7629-5.7854-12.406-3.9567-25.769-7.3664-33.628-13.921,4.2413,0.0524,8.2012,0.9488,13.74-2.8927-11.112-5.9882-22.969-10.734-32.181-19.887,5.7452-0.14063,11.939-0.0568,13.74-2.1695-10.17-6.3007-18.751-13.308-25.854-20.972,8.04,0.97052,11.435,0.13478,13.379-1.2656-7.6878-7.8742-17.418-14.523-22.057-24.226,5.9696,2.0575,11.431,2.8451,15.368-0.1808-2.6124-5.8935-13.805-9.3696-20.249-23.142,6.2844,0.60938,12.95,1.3711,14.283,0-2.917-11.884-7.922-18.565-12.831-25.487,13.45-0.2,33.828,0.052,32.905-1.085l-8.3165-8.4973c13.138-3.5372,26.581,0.56816,36.34,3.6159,4.3819-3.4577-0.0776-7.83-5.4238-12.294,11.165,1.4906,21.254,4.0574,30.373,7.5934,4.8724-4.3993-3.1639-8.7987-7.051-13.198,17.249,3.2726,24.557,7.8707,31.82,12.475,5.2694-5.0508,0.30166-9.3433-3.2543-13.74,13.006,4.817,19.705,11.036,26.758,17.175,2.3912-3.2271,6.0749-5.5924,1.6272-13.379,9.2342,5.3227,16.189,11.595,21.334,18.622,5.7134-3.6379,3.4039-8.613,3.4351-13.198,9.5966,7.8065,15.687,16.114,23.142,24.226,1.5017-1.0934,2.8166-4.8017,3.9775-10.667,22.895,22.212,55.246,78.158,8.3165,100.34-39.94-32.94-87.64-56.883-140.5-74.844z"/>
<path fill="#75a928" d="M467.92,68.056c-67.94,35.034-107.44,63.364-129.08,87.504,11.082,44.418,68.896,46.445,90.036,45.199-4.3284-2.0147-7.9399-4.4278-9.2205-8.1357,5.3045-3.7698,24.113-0.39719,37.244-7.7742-5.0441-1.045-7.4035-2.063-9.7629-5.7854,12.406-3.9567,25.769-7.3664,33.628-13.921-4.2413,0.0524-8.2012,0.9488-13.74-2.8927,11.112-5.9882,22.969-10.734,32.181-19.887-5.7452-0.14063-11.939-0.0568-13.74-2.1695,10.17-6.3007,18.751-13.308,25.854-20.972-8.04,0.97052-11.435,0.13478-13.379-1.2656,7.6878-7.8742,17.418-14.523,22.057-24.226-5.9696,2.0575-11.431,2.8451-15.368-0.1808,2.6124-5.8935,13.805-9.3696,20.249-23.142-6.2844,0.60938-12.95,1.3711-14.283,0,2.9223-11.889,7.9275-18.57,12.836-25.492-13.45-0.19973-33.828,0.05235-32.905-1.0848l8.3165-8.4973c-13.138-3.5372-26.581,0.56816-36.34,3.6159-4.3819-3.4577,0.0776-7.83,5.4238-12.294-11.165,1.4906-21.254,4.0574-30.373,7.5934-4.8724-4.3993,3.1639-8.7987,7.051-13.198-17.249,3.2726-24.557,7.8707-31.82,12.475-5.2694-5.0508-0.30166-9.3433,3.2543-13.74-13.006,4.817-19.705,11.036-26.758,17.175-2.3912-3.2271-6.0749-5.5924-1.6272-13.379-9.2342,5.3227-16.189,11.595-21.334,18.622-5.7134-3.6379-3.4039-8.613-3.4351-13.198-9.5966,7.8065-15.687,16.114-23.142,24.226-1.5017-1.0934-2.8166-4.8017-3.9775-10.667-22.895,22.212-55.246,78.158-8.3165,100.34,39.919-32.947,87.616-56.888,140.48-74.849z"/>
<path fill={ this.state.color } d="m365.2,521.85a71.956,66.532,0,1,1,-143.91,0,71.956,66.532,0,1,1,143.91,0z" transform="matrix(1.131107,0,0,1.1280497,-43.139135,-68.310983)"/>
<path fill={ this.state.color } d="m262.84,276.65a61.875,28.125,0,1,1,-123.75,0,61.875,28.125,0,1,1,123.75,0z" transform="matrix(0.76741684,-1.1613112,2.171115,1.4224368,-560.88858,217.68859)"/>
<path fill={ this.state.color } d="m262.84,276.65a61.875,28.125,0,1,1,-123.75,0,61.875,28.125,0,1,1,123.75,0z" transform="matrix(-0.76741684,-1.1613112,-2.171115,1.4224368,1134.8288,213.68859)"/>
<path fill={ this.state.color } d="M72.91,342.09c36.41-9.76,12.292,150.63-17.333,137.47-32.587-26.21-43.083-102.97,17.333-137.47z"/>
<path fill={ this.state.color } d="m493.68,340.09c-36.414-9.7569-12.292,150.64,17.333,137.48,32.587-26.213,43.083-102.98-17.333-137.48z"/>
<path fill={ this.state.color } d="m369.97,220.65c62.835-10.61,115.12,26.722,113.01,94.858-2.0669,26.121-136.16-90.969-113.01-94.858z"/>
<path fill={ this.state.color } d="M196.36,218.65c-62.84-10.61-115.12,26.73-113.01,94.86,2.067,26.12,136.16-90.97,113.01-94.86z"/>
<path fill={ this.state.color } d="m286.62,202.76c-37.503-0.97548-73.495,27.834-73.582,44.544-0.10462,20.304,29.651,41.093,73.837,41.62,45.123,0.32321,73.916-16.64,74.061-37.594,0.16484-23.74-41.039-48.937-74.317-48.571z"/>
<path fill={ this.state.color } d="m288.91,619.12c32.697-1.4271,76.571,10.532,76.657,26.396,0.5427,15.405-39.79,50.211-78.826,49.538-40.427,1.7439-80.069-33.116-79.55-45.199-0.60506-17.716,49.226-31.548,81.719-30.735z"/>
<path fill={ this.state.color } d="m168.14,525.1c23.279,28.046,33.891,77.319,14.464,91.844-18.379,11.088-63.012,6.5216-94.736-39.052-21.395-38.242-18.638-77.157-3.6159-88.589,22.464-13.684,57.173,4.799,83.889,35.797z"/>
<path fill={ this.state.color } d="m405.02,516.21c-25.187,29.502-39.212,83.31-20.838,100.64,17.568,13.464,64.729,11.582,99.566-36.756,25.296-32.465,16.82-86.682,2.3708-101.08-21.464-16.602-52.277,4.6449-81.099,37.188z"/>
</svg></div>);
    }
}

export default Logo;