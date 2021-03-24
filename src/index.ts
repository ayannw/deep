import Vue from '../node_modules/vue/dist/vue.esm.browser.min.js';

const clock = new Vue({
  el: '#clock',
  data: {
    time: '',
    date: '',
  },
})!

const zeroPadding = (num: number, digit: number): string => {
  let zero: string = '';
  for (let i = 0; i < digit; i++) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
}

const updateTime = (): void => {
  const cd = new Date()!
  clock.time =
    zeroPadding(cd.getHours(), 2) +
    ':' +
    zeroPadding(cd.getMinutes(), 2) +
    ':' +
    zeroPadding(cd.getSeconds(), 2)
  clock.date =
    weekDays[cd.getDay()] +
    ', ' +
    months[cd.getMonth()] +
    ' ' +
    zeroPadding(cd.getDate(), 2);
}

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']!

const timerID = setInterval(updateTime, 1000);
updateTime();