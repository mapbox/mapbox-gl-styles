#!/bin/bash
present=$(pwd)

./render.sh

cd ..

gl-style-spritify dark dark-src/renders/

cd $present
