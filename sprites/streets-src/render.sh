present=$(pwd)
render="renders"  # PNGs will be created, possibly overwritten, here
declare -a groups=(shield rail extras)

for g in ${groups[@]}
do
    srcdir=_${g}_src

    function build_pngs {

        for svg in ${svgs[@]}; do
            icon=$(basename $svg .svg)

            # export png
            inkscape -z \
                --export-dpi=90 \
                --export-png=${present}/${render}/${g}/${icon}.png \
                $svg > /dev/null

            inkscape -z \
                --export-dpi=180 \
                --export-png=${present}/${render}/${g}/${icon}@2x.png \
                $svg > /dev/null

            # add stroke to png
            if [ ${g} == rail ]
            then

            convert ${present}/${render}/${g}/${icon}.png \
                -matte -bordercolor none -border 2 ${present}/${render}/${g}/${icon}.png

            convert  ${present}/${render}/${g}/${icon}.png \( +clone \
                -channel A -morphology Edge Diamond:1 +channel \
                +level-colors white \
                \) -compose DstOver -composite ${present}/${render}/${g}/${icon}.png

            convert ${present}/${render}/${g}/${icon}@2X.png \
                -matte -bordercolor none -border 3 ${present}/${render}/${g}/${icon}@2X.png

            convert  ${present}/${render}/${g}/${icon}@2x.png \( +clone \
                -channel A -morphology Edge Diamond:2 +channel \
                +level-colors white \
                \) -compose DstOver -composite ${present}/${render}/${g}/${icon}@2x.png
            fi

            echo ${icon}
        done
    }

    svgs=$(ls ${present}/${srcdir}/*.svg)

    build_pngs $svgs

done
