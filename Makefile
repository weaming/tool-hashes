deploy: build
	surge dist hashes.surge.sh

build:
	yarn build
