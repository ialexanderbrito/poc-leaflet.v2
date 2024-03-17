import { useEffect, useState } from 'react';

import Leaflet, { LeafletMouseEvent } from 'leaflet';
import Swal from 'sweetalert2';

export function useLeaflet() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [center, setCenter] = useState({ latitude: 0, longitude: 0 });
  const [radius, setRadius] = useState(1000);
  const [enableRadius, setEnableRadius] = useState(false);

  const mapIcon = Leaflet.icon({
    iconUrl:
      'https://upload.wikimedia.org/wikipedia/commons/9/9e/Pin-location.png',
    iconSize: [32, 32],
    popupAnchor: [0, -6],
  });

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function convertMeterToKilometer(meter: number) {
    return meter / 1000;
  }

  function handleSaveLocation() {
    localStorage.setItem('@maps:latitude', String(position.latitude));
    localStorage.setItem('@maps:longitude', String(position.longitude));

    if (!enableRadius) {
      localStorage.removeItem('@maps:radius');
      Swal.fire({
        title: 'Localização salva!',
        text: `Você salvou a localização: \nLatitude: ${position.latitude}; \nLongitude: ${position.longitude}.`,
        html:
          '<br>Latitude: ' +
          position.latitude +
          '<br>Longitude: ' +
          position.longitude,
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: 'blueviolet',
      });
      return;
    }

    localStorage.setItem('@maps:radius', String(radius));
    Swal.fire({
      title: 'Localização salva!',
      text: `Você salvou a localização: \nLatitude: ${position.latitude}; \nLongitude: ${position.longitude}. \nCom raio de ${convertMeterToKilometer(radius)} km`,
      html:
        '<br>Latitude: ' +
        position.latitude +
        '<br>Longitude: ' +
        position.longitude +
        '<br>Com raio de ' +
        convertMeterToKilometer(radius) +
        ' km',
      icon: 'success',
      confirmButtonText: 'Ok',
      confirmButtonColor: 'blueviolet',
    });
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      Swal.fire({
        title: 'Erro!',
        html: 'Não foi possível obter a sua localização<br>Por favor, aceite a permissão de localização e recarregue a página.',
        icon: 'error',
        confirmButtonText: 'Recarregar',
        confirmButtonColor: 'blueviolet',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      setCenter({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    const latitude = localStorage.getItem('@maps:latitude');
    const longitude = localStorage.getItem('@maps:longitude');
    const radius = localStorage.getItem('@maps:radius');

    if (latitude && longitude && radius) {
      setPosition({
        latitude: Number(latitude),
        longitude: Number(longitude),
      });
      setCenter({
        latitude: Number(latitude),
        longitude: Number(longitude),
      });

      setRadius(Number(radius));
      setEnableRadius(true);
    }

    if (latitude && longitude && !radius) {
      setPosition({
        latitude: Number(latitude),
        longitude: Number(longitude),
      });
      setCenter({
        latitude: Number(latitude),
        longitude: Number(longitude),
      });

      setRadius(1000);
      setEnableRadius(false);
    }
  }, []);

  return {
    position,
    center,
    radius,
    enableRadius,
    handleMapClick,
    convertMeterToKilometer,
    handleSaveLocation,
    setRadius,
    setEnableRadius,
    mapIcon,
  };
}
