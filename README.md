[![Travis](https://api.travis-ci.org/mapbox/mapbox-gl-styles.svg?branch=mb-pages)](https://travis-ci.org/mapbox/mapbox-gl-styles/builds)

This repository contains prebuilt Mapbox GL styles for use in Mapbox GL JS or the Mapbox Mobile SDKs and as a starting point for custom maps built with [Mapbox Studio](https://www.mapbox.com/mapbox-studio/).

If you're looking for Mapbox Streets, Mapbox Satellite Streets, Mapbox Dark, Mapbox Light, or Mapbox Outdoors, see https://www.mapbox.com/maps/

## Versioning

A __breaking__ release (__x__.0.0) is one that

- changes  the style's `version` field
- removes or renames an icon
- removes or changes a `glyphs` URL
- removes or changes a source
- removes or renames a style layer
- changes the semantic meaning of a layer

A __feature__ release (0.__x__.0) has no breaking-release changes and

- makes any non-breaking change to styles
- makes any non-breaking change to sprites
- adds a new style
- adds a new icon

A __fix__ release (0.0.__x__) is one that has no feature-release changes and

- fixes an invalid stylesheet or bad test

## Styles

The following styles are provided:

#### Basic (`basic-v8`)

Simple and flexible starting template.

#### Bright (`bright-v8`)

Template for complex custom basemaps.

#### Satellite (`satellite-v8`)

A beautiful global satellite and aerial imagery layer.

#### Empty (`empty-v8`)

A blank slate. Build your own map from the ground up.

## Standard icons

All styles except Empty include [these sprite images](https://github.com/mapbox/maki/blob/master/layouts/streets.json) from the Maki project.

When you use an icon in a style, you must specify the icons size as a suffix to its name. Supported size suffixes are `-11` and `-15`, representing an 11px and a 15px square respectively. For example, a 15px airfield icon would be specified as `"icon-image": "airfield-15"`.

|    | icon name |
|--- | --------- |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/airfield-11.svg"> | `airfield-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/airfield-15.svg"> | `airfield-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/airport-11.svg"> | `airport-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/airport-15.svg"> | `airport-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/alcohol-shop-11.svg"> | `alcohol-shop-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/alcohol-shop-15.svg"> | `alcohol-shop-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/amusement-park-11.svg"> | `amusement-park-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/amusement-park-15.svg"> | `amusement-park-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/aquarium-11.svg"> | `aquarium-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/aquarium-15.svg"> | `aquarium-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/art-gallery-11.svg"> | `art-gallery-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/art-gallery-15.svg"> | `art-gallery-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/attraction-11.svg"> | `attraction-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/attraction-15.svg"> | `attraction-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/bakery-11.svg"> | `bakery-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/bakery-15.svg"> | `bakery-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/bank-11.svg"> | `bank-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/bank-15.svg"> | `bank-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/bar-11.svg"> | `bar-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/bar-15.svg"> | `bar-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/beer-11.svg"> | `beer-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/beer-15.svg"> | `beer-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/bicycle-11.svg"> | `bicycle-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/bicycle-15.svg"> | `bicycle-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/bicycle-share-11.svg"> | `bicycle-share-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/bicycle-share-15.svg"> | `bicycle-share-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/bus-11.svg"> | `bus-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/bus-15.svg"> | `bus-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/cafe-11.svg"> | `cafe-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/cafe-15.svg"> | `cafe-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/campsite-11.svg"> | `campsite-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/campsite-15.svg"> | `campsite-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/car-11.svg"> | `car-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/car-15.svg"> | `car-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/castle-11.svg"> | `castle-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/castle-15.svg"> | `castle-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/cemetery-11.svg"> | `cemetery-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/cemetery-15.svg"> | `cemetery-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/cinema-11.svg"> | `cinema-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/cinema-15.svg"> | `cinema-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/circle-11.svg"> | `circle-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/circle-15.svg"> | `circle-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/circle-stroked-11.svg"> | `circle-stroked-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/circle-stroked-15.svg"> | `circle-stroked-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/clothing-store-11.svg"> | `clothing-store-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/clothing-store-15.svg"> | `clothing-store-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/college-11.svg"> | `college-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/college-15.svg"> | `college-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/dentist-11.svg"> | `dentist-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/dentist-15.svg"> | `dentist-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/doctor-11.svg"> | `doctor-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/doctor-15.svg"> | `doctor-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/dog-park-11.svg"> | `dog-park-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/dog-park-15.svg"> | `dog-park-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/drinking-water-11.svg"> | `drinking-water-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/drinking-water-15.svg"> | `drinking-water-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/embassy-11.svg"> | `embassy-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/embassy-15.svg"> | `embassy-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/entrance-11.svg"> | `entrance-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/entrance-15.svg"> | `entrance-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/fast-food-11.svg"> | `fast-food-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/fast-food-15.svg"> | `fast-food-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/ferry-11.svg"> | `ferry-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/ferry-15.svg"> | `ferry-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/fire-station-11.svg"> | `fire-station-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/fire-station-15.svg"> | `fire-station-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/fuel-11.svg"> | `fuel-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/fuel-15.svg"> | `fuel-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/garden-11.svg"> | `garden-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/garden-15.svg"> | `garden-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/golf-11.svg"> | `golf-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/golf-15.svg"> | `golf-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/grocery-11.svg"> | `grocery-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/grocery-15.svg"> | `grocery-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/harbor-11.svg"> | `harbor-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/harbor-15.svg"> | `harbor-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/heliport-11.svg"> | `heliport-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/heliport-15.svg"> | `heliport-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/hospital-11.svg"> | `hospital-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/hospital-15.svg"> | `hospital-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/ice-cream-11.svg"> | `ice-cream-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/ice-cream-15.svg"> | `ice-cream-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/information-11.svg"> | `information-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/information-15.svg"> | `information-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/laundry-11.svg"> | `laundry-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/laundry-15.svg"> | `laundry-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/library-11.svg"> | `library-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/library-15.svg"> | `library-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/lodging-11.svg"> | `lodging-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/lodging-15.svg"> | `lodging-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/monument-11.svg"> | `monument-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/monument-15.svg"> | `monument-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/mountain-11.svg"> | `mountain-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/mountain-15.svg"> | `mountain-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/museum-11.svg"> | `museum-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/museum-15.svg"> | `museum-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/music-11.svg"> | `music-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/music-15.svg"> | `music-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/park-11.svg"> | `park-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/park-15.svg"> | `park-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/pharmacy-11.svg"> | `pharmacy-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/pharmacy-15.svg"> | `pharmacy-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/picnic-site-11.svg"> | `picnic-site-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/picnic-site-15.svg"> | `picnic-site-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/place-of-worship-11.svg"> | `place-of-worship-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/place-of-worship-15.svg"> | `place-of-worship-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/playground-11.svg"> | `playground-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/playground-15.svg"> | `playground-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/police-11.svg"> | `police-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/police-15.svg"> | `police-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/post-11.svg"> | `post-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/post-15.svg"> | `post-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/prison-11.svg"> | `prison-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/prison-15.svg"> | `prison-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/rail-11.svg"> | `rail-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/rail-15.svg"> | `rail-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/rail-light-11.svg"> | `rail-light-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/rail-light-15.svg"> | `rail-light-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/rail-metro-11.svg"> | `rail-metro-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/rail-metro-15.svg"> | `rail-metro-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/religious-christian-11.svg"> | `religious-christian-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/religious-christian-15.svg"> | `religious-christian-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/religious-jewish-11.svg"> | `religious-jewish-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/religious-jewish-15.svg"> | `religious-jewish-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/religious-muslim-11.svg"> | `religious-muslim-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/religious-muslim-15.svg"> | `religious-muslim-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/restaurant-11.svg"> | `restaurant-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/restaurant-15.svg"> | `restaurant-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/rocket-11.svg"> | `rocket-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/rocket-15.svg"> | `rocket-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/school-11.svg"> | `school-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/school-15.svg"> | `school-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/shop-11.svg"> | `shop-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/shop-15.svg"> | `shop-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/stadium-11.svg"> | `stadium-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/stadium-15.svg"> | `stadium-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/star-11.svg"> | `star-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/star-15.svg"> | `star-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/suitcase-11.svg"> | `suitcase-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/suitcase-15.svg"> | `suitcase-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/swimming-11.svg"> | `swimming-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/swimming-15.svg"> | `swimming-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/theatre-11.svg"> | `theatre-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/theatre-15.svg"> | `theatre-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/toilet-11.svg"> | `toilet-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/toilet-15.svg"> | `toilet-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/town-hall-11.svg"> | `town-hall-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/town-hall-15.svg"> | `town-hall-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/triangle-11.svg"> | `triangle-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/triangle-15.svg"> | `triangle-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/triangle-stroked-11.svg"> | `triangle-stroked-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/triangle-stroked-15.svg"> | `triangle-stroked-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/veterinary-11.svg"> | `veterinary-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/veterinary-15.svg"> | `veterinary-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/volcano-11.svg"> | `volcano-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/volcano-15.svg"> | `volcano-15` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/zoo-11.svg"> | `zoo-11` |
| <img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/satellite-v9/_svg/zoo-15.svg"> | `zoo-15` |

## Usage

The preferred way to use these styles in Mapbox GL JS or the Mapbox Mobile SDKs is via a `mapbox://` URL.

### JS

```
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v8'
});

```

### iOS

```
mapView = [[MGLMapView alloc] initWithFrame:self.view.bounds
                                   styleURL:[NSURL URLWithString:@"mapbox://styles/mapbox/satellite-v8"]];
```

### Android

```xml
<com.mapbox.mapboxsdk.views.MapView
    android:id="@+id/mapView"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    app:style_url="mapbox://styles/mapbox/streets-v8"
 />
```

```java
MapView mMapView = new MapView(context, "Access Token");
mMapView.setStyleUrl(Style.MAPBOX_STREETS);
```
