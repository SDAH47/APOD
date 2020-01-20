class Nasa{
    constructor(){
        this.api = 'GdWau7tPdPNkucMLX5xgTIDTL9cELo21FGPAdQmP';
    }

    async getData( date ){
	    console.log(date);//https://api.nasa.gov/planetary/apod/direct?date=${date}&api_key=${this.api}
        const getResponse = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${date}&end_date=${date}&api_key=GdWau7tPdPNkucMLX5xgTIDTL9cELo21FGPAdQmP`);
	   var getData = await getResponse.json();
	   
	   return getData[ 0 ];
    }
}