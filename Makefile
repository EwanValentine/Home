default: all

all: 
	git pull
	forever	start api/server.js
	cd ui && npm run build
