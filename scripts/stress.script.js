import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 3 }, // Abaixo da carga normal
    { duration: '5m', target: 3 }, 
    { duration: '2m', target: 5 }, // carga load 
    { duration: '5m', target: 5 }, 
    { duration: '2m', target: 7 }, // perto do ponto de stress
    { duration: '5m', target: 7 },
    { duration: '2m', target: 10 }, // alem do ponto de stress
    { duration: '5m', target: 10 },
    { duration: '10m', target: 0 }, // ramp-down. Estagio de recuperacao
  ],
};

export default function () {
  http.get('https://www.google.com');
  sleep(1);
}