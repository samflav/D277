#!/bin/bash
cd /home/delta/pa/
rm -rf staging/
#git pull
cp -r D277/src/ staging/
for FILE in staging/*.html; do
	new=${new%.html}
	sed '/<div id=\"nav-placeholder\">/r staging/assets/nav.html' $FILE > staging/"$new"
	sed '/<div id=\"nav-placeholder\">/d' > staging/"$new"
	rm "$FILE"
	echo "Fixing $new"
done
for FILE in src/cities/*.html; do
	new=${new%.html}
	sed '/<div id=\"nav-placeholder\">/r staging/assets/nav.html' $FILE > staging/"$new"
	sed '/<div id=\"nav-placeholder\">/d' > staging/"$new"
	rm "$FILE"
	echo "Fixing $new"
done
id=`docker ps -aqf "name=webserver"`
docker exec $id rm -rf /var/www/pa/
docker cp staging/ $id:/var/www/pa/

