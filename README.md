[![Travis](https://api.travis-ci.org/mapbox/mapbox-gl-styles.svg?branch=mb-pages)](https://travis-ci.org/mapbox/mapbox-gl-styles/builds)

This repository contains some prebuild Mapbox GL styles for use in apps and as a starting point for custom maps built with [Mapbox Studio](https://www.mapbox.com/mapbox-studio/).

The following styles are provided:

### Basic (`basic-v8`)

Simple and flexible starting template.

### Bright (`bright-v8`)

Template for complex custom basemaps.

### Streets (`streets-v8`)

A complete basemap, perfect for incorporating your own data.

### Light (`light-v8`)

Subtle light backdrop for data visualizations.

### Dark (`dark-v8`)

Subtle dark backdrop for data visualizations.

### Emerald (`emerald-v8`)

A versatile style, with emphasis on road networks and public transit.

### Satellite (`satellite-v8`)

A beautiful global satellite and aerial imagery layer.

### Satellite Streets (`satellite-hybrid-v8`)

Global satellite and aerial imagery with unobtrusive labels.

### Empty (`empty-v8`)

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

TBA
