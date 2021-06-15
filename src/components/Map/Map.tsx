import React, { useState, useEffect } from 'react';

import * as ol from 'ol';
// import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat, toLonLat } from 'ol/proj';
import XYZ from 'ol/source/XYZ';

import { MapBox } from './Map-style';

interface MapProps {
  onClick(e: ol.MapBrowserEvent): void;
}


const Map: React.FC<MapProps> = ({ onClick }) => {
  const [map, setMap] = useState<ol.Map>(initializeMap);

  useEffect(() => {
    map.setTarget("map-box");
    map.on('click', onClick);

    return () => {
      map.dispose();
    }
  }, [map]);

  return (
    <MapBox id="map-box" />
  )
}

export default Map;

function initializeMap(): ol.Map {
  console.log('initializing map')
  const map = new ol.Map({
    layers: [
      new TileLayer({
        source: new XYZ({
          url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        })
      })
    ],
    view: new View({
      center: fromLonLat([19.916, 50.067]),
      zoom: 15
    })
  });

  return map;
}
