all: build

build: index.coffee
	@coffee -bc index.coffee

clean:
	rm -f index.js

.PHONY: all build clean
