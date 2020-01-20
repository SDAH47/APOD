from urllib import request
import base64
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

@w_app.route( '/image/<string:url>' )

def image(url): 
	print()
	request.urlretrieve( base64.b64decode( url ).decode( 'utf-8' ), 'image.jpg' )
	return "THIS"

@w_app.route( '/img' )

def imagem(): 
	return send_from_directory( '', filename = 'image.jpg' )

if __name__ == '__main__': 
	w_app.run(debug=True)