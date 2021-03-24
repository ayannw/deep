import Vue from '../node_modules/vue/dist/vue.esm.browser.min.js';

const clock = new Vue({
  el: '#clock',
  data: {
    time: '',
    date: '',
  },
})!

const zeroPadding = (num: number, digit: number) => {
  let zero: string = '';
  for (let i = 0; i < digit; i++) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
}

const updateTime = () => {
  const cd = new Date()
  clock.time =
    zeroPadding(cd.getHours(), 2) +
    ':' +
    zeroPadding(cd.getMinutes(), 2) +
    ':' +
    zeroPadding(cd.getSeconds(), 2)
  clock.date =
    zeroPadding(cd.getFullYear(), 4) +
    '-' +
    zeroPadding(cd.getMonth() + 1, 2) +
    '-' +
    zeroPadding(cd.getDate(), 2) +
    ' ' +
    week[cd.getDay()];
}

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const timerID = setInterval(updateTime, 1000);
updateTime();