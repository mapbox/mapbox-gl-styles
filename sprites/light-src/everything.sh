#!/bin/bash
present=$(pwd)

./render.sh

cd ..

gl-style-spritify light light-src/renders/

cd $present
