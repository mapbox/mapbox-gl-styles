## v1.2.9

- Fix for emerald-v8 style owner setting

## v1.2.8

- In all styles, set `autocomposite` to `true` for additional vector tiles added.
- emerald-v8 style
  - Resize all maki icons to 100%
  - 100% coverage of custom transit icons
  - Remove blank POI's
  - Add national park land
- streets-v8 style: fix regression in low zoom trunk road styling
- bright-v8 style: Add `entrance-11.svg` and `entrance-15.svg`
- satellite-hybrid-v8 style: update icon sprites based on [maki-2](https://github.com/mapbox/maki-2)

## v1.2.7

- Migrate all styles from using the mapbox.streets-v6 source to mapbox.streets-v7 source
- Add new layers corresponding to new data in mapbox.streets-v7
- Update icon sprites based on [maki-2](https://github.com/mapbox/maki-2) for light, dark, and satellite styles.
