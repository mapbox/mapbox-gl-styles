[![Travis](https://api.travis-ci.org/mapbox/mapbox-gl-styles.svg?branch=mb-pages)](https://travis-ci.org/mapbox/mapbox-gl-styles/builds)

This repository contains prebuilt Mapbox GL styles for use in Mapbox GL JS or the Mapbox Mobile SDKs and as a starting point for custom maps built with [Mapbox Studio](https://www.mapbox.com/mapbox-studio/).


## Versioning

A __breaking__ release (__x__.0.0) is one that

- changes  the style's `version` field
- removes or renames an icon
- removes or changes a `glyphs` URL
- removes or changes a source
- removes, renames, or changes the semantic meaning of a layer

A __feature__ release (0.__x__.0) has no breaking changes and

- makes any non-breaking change to existing stylesheet JSON
- makes any non-breaking change to existing stylesheet sprite
- adds a new style
- makes changes to files other than styles and sprites (README, tests, or migration scripts)

A __fix__ release (0.0.__x__) is one that has no feature-release changes and

- fixes an invalid stylesheet or bad test 

## Styles

The following styles are provided:

#### Basic (`basic-v8`)

Simple and flexible starting template.

#### Bright (`bright-v8`)

Template for complex custom basemaps.

#### Streets (`streets-v8`)

A complete basemap, perfect for incorporating your own data.

#### Light (`light-v8`)

Subtle light backdrop for data visualizations.

#### Dark (`dark-v8`)

Subtle dark backdrop for data visualizations.

#### Emerald (`emerald-v8`)

A versatile style, with emphasis on road networks and public transit.

#### Satellite (`satellite-v8`)

A beautiful global satellite and aerial imagery layer.

#### Satellite Streets (`satellite-hybrid-v8`)

Global satellite and aerial imagery with unobtrusive labels.

#### Empty (`empty-v8`)

A blank slate. Build your own map from the ground up.

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
