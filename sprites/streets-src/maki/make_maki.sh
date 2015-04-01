#!/bin/bash
present=$(pwd)
svgdir="src"  # SVGs should already be here
pngdir="renders"  # PNGs will be created, possibly overwritten, here

for w in 11 17
do
    sed -i.backup 's/000000/ffffff/g' ${present}/src/*${w}.svg
done

# render pngs from from svg
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

build_pngs $svgs

# Add backgrounds to icons
for icon in $(ls ${present}/renders | sed 's/.*\///g;s/-[0-9].*png//g' | sort | uniq )
do
    echo "${icon}-11.png"
    composite -gravity center -geometry -0-0 ${present}/renders/${icon}-11.png ${present}/shape/shape-11.png ${present}/assets/${icon}-11.png
    echo "${icon}-11@2x.png"
    composite -gravity center -geometry -0-0 ${present}/renders/${icon}-11@2x.png ${present}/shape/shape-11@2x.png ${present}/assets/${icon}-11@2x.png
    echo "${icon}-17.png"
    composite -gravity center -geometry -0-0 ${present}/renders/${icon}-17.png ${present}/shape/shape-17.png ${present}/assets/${icon}-17.png
    echo "${icon}-17@2x.png"
    composite -gravity center -geometry -0-0 ${present}/renders/${icon}-17@2x.png ${present}/shape/shape-17@2x.png ${present}/assets/${icon}-17@2x.png
done

# Reverse color adjustments
for w in 11 17
do
    sed -i 's/ffffff/000000/g' ${present}/src/*${w}.svg
done

