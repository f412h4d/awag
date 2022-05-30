import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react';
import Map, { FullscreenControl, Marker, NavigationControl } from 'react-map-gl';

export const AWAGMap = () => {
  const ACCESS_TOOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const [options, setOptions] = useState({
    viewport: {
      latitude: 48.200027,
      longitude: 16.338707,
      zoom: 16,
    },
  });

  return (
    <Map
      style={{
        position: 'relative',
        top: '0',
        bottom: '0',
        width: '100%',
      }}
      initialViewState={options.viewport}
      onMove={(evt) => setOptions(evt.viewState)}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      mapboxApiAccessToken={ACCESS_TOOKEN}
    >
      <Marker longitude={16.338707} latitude={48.200027} anchor='bottom'></Marker>

      <NavigationControl />
      <FullscreenControl />
    </Map>
  );
};
