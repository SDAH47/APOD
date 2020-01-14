from flask import Flask, render_template, send_from_directory

w_app = Flask( __name__ )

@w_app.route( '/' )

def index(): 
	return render_template( 'index.html' )

# Resources
@w_app.route( '/css/<path:path>' )

def send_css( path ): 
	return send_from_directory( 'templates/css', path )

@w_app.route( '/<path:path>' )

def send_js( path ): 
	return send_from_directory( 'templates', path )

if __name__ == '__main__': 
	w_app.run(debug=True)