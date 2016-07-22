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

All styles (except Empty) include a standard set of [Maki](https://github.com/mapbox/maki) icons:

<table>
<tr> <th colspan="4">Airport</th> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/airfield-11.svg"></td> <td><code>airfield-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/airfield-15.svg"></td> <td><code>airfield-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/airport-11.svg"></td> <td><code>airport-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/airport-15.svg"></td> <td><code>airport-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/heliport-11.svg"></td> <td><code>heliport-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/heliport-15.svg"></td> <td><code>heliport-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/rocket-11.svg"></td> <td><code>rocket-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/rocket-15.svg"></td> <td><code>rocket-15</code></td> </tr>
<tr> <th colspan="4">Mountain peak</th> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/mountain-11.svg"></td> <td><code>mountain-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/mountain-15.svg"></td> <td><code>mountain-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/volcano-11.svg"></td> <td><code>volcano-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/volcano-15.svg"></td> <td><code>volcano-15</code></td> </tr>
<tr> <th colspan="4">Dining</th> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bakery-11.svg"></td> <td><code>bakery-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bakery-15.svg"></td> <td><code>bakery-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bar-11.svg"></td> <td><code>bar-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bar-15.svg"></td> <td><code>bar-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/beer-11.svg"></td> <td><code>beer-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/beer-15.svg"></td> <td><code>beer-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/cafe-11.svg"></td> <td><code>cafe-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/cafe-15.svg"></td> <td><code>cafe-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/fast-food-11.svg"></td> <td><code>fast-food-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/fast-food-15.svg"></td> <td><code>fast-food-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/ice-cream-11.svg"></td> <td><code>ice-cream-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/ice-cream-15.svg"></td> <td><code>ice-cream-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/restaurant-11.svg"></td> <td><code>restaurant-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/restaurant-15.svg"></td> <td><code>restaurant-15</code></td> </tr>
<tr> <th colspan="4">Education</th> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/college-11.svg"></td> <td><code>college-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/college-15.svg"></td> <td><code>college-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/school-11.svg"></td> <td><code>school-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/school-15.svg"></td> <td><code>school-15</code></td> </tr>
<tr> <th colspan="4">General</th> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/alcohol-shop-11.svg"></td> <td><code>alcohol-shop-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/alcohol-shop-15.svg"></td> <td><code>alcohol-shop-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/amusement-park-11.svg"></td> <td><code>amusement-park-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/amusement-park-15.svg"></td> <td><code>amusement-park-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/aquarium-11.svg"></td> <td><code>aquarium-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/aquarium-15.svg"></td> <td><code>aquarium-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/art-gallery-11.svg"></td> <td><code>art-gallery-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/art-gallery-15.svg"></td> <td><code>art-gallery-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/attraction-11.svg"></td> <td><code>attraction-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/attraction-15.svg"></td> <td><code>attraction-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bank-11.svg"></td> <td><code>bank-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bank-15.svg"></td> <td><code>bank-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bicycle-11.svg"></td> <td><code>bicycle-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bicycle-15.svg"></td> <td><code>bicycle-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bicycle-share-11.svg"></td> <td><code>bicycle-share-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bicycle-share-15.svg"></td> <td><code>bicycle-share-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/car-11.svg"></td> <td><code>car-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/car-15.svg"></td> <td><code>car-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/castle-11.svg"></td> <td><code>castle-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/castle-15.svg"></td> <td><code>castle-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/cinema-11.svg"></td> <td><code>cinema-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/cinema-15.svg"></td> <td><code>cinema-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/circle-11.svg"></td> <td><code>circle-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/circle-15.svg"></td> <td><code>circle-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/circle-stroked-11.svg"></td> <td><code>circle-stroked-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/circle-stroked-15.svg"></td> <td><code>circle-stroked-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/clothing-store-11.svg"></td> <td><code>clothing-store-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/clothing-store-15.svg"></td> <td><code>clothing-store-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/drinking-water-11.svg"></td> <td><code>drinking-water-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/drinking-water-15.svg"></td> <td><code>drinking-water-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/embassy-11.svg"></td> <td><code>embassy-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/embassy-15.svg"></td> <td><code>embassy-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/fire-station-11.svg"></td> <td><code>fire-station-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/fire-station-15.svg"></td> <td><code>fire-station-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/fuel-11.svg"></td> <td><code>fuel-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/fuel-15.svg"></td> <td><code>fuel-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/grocery-11.svg"></td> <td><code>grocery-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/grocery-15.svg"></td> <td><code>grocery-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/harbor-11.svg"></td> <td><code>harbor-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/harbor-15.svg"></td> <td><code>harbor-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/information-11.svg"></td> <td><code>information-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/information-15.svg"></td> <td><code>information-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/laundry-11.svg"></td> <td><code>laundry-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/laundry-15.svg"></td> <td><code>laundry-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/library-11.svg"></td> <td><code>library-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/library-15.svg"></td> <td><code>library-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/lodging-11.svg"></td> <td><code>lodging-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/lodging-15.svg"></td> <td><code>lodging-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/marker-11.svg"></td> <td><code>marker-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/marker-15.svg"></td> <td><code>marker-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/monument-11.svg"></td> <td><code>monument-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/monument-15.svg"></td> <td><code>monument-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/museum-11.svg"></td> <td><code>museum-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/museum-15.svg"></td> <td><code>museum-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/music-11.svg"></td> <td><code>music-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/music-15.svg"></td> <td><code>music-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/place-of-worship-11.svg"></td> <td><code>place-of-worship-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/place-of-worship-15.svg"></td> <td><code>place-of-worship-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/police-11.svg"></td> <td><code>police-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/police-15.svg"></td> <td><code>police-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/post-11.svg"></td> <td><code>post-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/post-15.svg"></td> <td><code>post-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/prison-11.svg"></td> <td><code>prison-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/prison-15.svg"></td> <td><code>prison-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/religious-christian-11.svg"></td> <td><code>religious-christian-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/religious-christian-15.svg"></td> <td><code>religious-christian-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/religious-jewish-11.svg"></td> <td><code>religious-jewish-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/religious-jewish-15.svg"></td> <td><code>religious-jewish-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/religious-muslim-11.svg"></td> <td><code>religious-muslim-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/religious-muslim-15.svg"></td> <td><code>religious-muslim-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/shop-11.svg"></td> <td><code>shop-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/shop-15.svg"></td> <td><code>shop-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/stadium-11.svg"></td> <td><code>stadium-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/stadium-15.svg"></td> <td><code>stadium-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/star-11.svg"></td> <td><code>star-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/star-15.svg"></td> <td><code>star-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/suitcase-11.svg"></td> <td><code>suitcase-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/suitcase-15.svg"></td> <td><code>suitcase-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/swimming-11.svg"></td> <td><code>swimming-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/swimming-15.svg"></td> <td><code>swimming-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/theatre-11.svg"></td> <td><code>theatre-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/theatre-15.svg"></td> <td><code>theatre-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/toilet-11.svg"></td> <td><code>toilet-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/toilet-15.svg"></td> <td><code>toilet-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/town-hall-11.svg"></td> <td><code>town-hall-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/town-hall-15.svg"></td> <td><code>town-hall-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/triangle-11.svg"></td> <td><code>triangle-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/triangle-15.svg"></td> <td><code>triangle-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/triangle-stroked-11.svg"></td> <td><code>triangle-stroked-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/triangle-stroked-15.svg"></td> <td><code>triangle-stroked-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/veterinary-11.svg"></td> <td><code>veterinary-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/veterinary-15.svg"></td> <td><code>veterinary-15</code></td> </tr>
<tr> <th colspan="4">Health</th> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/dentist-11.svg"></td> <td><code>dentist-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/dentist-15.svg"></td> <td><code>dentist-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/doctor-11.svg"></td> <td><code>doctor-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/doctor-15.svg"></td> <td><code>doctor-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/hospital-11.svg"></td> <td><code>hospital-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/hospital-15.svg"></td> <td><code>hospital-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/pharmacy-11.svg"></td> <td><code>pharmacy-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/pharmacy-15.svg"></td> <td><code>pharmacy-15</code></td> </tr>
<tr> <th colspan="4">Outdoors</th> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/campsite-11.svg"></td> <td><code>campsite-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/campsite-15.svg"></td> <td><code>campsite-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/cemetery-11.svg"></td> <td><code>cemetery-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/cemetery-15.svg"></td> <td><code>cemetery-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/dog-park-11.svg"></td> <td><code>dog-park-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/dog-park-15.svg"></td> <td><code>dog-park-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/garden-11.svg"></td> <td><code>garden-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/garden-15.svg"></td> <td><code>garden-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/golf-11.svg"></td> <td><code>golf-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/golf-15.svg"></td> <td><code>golf-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/park-11.svg"></td> <td><code>park-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/park-15.svg"></td> <td><code>park-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/picnic-site-11.svg"></td> <td><code>picnic-site-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/picnic-site-15.svg"></td> <td><code>picnic-site-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/playground-11.svg"></td> <td><code>playground-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/playground-15.svg"></td> <td><code>playground-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/zoo-11.svg"></td> <td><code>zoo-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/zoo-15.svg"></td> <td><code>zoo-15</code></td> </tr>
<tr> <th colspan="4">Transit</th> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bus-11.svg"></td> <td><code>bus-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bus-15.svg"></td> <td><code>bus-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/ferry-11.svg"></td> <td><code>ferry-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/ferry-15.svg"></td> <td><code>ferry-15</code></td> </tr>
<tr> <th colspan="4">Rail station</th> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/entrance-11.svg"></td> <td><code>entrance-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/entrance-15.svg"></td> <td><code>entrance-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/rail-11.svg"></td> <td><code>rail-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/rail-15.svg"></td> <td><code>rail-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/rail-light-11.svg"></td> <td><code>rail-light-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/rail-light-15.svg"></td> <td><code>rail-light-15</code></td> </tr>
<tr> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/rail-metro-11.svg"></td> <td><code>rail-metro-11</code></td> <td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/rail-metro-15.svg"></td> <td><code>rail-metro-15</code></td> </tr>
</table>

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
