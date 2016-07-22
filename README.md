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

All styles (except Empty) include a standard set of [Maki](https://github.com/mapbox/maki) icons.

<table>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/airfield-11.svg"></td><td>`airfield-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/airfield-15.svg"></td><td>`airfield-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/airport-11.svg"></td><td>`airport-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/airport-15.svg"></td><td>`airport-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/alcohol-shop-11.svg"></td><td>`alcohol-shop-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/alcohol-shop-15.svg"></td><td>`alcohol-shop-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/amusement-park-11.svg"></td><td>`amusement-park-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/amusement-park-15.svg"></td><td>`amusement-park-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/aquarium-11.svg"></td><td>`aquarium-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/aquarium-15.svg"></td><td>`aquarium-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/art-gallery-11.svg"></td><td>`art-gallery-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/art-gallery-15.svg"></td><td>`art-gallery-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/attraction-11.svg"></td><td>`attraction-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/attraction-15.svg"></td><td>`attraction-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bakery-11.svg"></td><td>`bakery-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bakery-15.svg"></td><td>`bakery-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bank-11.svg"></td><td>`bank-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bank-15.svg"></td><td>`bank-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bar-11.svg"></td><td>`bar-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bar-15.svg"></td><td>`bar-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/beer-11.svg"></td><td>`beer-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/beer-15.svg"></td><td>`beer-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bicycle-11.svg"></td><td>`bicycle-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bicycle-15.svg"></td><td>`bicycle-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bicycle-share-11.svg"></td><td>`bicycle-share-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bicycle-share-15.svg"></td><td>`bicycle-share-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bus-11.svg"></td><td>`bus-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/bus-15.svg"></td><td>`bus-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/cafe-11.svg"></td><td>`cafe-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/cafe-15.svg"></td><td>`cafe-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/campsite-11.svg"></td><td>`campsite-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/campsite-15.svg"></td><td>`campsite-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/car-11.svg"></td><td>`car-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/car-15.svg"></td><td>`car-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/castle-11.svg"></td><td>`castle-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/castle-15.svg"></td><td>`castle-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/cemetery-11.svg"></td><td>`cemetery-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/cemetery-15.svg"></td><td>`cemetery-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/cinema-11.svg"></td><td>`cinema-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/cinema-15.svg"></td><td>`cinema-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/circle-11.svg"></td><td>`circle-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/circle-15.svg"></td><td>`circle-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/circle-stroked-11.svg"></td><td>`circle-stroked-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/circle-stroked-15.svg"></td><td>`circle-stroked-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/clothing-store-11.svg"></td><td>`clothing-store-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/clothing-store-15.svg"></td><td>`clothing-store-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/college-11.svg"></td><td>`college-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/college-15.svg"></td><td>`college-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/dentist-11.svg"></td><td>`dentist-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/dentist-15.svg"></td><td>`dentist-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/doctor-11.svg"></td><td>`doctor-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/doctor-15.svg"></td><td>`doctor-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/dog-park-11.svg"></td><td>`dog-park-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/dog-park-15.svg"></td><td>`dog-park-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/drinking-water-11.svg"></td><td>`drinking-water-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/drinking-water-15.svg"></td><td>`drinking-water-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/embassy-11.svg"></td><td>`embassy-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/embassy-15.svg"></td><td>`embassy-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/entrance-11.svg"></td><td>`entrance-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/entrance-15.svg"></td><td>`entrance-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/fast-food-11.svg"></td><td>`fast-food-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/fast-food-15.svg"></td><td>`fast-food-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/ferry-11.svg"></td><td>`ferry-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/ferry-15.svg"></td><td>`ferry-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/fire-station-11.svg"></td><td>`fire-station-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/fire-station-15.svg"></td><td>`fire-station-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/fuel-11.svg"></td><td>`fuel-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/fuel-15.svg"></td><td>`fuel-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/garden-11.svg"></td><td>`garden-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/garden-15.svg"></td><td>`garden-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/golf-11.svg"></td><td>`golf-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/golf-15.svg"></td><td>`golf-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/grocery-11.svg"></td><td>`grocery-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/grocery-15.svg"></td><td>`grocery-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/harbor-11.svg"></td><td>`harbor-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/harbor-15.svg"></td><td>`harbor-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/heliport-11.svg"></td><td>`heliport-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/heliport-15.svg"></td><td>`heliport-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/hospital-11.svg"></td><td>`hospital-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/hospital-15.svg"></td><td>`hospital-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/ice-cream-11.svg"></td><td>`ice-cream-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/ice-cream-15.svg"></td><td>`ice-cream-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/information-11.svg"></td><td>`information-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/information-15.svg"></td><td>`information-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/laundry-11.svg"></td><td>`laundry-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/laundry-15.svg"></td><td>`laundry-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/library-11.svg"></td><td>`library-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/library-15.svg"></td><td>`library-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/lodging-11.svg"></td><td>`lodging-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/lodging-15.svg"></td><td>`lodging-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/monument-11.svg"></td><td>`monument-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/monument-15.svg"></td><td>`monument-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/mountain-11.svg"></td><td>`mountain-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/mountain-15.svg"></td><td>`mountain-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/museum-11.svg"></td><td>`museum-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/museum-15.svg"></td><td>`museum-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/music-11.svg"></td><td>`music-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/music-15.svg"></td><td>`music-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/park-11.svg"></td><td>`park-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/park-15.svg"></td><td>`park-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/pharmacy-11.svg"></td><td>`pharmacy-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/pharmacy-15.svg"></td><td>`pharmacy-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/picnic-site-11.svg"></td><td>`picnic-site-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/picnic-site-15.svg"></td><td>`picnic-site-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/place-of-worship-11.svg"></td><td>`place-of-worship-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/place-of-worship-15.svg"></td><td>`place-of-worship-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/playground-11.svg"></td><td>`playground-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/playground-15.svg"></td><td>`playground-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/police-11.svg"></td><td>`police-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/police-15.svg"></td><td>`police-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/post-11.svg"></td><td>`post-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/post-15.svg"></td><td>`post-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/prison-11.svg"></td><td>`prison-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/prison-15.svg"></td><td>`prison-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/rail-11.svg"></td><td>`rail-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/rail-15.svg"></td><td>`rail-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/rail-light-11.svg"></td><td>`rail-light-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/rail-light-15.svg"></td><td>`rail-light-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/rail-metro-11.svg"></td><td>`rail-metro-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/rail-metro-15.svg"></td><td>`rail-metro-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/religious-christian-11.svg"></td><td>`religious-christian-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/religious-christian-15.svg"></td><td>`religious-christian-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/religious-jewish-11.svg"></td><td>`religious-jewish-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/religious-jewish-15.svg"></td><td>`religious-jewish-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/religious-muslim-11.svg"></td><td>`religious-muslim-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/religious-muslim-15.svg"></td><td>`religious-muslim-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/restaurant-11.svg"></td><td>`restaurant-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/restaurant-15.svg"></td><td>`restaurant-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/rocket-11.svg"></td><td>`rocket-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/rocket-15.svg"></td><td>`rocket-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/school-11.svg"></td><td>`school-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/school-15.svg"></td><td>`school-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/shop-11.svg"></td><td>`shop-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/shop-15.svg"></td><td>`shop-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/stadium-11.svg"></td><td>`stadium-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/stadium-15.svg"></td><td>`stadium-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/star-11.svg"></td><td>`star-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/star-15.svg"></td><td>`star-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/suitcase-11.svg"></td><td>`suitcase-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/suitcase-15.svg"></td><td>`suitcase-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/swimming-11.svg"></td><td>`swimming-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/swimming-15.svg"></td><td>`swimming-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/theatre-11.svg"></td><td>`theatre-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/theatre-15.svg"></td><td>`theatre-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/toilet-11.svg"></td><td>`toilet-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/toilet-15.svg"></td><td>`toilet-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/town-hall-11.svg"></td><td>`town-hall-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/town-hall-15.svg"></td><td>`town-hall-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/triangle-11.svg"></td><td>`triangle-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/triangle-15.svg"></td><td>`triangle-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/triangle-stroked-11.svg"></td><td>`triangle-stroked-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/triangle-stroked-15.svg"></td><td>`triangle-stroked-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/veterinary-11.svg"></td><td>`veterinary-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/veterinary-15.svg"></td><td>`veterinary-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/volcano-11.svg"></td><td>`volcano-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/volcano-15.svg"></td><td>`volcano-15`</td></tr>
<tr><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/zoo-11.svg"></td><td>`zoo-11`</td><td><img src="https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/zoo-15.svg"></td><td>`zoo-15`</td></tr>
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
