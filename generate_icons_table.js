import icons from 'maki/layouts/streets.json' with {type: 'json'};

const base = 'https://raw.githubusercontent.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg';

console.log('<table>');
for (const [category, list] of Object.entries(icons)) {
    console.log(`<tr><th colspan="4">${category}</th></tr>`);
    for (const icon of list) {
        console.log(`<tr>
    <td><img src="${base}/${icon}-11.svg"></td><td><code>${icon}-11</code></td>
    <td><img src="${base}/${icon}-15.svg"></td><td><code>${icon}-15</code></td>
</tr>`);
    }
}
console.log('</table>');
