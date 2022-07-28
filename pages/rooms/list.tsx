import { DatePicker } from '@mui/x-date-pickers';
import { Checkbox, FormControlLabel, Slider, TextField } from '@mui/material';
import moment from 'moment';
import React from 'react';
import RoomsList from '../../components/RoomsList';
import { decrypt } from '../../utils';

export default function List({ params, rooms }: any) {
  const [start, setStart] = React.useState<string | Date | null>(params.start);
  const [end, setEnd] = React.useState<string | Date | null>(params.end);
  const [guests, setGuests] = React.useState<number>(params.guests);

  const prices = rooms.map((room: Room) => room.price);
  const [min, max] = [
    Math.min(...prices),
    Math.max(...prices)
  ]

  const [featured, setFeatured] = React.useState(false);
  const [price, setPrice] = React.useState([min, max]);

  return (
    <div className='w-screen flex justify-center items-start px-4 py-8'>
      <div className='w-3/12 hidden h-full rounded-sm shadow bg-white p-4 py-8 lg:flex justify-center items-center flex-col gap-6'>
        <div className='w-full flex justify-start items-start flex-col gap-4'>
          <h4 className='font-semibold text-lg'>&nbsp;Booking Details</h4>
          <div className='flex w-full justify-between items-center'>
            <div className='w-full'>
              <TextField
                className='w-full'
                id="outlined-number"
                label="Guests"
                type="number"
                value={guests}
                onChange={(e) => { setGuests(Number(e.target.value)) }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
          <div className='w-full flex justify-center items-center'>
            <div>
              <DatePicker
                label="Check In"
                openTo="day"
                views={['day', 'month']}
                value={start}
                onChange={(e) => { setStart(moment(e).format("YYYY-MM-DD")) }}
                minDate={new Date()}
                inputFormat="dd/MM/yyyy"
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <span className='hidden md:block'>&nbsp;&nbsp;To&nbsp;&nbsp;</span>
            <div>
              <DatePicker
                label="Check Out"
                openTo="day"
                views={['day', 'month']}
                value={end}
                onChange={(e) => { setEnd(moment(e).format("YYYY-MM-DD")) }}
                minDate={moment(start).toDate() ?? new Date()}
                inputFormat="dd/MM/yyyy"
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </div>
        </div>
        <div className='w-full flex justify-start items-start flex-col gap-4'>
          <h4 className='font-semibold text-lg'>&nbsp;Price</h4>
          <div className='flex w-full justify-between items-center'>
            <div className='w-full px-6 mt-6'>
              <Slider
                getAriaLabel={() => 'Price range'}
                value={price}
                min={min}
                marks={prices}
                valueLabelDisplay="on"
                max={max}
                onChange={(val: any) => setPrice(val.target.value)}
                getAriaValueText={(val) => `₹${val}`}
              />
            </div>
          </div>
        </div>
        <div className='w-full flex justify-start items-start flex-col gap-0'>
          <h4 className='font-semibold text-lg'>&nbsp;Filters</h4>
          <div className='flex w-full justify-between items-center px-1'>
            <div className='w-full'>
              <FormControlLabel
                value="end"
                control={<Checkbox value={featured} onChange={(e: any) => setFeatured(!featured)} />}
                label="Featured "
                labelPlacement="end"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen lg:w-9/12'>
        <RoomsList start={start} end={end} filters={{minMax: price, featured}}  rooms={rooms} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const query = context.query;
  query._v += "==";

  const params = decrypt(query._v).split('&');
  let options: any = {};

  params.map((param: string) => {
    const broken: Array<string> = param.split('=');

    options[broken[0]] = broken[1];
  });

  const request = await fetch('http://localhost:8001/api/rooms/all');
  const rooms = await request.json();

  return {
    props: {
      params: options,
      rooms: rooms
    }
  }
}