import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import { encrypt } from '../utils';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

const CheckInAndOut = () => {
  const [options, setOptions] = React.useState<CheckInAndOutReturnAbles>({
    start: null,
    end: null,
    guests: 1
  });

  const getParams = () => {
    let params = Object.keys(options).map(function(k: string) {
      let value;
  
      if (typeof {...options}[k] == "number") {
        value = "" + {...options}[k];
      } else {
        value = moment({...options}[k]).format("YYYY-MM-DD");
      }
  
      return encodeURIComponent(k) + "=" + encodeURIComponent(value);
    }).join('&');

    return params;
  }

  return (
    <div className='w-[60%] md:px-8 md:h-32 bg-white shadow-md flex-col md:flex-row h-auto m-auto -translate-y-44 flex justify-between items-center rounded-lg gap-4 md:gap-4 py-4 px-4'>
      <div className='flex justify-center items-center flex-col md:flex-row gap-4 md:gap-0'>
        <div>
          <DatePicker
            label="Check In"
            openTo="day"
            views={['day', 'month']}
            value={options.start}
            minDate={new Date()}
            inputFormat="dd/MM/yyyy"
            onChange={(newValue) => setOptions({ ...options, start: newValue })}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <span className='hidden md:block'>&nbsp;&nbsp;To&nbsp;&nbsp;</span>
        <div>
          <DatePicker
            label="Check Out"
            openTo="day"
            views={['day', 'month']}
            minDate={options.start ?? new Date()}
            value={options.end}
            inputFormat="dd/MM/yyyy"
            onChange={(newValue) => setOptions({ ...options, end: newValue })}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
      </div>
      <div className='flex'>
        <div>
          <TextField
            id="outlined-number"
            label="Guests"
            type="number"
            value={options.guests}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOptions({ ...options, guests: Number(e.target.value) })}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
      <div className="flex md:w-[30%] w-[100%]">
        <Link href={'/rooms/list?_v=' + encrypt(getParams())}>
          <button className='bg-teal-700 w-full text-white rounded-sm p-4'>
            Check Availability
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CheckInAndOut