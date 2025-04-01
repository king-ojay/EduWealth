#!/bin/bash

if [ "$1" == "some_value" ]; then
  echo "Please provide a commit message"
  exit
fi

git add .
git commit -m "$1"
git push origin main