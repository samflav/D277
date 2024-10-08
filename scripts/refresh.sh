#!/bin/bash
cd /home/delta/nginx_image/scripts 
while [ 0 -eq 0 ]
do
  echo "thz buddy" | nc -q5 -l 6969 >> out
  ./pa_git.sh >> out 2>&1
done
