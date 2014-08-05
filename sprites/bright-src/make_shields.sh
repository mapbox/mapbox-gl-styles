#!/bin/bash

motorway='#ffffff'

for reflen in {1..6}; do
    width=$(($reflen*5+14))
    height=18
    r_width=$(($reflen*10+28))
    r_height=36
    convert -type TrueColorMatte -size ${width}x$height xc:none \
        -fill $motorway -stroke '#888888' -strokewidth 1\
        -draw "roundRectangle 0,0 $(($width-1)),$(($height-1)), 3,3" \
        motorway_$reflen.png
    convert -type TrueColorMatte -size ${r_width}x$r_height xc:none \
        -fill $motorway -stroke '#888888' -strokewidth 2 \
        -draw "roundRectangle 0,0 $(($r_width-1)),$(($r_height-1)), 6,6" \
        motorway_$reflen@2x.png
done
