present=$(pwd)
render="renders"  # PNGs will be created, possibly overwritten, here
declare -a groups=(rail shield extras)

for g in ${groups[@]}
do
    srcdir=_${g}_src

    function build_pngs {

        for svg in ${svgs[@]}; do
            icon=$(basename $svg .svg)
            inkscape -z \
                --export-dpi=90 \
                --export-png=${present}/${render}/${g}/${icon}.png \
                $svg > /dev/null

            inkscape -z \
                --export-dpi=180 \
                --export-png=${present}/${render}/${g}/${icon}@2x.png \
                $svg > /dev/null

            echo ${icon}

        done
    }

    svgs=$(ls ${present}/${srcdir}/*.svg)

    build_pngs $svgs

done
