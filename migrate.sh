# This script must be run via "npm run migrate" in order for the PATH to be set properly

set -e

gl-style-migrate styles/basic-v7.json > styles/basic-v8.json
gl-style-migrate styles/bright-v7.json > styles/bright-v8.json
gl-style-migrate styles/dark-v7.json > styles/dark-v8.json
gl-style-migrate styles/emerald-v7.json > styles/emerald-v8.json
gl-style-migrate styles/empty-v7.json > styles/empty-v8.json
gl-style-migrate styles/light-v7.json > styles/light-v8.json
gl-style-migrate styles/mapbox-streets-v7.json > styles/streets-v8.json
