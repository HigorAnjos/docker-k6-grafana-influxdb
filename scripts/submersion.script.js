import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 18 },// ramp-up
    { duration: '30s', target: 18 }, // periodo de stress
    { duration: '30s', target: 0 },// ramp-down
  ],
};

export default function () {
  http.get('https://www.google.com');
  sleep(1);
}