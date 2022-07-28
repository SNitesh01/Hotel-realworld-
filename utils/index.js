import CryptoJS from 'crypto-js';
import moment from 'moment';

const encrypt = (text) => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text)).replace(/==$/gm, '');
};

const decrypt = (data) => {
  return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
}

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

function getMonthDates(today) {
  let start = moment(today).clone().startOf('month');
  let end = moment(today).clone().endOf('month');
  let days = end.add(1, 'd').diff(start, 'days');

  let range = []
  for (let i = 0; i < days; i++) {
    let computedDate = moment(start).add(i, 'd');

    range.push(
      [
        computedDate,
      ]
    )
  }

  return range;
}

function getRange(_startDate, _endDate, starting) {
  let range = getMonthDates(starting);

  _startDate.map((startDate, idx) => {
    let fromDate = moment(startDate)
    let toDate = moment(_endDate[idx])

    for (let i = 0; i < range.length; i++) {
      if (range[i][1] === undefined || range[i][1] === false)
        range[i][1] = range[i][0].isBetween(fromDate, toDate) || range[i][0].isSame(fromDate) || range[i][0].isSame(toDate);
    }
  })

  return range;
}

const dateDiff = (start, end) => {
  let _start = moment(start)
  let _end = moment(end)
  
  return _end.diff(_start, 'days')
}

const getLowestInOnce = (len) => {
  return Number([...new Array(len)].flatMap((num, idx) => {
    if (idx === 0) return 1;
    else return 0
  }).join(''))
}

const getBookedMonthDates = (array, start, options = { max: 10 }) => {
  const month = getMonthDates(start);

  if (array.length < -1 ) return (
    month.map(date => [date[0], true])
  );

  let dates = array.map((date) => date[0][0]);
  let _org_dates = [];

  array.map((date) => {
    _org_dates.push([date[0], date[2]])
    _org_dates.push([date[1], date[2]])
  });

  const count = [];
  const _org_only_dates = _org_dates.flatMap(date => date[0]);
  
  _org_only_dates.map((date, _) => {
    let idx = _org_only_dates.indexOf(date);
    
    if (count[idx] === undefined) 
    count[idx] = [_org_dates[_][0][0], Number(_org_dates[_][1])];
    else
    count[idx][1] += Number(_org_dates[_][1]);
  });

  return month.map(date => {
    let idx = _org_only_dates.indexOf(date[0].format("yyyy-MM-DD"));

    if (idx > -1)
      if (count[idx][1] >= options.max) return [date[0], !true];

    return [date[0], !false];
  });

}

export {
  getBookedMonthDates,
  dateDiff,
  encrypt,
  decrypt,
  debounce,
  getRange,
  getMonthDates,
  getLowestInOnce
}