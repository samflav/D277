#!/bin/bash
cd /home/delta/pa/D277/
git pull
for FILE in src/*.html; do
	sed -i '/<div id=\"nav-placeholder\">/r src/assets/nav.html' $FILE
	sed -i '/<div id=\"nav-placeholder\">/d' $FILE
	echo "Fixing $FILE"
done
for FILE in src/cities/*.html; do
	sed -i '/<div id=\"nav-placeholder\">/r src/assets/nav.html' $FILE
	sed -i '/<div id=\"nav-placeholder\">/d' $FILE
	echo "Fixing $FILE"
done
id=`docker ps -aqf "name=webserver"`
docker exec $id rm -rf /var/www/pa/
docker cp ./src/ $id:/var/www/pa/

