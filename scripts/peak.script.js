import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 3 }, // Abaixo da carga normal
    { duration: '1m', target: 3 },
    { duration: '10s', target: 16 }, // pico para 16 usuarios
    { duration: '3m', target: 16 }, // mantem os 14 usuarios por 3 minutos
    { duration: '10s', target: 3 }, // ramp-down. Estagio de recuperacao
    { duration: '3m', target: 3 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  http.get('https://www.google.com');
  sleep(1);
}