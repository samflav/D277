#!/bin/bash
cd /home/delta/pa/
rm -rf staging/
git pull
cp -r D277/src/ staging/
for FILE in staging/*.html; do
	new=${FILE%.html}
	echo "$FILE $new"
	sed -i '/<div id=\"nav-placeholder\">/r staging/assets/nav.html' $FILE
	sed -i '/<div id=\"nav-placeholder\">/d' $FILE
	mv $FILE $new
	echo "Fixing $new"
done
for FILE in staging/cities/*.html; do
	new=${FILE%.html}
	echo "$FILE $new"
	sed -i '/<div id=\"nav-placeholder\">/r staging/assets/nav.html' $FILE
	sed -i '/<div id=\"nav-placeholder\">/d' $FILE
	mv $FILE $new
	echo "Fixing $new"
done
id=`docker ps -aqf "name=webserver"`
docker exec $id rm -rf /var/www/pa/
docker cp staging/ $id:/var/www/pa/

