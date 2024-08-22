import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "100vw", height: "100vh" }}
      >
        <TileLayer
          url={`https://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&scale=2&hl=en&gl=US&AIzaSyCyQtqLWjG5qYbwxLNjKoXZFci0nC5poaA`}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
      </MapContainer>
    </>
  );
};

export default Map;
