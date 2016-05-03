[![Travis](https://api.travis-ci.org/mapbox/mapbox-gl-styles.svg?branch=mb-pages)](https://travis-ci.org/mapbox/mapbox-gl-styles/builds)

This repository contains prebuilt Mapbox GL styles for use in Mapbox GL JS or the Mapbox Mobile SDKs and as a starting point for custom maps built with [Mapbox Studio](https://www.mapbox.com/mapbox-studio/).

If you're looking for Mapbox Streets, Mapbox Dark, Mapbox Light, or Mapbox Outdoors, see https://www.mapbox.com/maps/

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
