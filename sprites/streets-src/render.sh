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

            inkscape -z \
                --export-plain-svg=${present}/${render}/${g}/${icon}@2x.svg \
                $svg > /dev/null

            # # add stroke to rail icons and to US interstates
            # if [ ${g} == rail ] || [[ ${icon} == *"interstate"* ]]
            # then
            #
            # convert ${present}/${render}/${g}/${icon}.svg \
            #     -matte -bordercolor none -border 2 ${present}/${render}/${g}/${icon}.svg
            #
            # convert ${present}/${render}/${g}/${icon}.svg \( +clone \
            #     -channel A -morphology Edge Diamond:1 +channel \
            #     +level-colors white \
            #     \) -compose DstOver -composite ${present}/${render}/${g}/${icon}.svg
            #
            # convert ${present}/${render}/${g}/${icon}@2x.svg \
            #     -matte -bordercolor none -border 3 ${present}/${render}/${g}/${icon}@2X.svg
            #
            # convert ${present}/${render}/${g}/${icon}@2x.svg \( +clone \
            #     -channel A -morphology Edge Diamond:2 +channel \
            #     +level-colors white \
            #     \) -compose DstOver -composite ${present}/${render}/${g}/${icon}@2x.svg
            # fi

            echo ${icon}
        done
    }

    svgs=$(ls ${present}/${srcdir}/*.svg)

    build_assets $svgs

done
