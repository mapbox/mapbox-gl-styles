#!/bin/bash

present=$(pwd)
src="_maki_src"  # SVGs should already be here
render="maki"  # PNGs will be created, possibly overwritten, here
shapesrc="_maki_shapes_src"
shapesrender="maki_shapes"
count=0

declare -a categories=(dining education general health outdoors transit) # icon categories
declare -a colors=(3377a7 b5a462 a9a199 b28b8b 7e9a4c 9c8ea4) # colors correspond to categories

# For each category...
for c in ${categories[@]}
do
    # Adjust icon fill colors
    for w in 11 17
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
    icons=$(ls ${present}/${src}/${c}/*-11.svg \
        | sed s/-11*.svg//g \
        | sed s:${present}/${src}/${c}/::g)

    # Build lists of all the SVG and PNG files from the icons list
    svgs=$(for icon in $icons; do echo -n ${present}/${src}/${c}/${icon}-{17,11}.svg" "; done)
    pngs=$(for icon in $icons; do echo -n ${present}/${render}/${c}/${icon}-{17,11}.png" "; done)
    pngs2x=$(for icon in $icons; do echo -n ${present}/${render}/${c}/${icon}-{17,11}@2x.png" "; done)

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
    for w in 11 17
    do
        sed -i '' s/fill:#000000/fill:#${colors[count]}/g ${present}/${shapesrc}/*${w}.svg
    done

    # Get a list of all the shape names from shapes in the folder
    shapes=$(ls ${present}/${shapesrc}/*-11.svg \
        | sed s/-11*.svg//g \
        | sed s:${present}/${shapesrc}/::g)

    shapesvgs=$(for shape in $shapes; do echo -n ${present}/${shapesrc}/${shapes}-{17,11}.svg" "; done)

    build_shape_pngs $shapesvgs

    # combine shapes and icons
    for icon in $(ls ${present}/${render}/${c} | sed 's/.*\///g;s/-[0-9].*png//g' | sort | uniq )
    do
        echo "${icon}-11.png"
        composite -gravity center -geometry -0-0 ${present}/${render}/${c}/${icon}-11.png ${present}/${shapesrender}/shape-11.png ${present}/${render}/${c}/${icon}-11.png
        echo "${icon}-11@2x.png"
        composite -gravity center -geometry -0-0 ${present}/${render}/${c}/${icon}-11@2x.png ${present}/${shapesrender}/shape-11@2x.png ${present}/${render}/${c}/${icon}-11@2x.png
        echo "${icon}-17.png"
        composite -gravity center -geometry -0-0 ${present}/${render}/${c}/${icon}-17.png ${present}/${shapesrender}/shape-17.png ${present}/${render}/${c}/${icon}-17.png
        echo "${icon}-17@2x.png"
        composite -gravity center -geometry -0-0 ${present}/${render}/${c}/${icon}-17@2x.png ${present}/${shapesrender}/shape-17@2x.png ${present}/${render}/${c}/${icon}-17@2x.png
    done

    # Reset shape fill colors
    for w in 11 17
    do
        sed -i '' s/fill:#${colors[count]}/fill:#000000/g ${present}/${shapesrc}/*${w}.svg
    done

    # Reset icon fill colors
    for w in 11 17
    do
        sed -i '' 's/fill:#ffffff/fill:#000000/g' ${present}/${src}/${c}/*${w}.svg
    done
    (( count++ ))
done
