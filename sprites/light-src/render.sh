# make sure you have a folder called renders
present=$(pwd)
# render is a path to a directory where your pngs will be saved to, make sure this exists. If not empty, running this script will overwrite whatever's in there.
render="renders"
# srcdir is a path to a directory where your svg's are located.
srcdir=_maki_src/transit
 
function build_pngs {
 
    for svg in ${svgs[@]}; do
        icon=$(basename $svg .svg)
 
        # export png
        inkscape -z \
            --export-dpi=90 \
            --export-png=${present}/${render}/${icon}.png \
            $svg > /dev/null
 
        inkscape -z \
            --export-dpi=180 \
            --export-png=${present}/${render}/${icon}@2x.png \
            $svg > /dev/null
 
        echo ${icon}
    done
}
 
svgs=$(ls ${present}/${srcdir}/*.svg)
 
build_pngs $svgs
 
done