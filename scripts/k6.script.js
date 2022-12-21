import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '60s', target: 200 },
    { duration: '60s', target: 1000 },
    { duration: '0s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://www.google.com');
  sleep(1);
}
// docker-compose run k6 run /scripts/k6.script.js 