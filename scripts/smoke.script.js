import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '60s', target: 10 },
  ],
};

export default function () {
  http.get('https://www.google.com');
  sleep(1);
}