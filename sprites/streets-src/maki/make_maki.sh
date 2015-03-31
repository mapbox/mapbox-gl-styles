#!/bin/bash
present=$(pwd)

for w in 11 17
do
    sed -i 's/000000/ffffff/g' present/src/*${w}.svg
done

pngdir="renders"  # PNGs will be created, possibly overwritten, here

function build_pngs {
    # Takes a list of SVG files and renders both 1x and 2x scale PNGs

    for svg in $@; do

        icon=$(basename $svg .svg)

        inkscape \
            --export-dpi=90 \
            --export-png=${pngdir}/${icon}.png \
            $svg > /dev/null

        inkscape \
            --export-dpi=180 \
            --export-png=${pngdir}/${icon}@2x.png \
            $svg > /dev/null
    done
}

# Build lists of all the SVG and PNG files from the icons list
pngs=$(for icon in '*.svg'; do echo -n $pngdir/${icon}-{17,11}.png" "; done)
pngs2x=$(for icon in '*.svg'; do echo -n $pngdir/${icon}-{17,11}@2x.png" "; done)

build_pngs $svgs

# Adds backgrounds to renders
for icon in $(ls $present/renders | sed 's/.*\///g;s/-[0-9].*png//g' | sort | uniq )
do
    echo "${icon}-11.png"
    composite -gravity center -geometry -0-0 renders/${icon}-11.png shape/shape-11.png assets/${icon}-11.png
    echo "${icon}-11@2x.png"
    composite -gravity center -geometry -0-0 renders/${icon}-11@2x.png shape/shape-11@2x.png assets/${icon}-11@2x.png
    echo "${icon}-17.png"
    composite -gravity center -geometry -0-0 renders/${icon}-11.png shape/shape-17.png assets/${icon}-11.png
    echo "${icon}-17@2x.png"
    composite -gravity center -geometry -0-0 renders/${icon}-11@2x.png shape/shape-17@2x.png assets/${icon}-11@2x.png
done

