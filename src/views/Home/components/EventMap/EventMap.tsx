import React, { useState, useEffect } from "react";

import Map from "ol/Map";
import * as ol from "ol";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import XYZ from "ol/source/XYZ";

import { MapWrapper, MapElement } from "./EventMap-style";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Cluster from "ol/source/Cluster";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Icon, Style, Text, Fill, Stroke, Circle } from 'ol/style';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import Overlay from 'ol/Overlay';
import EventPopup from '../EventPopup';

import { Event } from '../../Home';


const eventIcon = new Style({
  image: new Icon({
    anchor: [0.5, 46],
    anchorXUnits: IconAnchorUnits.FRACTION,
    anchorYUnits: IconAnchorUnits.PIXELS,
    size: [40, 40],
    src: './rsz_marker.png',
  }),
});

function createClusterIcon(size: number): Style {
  return new Style({
    image: new Circle({
      radius: 20,
      stroke: new Stroke({
        color: '#fff',
      }),
      fill: new Fill({
        color: '#3399CC',
      }),
    }),
    text: new Text({
      text: size.toString(),
      fill: new Fill({
        color: '#fff',
      }),
    }),
  });
}

const EventMap = ({ events = [] }: { events: Event[] }) => {
  // const [markers, setMarkers] = useState<Event[]>(events);
  const popupRef = React.useRef<HTMLDivElement>(null);
  const eventsRef = React.useRef<Event[]>();
  eventsRef.current = events;

  const [event, setEvent] = useState<Event>();

  const [popup, setPopup] = useState<Overlay>(new Overlay({}));
  const pRef = React.useRef<Overlay>();
  pRef.current = popup;

  const [feturesLayers, setFeaturesLayer] = useState(new VectorLayer({
    source: new Cluster({
      source: new VectorSource({
        features: events.map(evt => {
          const feature = new Feature({
            geometry: new Point(fromLonLat([evt.location.coordinates.longitude, evt.location.coordinates.latitude])),
            name: evt.name,
            id: evt.id,
            style: eventIcon
          });
  
          feature.setStyle(eventIcon);
  
          return feature;
        })
      }),
      distance: 30,
    }),
    style: function (feature) {
      const size = feature.get('features').length as number;
      return size === 1 ? eventIcon : createClusterIcon(size);
    }
  }));

  const [map, setMap] = useState<Map>(new Map({
    layers: [
      new TileLayer({
        source: new XYZ({
          url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        })
      }),
      feturesLayers
    ],
    view: new View({
      center: fromLonLat([19.916, 50.067]),
      zoom: 15,
      
    }),
  }));
  const mapRef = React.useRef<Map>();
  mapRef.current = map;

  const handleClick = async (e: ol.MapBrowserEvent) => {
    const features = map.getFeaturesAtPixel(e.pixel, { layerFilter: layer => layer === feturesLayers });

    if (features.length > 0) {
      if (mapRef.current && pRef.current) {
        mapRef.current.removeOverlay(pRef.current);
        pRef.current.setPosition(e.coordinate);
        mapRef.current.addOverlay(pRef.current);
      }

      if (eventsRef.current) {
        const relatedEvent = eventsRef.current.find(event => event.id === features[0].get('features')[0].get('id'));
        if (relatedEvent) {
          setEvent(relatedEvent);
        }
      }
    } else {
      if (pRef.current) {
        pRef.current.setPosition(undefined);
      }
    }
  }

  useEffect(() => {
    popup.setPosition(undefined);
    popup.setElement(popupRef.current!);
    map.setTarget("map");
    map.on("click", handleClick);

    return () => {
      feturesLayers.dispose();
      map.dispose();
    }
  }, [])

  useEffect(() => {
    const features = events.map(evt => {
      const feature =  new Feature({
        geometry: new Point(fromLonLat([evt.location.coordinates.longitude, evt.location.coordinates.latitude])),
        name: evt.name,
        id: evt.id,
      });

      feature.setStyle(eventIcon);

      return feature;
    });

    feturesLayers.setSource(
      new Cluster({
        source: new VectorSource({
          features: features
        }),
        distance: 30
      })
    )
  }, [events])

  return (
    <MapWrapper>
      <MapElement id="map"></MapElement>
      <EventPopup event={event} ref={popupRef}/>
    </MapWrapper>
  )
}

export default EventMap;