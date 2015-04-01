#!/bin/bash
set -e -u

# Usage:
#   ./render.sh [png]

# Config
svgdir="src"  # SVGs should already be here
pngdir="renders"  # PNGs will be created, possibly overwritten, here
present=$(pwd)

function build_pngs {
    # Takes a list of SVG files and renders both 1x and 2x scale PNGs

    for svg in $@; do

        icon=$(basename $svg .svg)

        inkscape -z \
            --export-dpi=90 \
            --export-png=${present}/${pngdir}/${icon}.png \
            $svg > /dev/null

        inkscape -z \
            --export-dpi=180 \
            --export-png=${present}/${pngdir}/${icon}@2x.png \
            $svg > /dev/null
    done
}

# Get a list of all the icon names from icons in the folder
icons=$(ls ${present}/$svgdir/*-11.svg \
    | sed s/-11*.svg//g \
    | sed s:${present}/$svgdir/::g)

# Build lists of all the SVG and PNG files from the icons list
svgs=$(for icon in $icons; do echo -n ${present}/$svgdir/${icon}-{17,11}.svg" "; done)
pngs=$(for icon in $icons; do echo -n ${present}/$pngdir/${icon}-{17,11}.png" "; done)
pngs2x=$(for icon in $icons; do echo -n ${present}/$pngdir/${icon}-{17,11}@2x.png" "; done)

case $@ in
    png | pngs )
        build_pngs $svgs
        ;;
    csv )
        build_csv $icons
        ;;
    debug )
        # Prints out all of the icon and file lists for debugging
        echo -e "\nIcons:"
        echo $icons
        echo -e "\nSVGs:"
        echo $svgs
        echo -e "\nPNGs:"
        echo $pngs
        echo -e "\nPNGs @2x:"
        echo $pngs2x
        ;;
    * )
        # By default we build the PNGs, but not the CSV or debug output
        build_pngs $svgs
        ;;
esac
