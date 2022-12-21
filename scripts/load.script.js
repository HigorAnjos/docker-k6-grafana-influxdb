import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '60s', target: 4 }, //ramp-up from 1 to 4 VUs in 60 seconds
    { duration: '60s', target: 4 },//period of 60 seconds at 4 VUs (stress test)
    { duration: '60s', target: 0 },//ram-down from 4 to 0 VUs in 60 seconds

  ],
};

export default function () {
  http.get('https://www.google.com');
  sleep(1);
}