#!/bin/bash
present=$(pwd)

for w in 11 17
do
    sed -i 's/000000/ffffff/g' ${present}/src/*${w}.svg
done

# ./render.sh png

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

for w in 11 17
do
    sed -i 's/ffffff/000000/g' ${present}/src/*${w}.svg
done

