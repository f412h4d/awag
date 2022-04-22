// import React, {
//   useState,
//   useEffect,
//   useRef,
//   useDeepCompareEffectForMaps,
// } from "react";
// import { Wrapper, Status, google } from "@googlemaps/react-wrapper";
// const Map = ({ onClick, onIdle, children, style, ...options }) => {
//   const ref = useRef(null);
//   const [map, setMap] = useState();

//   useEffect(() => {
//     if (ref.current && !map) {
//       setMap(new window.google.maps.Map(ref.current, {}));
//     }
//   }, [ref, map]);

//   useDeepCompareEffectForMaps(() => {
//     if (map) {
//       map.setOptions(options);
//     }
//   }, [map, options]);

//   const Marker = (options) => {
//     const [marker, setMarker] = React.useState();

//     React.useEffect(() => {
//       if (!marker) {
//         setMarker(new google.maps.Marker());
//       }

//       // remove marker from map on unmount
//       return () => {
//         if (marker) {
//           marker.setMap(null);
//         }
//       };
//     }, [marker]);
//     React.useEffect(() => {
//       if (marker) {
//         marker.setOptions(options);
//       }
//     }, [marker, options]);
//     return null;
//   };

//   useEffect(() => {
//     if (map) {
//       ["click", "idle"].forEach((eventName) =>
//         google.maps.event.clearListeners(map, eventName)
//       );
//       if (onClick) {
//         map.addListener("click", onClick);
//       }

//       if (onIdle) {
//         map.addListener("idle", () => onIdle(map));
//       }
//     }
//   }, [map, onClick, onIdle]);

//   return (
//     <>
//       <div ref={ref} style={style}></div>
//     </>
//   );
// };

// export default Map;
