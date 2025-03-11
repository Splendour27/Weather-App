function setDynamicBackground(weatherMain) {
    let bgUrl = '';

    switch (weatherMain.toLowerCase()) {
        case 'clear':
            bgUrl = 'images/clear.jpg';
            break;
        case 'clouds':                                                              
            bgUrl = 'images/cloud.jpg';
            break;
        case 'rain':
        case 'drizzle':
            bgUrl = 'images/rain.jpg';
            break;
        case 'snow':
            bgUrl = 'images/snow.jpg';
            break;
        case 'thunderstorm':
            bgUrl = 'images/thunder.jpg';
            break;
        case 'mist':
        case 'fog':
        case 'haze':
            bgUrl = 'images/fog.jpg';
            break;
        default:
            bgUrl = 'images/default.jpg';
    }

    document.body.style.backgroundImage = `url('${bgUrl}')`;
}
