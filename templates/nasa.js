class Nasa{
    constructor(){
        this.api = 'GdWau7tPdPNkucMLX5xgTIDTL9cELo21FGPAdQmP';
    }

    async getData(){
        const getResponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.api}`);

        const getData = await getResponse.json();

        return {getData}
    }
}