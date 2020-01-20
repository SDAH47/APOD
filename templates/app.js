// Setting the date to now date.
var dateContent = document.querySelector( 'input.date' ),
date = new Date(),
month = date.getMonth() + 1;

dateContent.value = date.getFullYear() + '-' + ( month < 10 ? '0' + month : month ) + '-' + ( date.getDate() - 1 );

var titleV;

function load() {
	const nasa = new Nasa;
	const titleUI = title = document.querySelector('#title');
	const copyrightUI = document.querySelector('#copyright');
	const dateUI = document.querySelector('#date');
	const explanationUI = document.querySelector('#explanation');
	const imgUI = document.querySelector('#nasaImg');
	
	var val = new Date(date.getFullYear() + '-' + ( month < 10 ? '0' + month : month ) + '-' + ( date.getDate() ));
	
	var c_date = new Date( dateContent.value ) < val;
	
	if( c_date ) {
		const dataJSON = nasa.getData( dateContent.value )
		
		dataJSON.then(data => {data
			titleUI.innerText = titleV =data.title;
			copyrightUI.innerText=data.copyright;
			dateUI.innerText = data.date;
			explanationUI.innerText = content = data.explanation;
			
			var req = fetch( 'http://localhost:5000/image/' + btoa( data.url ) );
			
			imgUI.src = url = data.url;
		});
		
		document.querySelector( 'div#info' ).style.display = "block";
	} else { 
		document.querySelector( 'div.error' ).innerHTML = '404 Error! The date is in future!';
		document.querySelector( 'div#info' ).style.display = "none";
	}
}

function toDataURL(url, callback) {
	return fetch(url)
	.then(response => response.blob())
	.then(blob => new Promise((resolve, reject) => {
	  const reader = new FileReader()
	  reader.onloadend = () => resolve(reader.result)
	  reader.onerror = reject
	  reader.readAsDataURL(blob)
	}))
}

async function downloadPDF() {
	alert( 'If the image is not clear in the PDF Please wait for some time to make it be loaded in the background.' )
	
	var res = await toDataURL('img');
	
	var doc = new jsPDF();
    doc.setFont("courier");
    var elementHandler = {
      
    };
    var source = document.createElement( 'div' );
    
    var title = document.querySelector( '#title' ),
    subText = document.querySelector( '#subText' ),
    p = document.querySelector( 'p' );
    
    source.appendChild( title.cloneNode( true ) );
    source.appendChild( subText.cloneNode( true ) );
    source.appendChild( p.cloneNode( true ) );
    
    doc.addImage( res, 'JPEG', 20, 100, 150, 150 );
    
    doc.fromHTML(
      source,
      15,
      0.5,
      {
        'width': 180,'elementHandlers': elementHandler
      });
        doc.save(`${titleV}.pdf`);
}
