const nasa = new Nasa;
const titleUI = document.querySelector('#title');
const copyrightUI = document.querySelector('#copyright');
const dateUI = document.querySelector('#date');
const explanationUI = document.querySelector('#explanation');
const imgUI = document.querySelector('#nasaImg');
let apiData="";
nasa.getData().then(data =>{
    apiData=data.getData;
    titleUI.innerText = title =apiData.title;
    copyrightUI.innerText=apiData.copyright;
    dateUI.innerText = apiData.date;
    explanationUI.innerText = content = apiData.explanation;
    imgUI.src = url = apiData.url;
});