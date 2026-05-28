import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {styles, sprites, spriteStyles, maki} from '../index.js';

test('.styles - all styles have version, name, and layers', () => {
    for (const style of Object.values(styles)) {
        assert.ok(style.version, 'Check for version');
        assert.ok(style.name, 'Check for name');
        assert.ok(style.layers, 'Check for layers');
    }
});

test('.sprites - all sprites are populated', () => {
    for (const sprite of Object.values(sprites)) {
        assert.ok(sprite.length > 0);
        assert.ok(sprite[0].id);
        assert.equal(typeof sprite[0].svg, 'object');
    }
});

test('.sprite names - properly referenced sprites', () => {
    for (const [id, style] of Object.entries(styles)) {
        if (style.version >= 8 && style.name !== 'Empty') {
            assert.equal(style.sprite, `mapbox://sprites/mapbox/${id}`, 'References mapbox sprites');
        }
    }
});

test('.metadata', () => {
    for (const [id, style] of Object.entries(styles)) {
        if (!id.includes('-v9')) continue;
        const expected = style.name.includes('Satellite') ? 'default' : 'template';
        assert.equal(style.metadata['mapbox:type'], expected, `Type metadata for ${style.name}`);
        assert.equal(style.metadata['mapbox:autocomposite'], true, `autocomposite metadata for ${style.name}`);
    }
});

test('.glyphs - properly referenced fontstacks', () => {
    for (const style of Object.values(styles)) {
        if (style.version >= 8) {
            assert.equal(style.glyphs, 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf', `References mapbox glyphs for ${style.name}`);
        }
    }
});

test('.maki - all maki icons present in each sprite style', () => {
    for (const style of spriteStyles) {
        const files = new Set(fs.readdirSync(`./sprites/${style}/_svg`));
        for (const name of maki) {
            assert.ok(files.has(`${name}-11.svg`), `${name}-11.svg in ${style}`);
            assert.ok(files.has(`${name}-15.svg`), `${name}-15.svg in ${style}`);
        }
    }
});

const isLiteral = s => typeof s === 'string' && s.length > 0 && !s.includes('{') && !s.includes('}');

test('.all-image-test - layers referencing images have matching svgs in style folder', () => {
    for (const style of spriteStyles) {
        const layers = styles[style].layers;
        const images = [];

        for (let j = 1; j < layers.length; j++) {
            const layer = layers[j];
            const {type, paint = {}, layout = {}} = layer;

            if (type === 'background' && paint['background-pattern'] !== undefined) {
                images.push(paint['background-pattern']);
            } else if (type === 'line' && paint['line-pattern'] !== undefined) {
                images.push(paint['line-pattern']);
            }

            const value = layout['icon-image'];
            if (value === undefined) continue;

            if (typeof value === 'string') {
                if (isLiteral(value)) images.push(value);
            } else {
                for (const val of Object.values(value)) {
                    if (typeof val !== 'object') continue;
                    for (let k = 1; k < val.length; k++) {
                        const img = val[k][1];
                        if (isLiteral(img)) images.push(img);
                    }
                }
            }
        }

        const files = new Set(fs.readdirSync(`./sprites/${style}/_svg`));
        for (const img of images) {
            assert.ok(files.has(`${img}.svg`), `${img}.svg in ${style}`);
        }
    }
});
