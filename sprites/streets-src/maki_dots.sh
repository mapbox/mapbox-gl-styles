#!/bin/bash

# Usage
# Run the command from the streets-src directory
# To change colors see line 14

present=$(pwd)
src="_maki_src"  # SVGs should already be here
render="renders"  # SVGs will be created, possibly overwritten, here
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

    # render maki svg from from svg
    function build_maki_svg {
        # Takes a list of SVG files and renders both 1x and 2x scale SVGs

        for svg in $@; do

            icon=$(basename $svg .svg)

            inkscape -z \
                --vacuum-defs \
                --export-plain-svg=${present}/${render}/${c}/${icon}.svg \
                $svg > /dev/null

            inkscape -z \
                --vacuum-defs \
                --export-plain-svg=${present}/${render}/${c}/${icon}@2x.svg \
                $svg > /dev/null
        done
    }

    # Get a list of all the maki icon names from svgs in the src folder
    svgs=$(ls ${present}/${src}/${c}/*.svg)

    build_maki_svg $svgs

    # render shape svg from svg
    function build_shape_svg {
        # Takes a list of SVG files and renders both 1x and 2x scale SVGs

        for shapesvg in $@; do
            icon=$(basename $shapesvg .svg)

            inkscape -z \
                --vacuum-defs \
                --export-plain-svg=${present}/${shapesrender}/${icon}.svg \
                $shapesvg > /dev/null
        done
    }

    # Adjust shape colors
    for w in 11 15
    do
        sed -i '' s/fill:#000000/fill:#${colors[count]}/g ${present}/${shapesrc}/*${w}*.svg
    done

    # Get a list of all the shape names from shapes in the folder
    shapesvgs=$(ls ${present}/${shapesrc}/*.svg)

    build_shape_svg $shapesvgs

    # Transit icons are placed on a square, all else placed on circle.
    if [ ${c} == transit ]
    then
        shape=square
    else
        shape=circle
    fi

    # strip down maki icons to contents
    for icon in $(ls ${present}/${render}/${c})
    do
        awk '{printf "%s", $0} END {printf "\n"}' ${present}/${render}/${c}/${icon} > tmp && mv tmp ${present}/${render}/${c}/${icon} | sed -i '' 's/<\?xml[^\?>]*\?>//g;s/<svg[^>]*>//g;s/<\/svg>//g' ${present}/${render}/${c}/${icon}
    done

    # combine shapes and icons
    for icon in $(ls ${present}/${render}/${c} | sed 's/.*\///g;s/-[0-9].*svg//g' | sort | uniq )
    do
        echo "${icon}-11.svg"
        sed -E "s/<!-- ICON -->/$(cat ${present}/${render}/${c}/${icon}-11.svg | sed -e 's/[\/&]/\\&/g')/" ${present}/${shapesrender}/${shape}-11.svg > ${present}/${render}/${c}/${icon}-11.svg

        echo "${icon}-11@2x.svg"
        sed -E "s/<!-- ICON -->/$(cat ${present}/${render}/${c}/${icon}-11@2x.svg | sed -e 's/[\/&]/\\&/g')/" ${present}/${shapesrender}/${shape}-11@2x.svg > ${present}/${render}/${c}/${icon}-11@2x.svg

        echo "${icon}-15.svg"
        sed -E "s/<!-- ICON -->/$(cat ${present}/${render}/${c}/${icon}-15.svg | sed -e 's/[\/&]/\\&/g')/" ${present}/${shapesrender}/${shape}-15.svg > ${present}/${render}/${c}/${icon}-15.svg

        echo "${icon}-15@2x.svg"
        sed -E "s/<!-- ICON -->/$(cat ${present}/${render}/${c}/${icon}-15@2x.svg | sed -e 's/[\/&]/\\&/g')/" ${present}/${shapesrender}/${shape}-15@2x.svg > ${present}/${render}/${c}/${icon}-15@2x.svg
    done

    # Reset shape fill colors
    for w in 11 15
    do
        sed -i '' s/fill:#${colors[count]}/fill:#000000/g ${present}/${shapesrc}/*${w}*.svg
    done

    # Reset icon fill colors
    for w in 11 15
    do
        sed -i '' 's/fill:#ffffff/fill:#000000/g' ${present}/${src}/${c}/*${w}*.svg
    done
    (( count++ ))
done
