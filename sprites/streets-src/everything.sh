#!/bin/bash
present=$(pwd)

./maki_dots.sh
./render.sh

cd ..

gl-style-spritify mapbox-streets streets-src/renders/*

cd $present
