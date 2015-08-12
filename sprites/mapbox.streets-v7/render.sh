present=$(pwd)
render="renders"  # PNGs will be created, possibly overwritten, here
declare -a groups=(shield rail extras)

for g in ${groups[@]}
do
    srcdir=_${g}_src

    function build_assets {

        for svg in ${svgs[@]}; do
            icon=$(basename $svg .svg)

            # export png
            inkscape -z \
                --export-plain-svg=${present}/${render}/${g}/${icon}.svg \
                $svg > /dev/null

            echo ${icon}
        done
    }

    svgs=$(ls ${present}/${srcdir}/*.svg)

    build_assets $svgs

done
