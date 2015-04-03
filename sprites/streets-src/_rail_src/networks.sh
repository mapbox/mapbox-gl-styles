#!/bin/bash

# Update this list based on running against a planet DB:
# > SELECT DISTINCT(network) FROM carto_rail_station;
NETWORKS="
dlr.london-underground.national-rail
dlr.london-overground.london-underground.national-rail
london-underground.national-rail
london-overground.london-underground
london-overground.london-underground.national-rail
dlr.national-rail
london-overground.national-rail
dlr.london-underground"

for LINE in $NETWORKS; do
  $(dirname $0)/networks.js $LINE
done;
