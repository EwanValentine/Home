default: all

all: 
	git pull
	cd api && forever start server.js
	cd ..
	cd ui && npm install && npm run build
