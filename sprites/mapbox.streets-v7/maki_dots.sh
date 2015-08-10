#!/bin/bash

# Usage
# Run the command from the streets-src directory
# To change colors see line 14

present=$(pwd)
src="_maki_src"  # SVGs should already be here
render="renders"  # PNGs will be created, possibly overwritten, here
shapesrc="_maki_shapes_src"
shapesrender="maki_shapes"
count=0

declare -a categories=(dining education general health outdoors transit) # icon categories
declare -a colors=(ab9483 b5a462 a9a199 b28b8b 7e9a4c 9c8ea4) # colors correspond to categories

# For each category...
for c in ${categories[@]}
do
    # Adjust icon fill colors
    for w in 11 15
    do
        sed -i '' 's/fill:#000000/fill:#ffffff/g' ${present}/${src}/${c}/*${w}.svg
    done

    # render maki pngs from from svg
    function build_maki_pngs {
        # Takes a list of SVG files and renders both 1x and 2x scale PNGs

        for svg in $@; do

            icon=$(basename $svg .svg)

            inkscape -z \
                --export-dpi=90 \
                --export-png=${present}/${render}/${c}/${icon}.png \
                $svg > /dev/null

            inkscape -z \
                --export-dpi=180 \
                --export-png=${present}/${render}/${c}/${icon}@2x.png \
                $svg > /dev/null
        done
    }

    # Get a list of all the maki icon names from svgs in the src folder
    svgs=$(ls ${present}/${src}/${c}/*.svg)

    build_maki_pngs $svgs

    # render shape pngs from svg
    function build_shape_pngs {
        # Takes a list of SVG files and renders both 1x and 2x scale PNGs

        for shapesvg in $@; do
            icon=$(basename $shapesvg .svg)

            inkscape -z \
                --export-dpi=90 \
                --export-png=${present}/${shapesrender}/${icon}.png \
                $shapesvg > /dev/null

            inkscape -z \
                --export-dpi=180 \
                --export-png=${present}/${shapesrender}/${icon}@2x.png \
                $shapesvg > /dev/null
        done
    }

    # Adjust shape colors
    for w in 11 15
    do
        sed -i '' s/fill:#000000/fill:#${colors[count]}/g ${present}/${shapesrc}/*${w}.svg
    done

    # Get a list of all the shape names from shapes in the folder
    shapesvgs=$(ls ${present}/${shapesrc}/*.svg)

    build_shape_pngs $shapesvgs

    # Transit icons are placed on a square, all else placed on circle.
    if [ ${c} == transit ]
    then
        shape=square
    else
        shape=circle
    fi

    # combine shapes and icons
    for icon in $(ls ${present}/${render}/${c} | sed 's/.*\///g;s/-[0-9].*png//g' | sort | uniq )
    do
        echo "${icon}-11.png"
        composite -gravity center -geometry -0-0 ${present}/${render}/${c}/${icon}-11.png ${present}/${shapesrender}/${shape}-11.png ${present}/${render}/${c}/${icon}-11.png
        echo "${icon}-11@2x.png"
        composite -gravity center -geometry -0-0 ${present}/${render}/${c}/${icon}-11@2x.png ${present}/${shapesrender}/${shape}-11@2x.png ${present}/${render}/${c}/${icon}-11@2x.png
        echo "${icon}-15.png"
        composite -gravity center -geometry -0-0 ${present}/${render}/${c}/${icon}-15.png ${present}/${shapesrender}/${shape}-15.png ${present}/${render}/${c}/${icon}-15.png
        echo "${icon}-15@2x.png"
        composite -gravity center -geometry -0-0 ${present}/${render}/${c}/${icon}-15@2x.png ${present}/${shapesrender}/${shape}-15@2x.png ${present}/${render}/${c}/${icon}-15@2x.png
    done

    # Reset shape fill colors
    for w in 11 15
    do
        sed -i '' s/fill:#${colors[count]}/fill:#000000/g ${present}/${shapesrc}/*${w}.svg
    done

    # Reset icon fill colors
    for w in 11 15
    do
        sed -i '' 's/fill:#ffffff/fill:#000000/g' ${present}/${src}/${c}/*${w}.svg
    done
    (( count++ ))
done
