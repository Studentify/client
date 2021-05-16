import React, { useState, useEffect } from "react";

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import XYZ from 'ol/source/XYZ';

import { MapWrapper, MapElement } from "./EventMap-style";


const EventMap = () => {
  const [map, setMap] = useState<Map>(new Map({
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
  }));

  useEffect(() => {
    map.setTarget("map");
  }, [])

  return (
    <MapWrapper>
      <MapElement id="map"></MapElement>
    </MapWrapper>
  )
}

export default EventMap;
