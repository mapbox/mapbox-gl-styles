#!/bin/bash
present=$(pwd)

./maki_dots.sh
./render.sh

cd ..

gl-style-spritify mapbox-streets-boring streets-boring-src/renders/*

# rename circle
sed -i '' 's/circle.sdf/circle/g' ${present}/../mapbox-streets.json
sed -i '' 's/circle.sdf/circle/g' ${present}/../mapbox-streets@2x.json

cd $present
