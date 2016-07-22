var icons = require('maki/layouts/streets');

console.log('<table>')
for (var i in icons) {
    console.log(
        '<tr>',
            `<th colspan="4">${i}</th>`,
        '</tr>'
    );

    for (var j in icons[i]) {
        var icon = icons[i][j];
        console.log(
            '<tr>',
                `<td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/${icon}-11.svg"></td>`,
                `<td><code>${icon}-11</code></td>`,
                `<td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/${icon}-15.svg"></td>`,
                `<td><code>${icon}-15</code></td>`,
            '</tr>'
        );
    }
}
console.log('</table>')
