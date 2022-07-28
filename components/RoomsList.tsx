import React from 'react'
import RoomListItem from './RoomListItem'
import { FormControl, InputLabel, MenuItem, Select, Slider, TextField } from '@mui/material';
import moment from 'moment';

type Props = {
  rooms: Array<Room>,
  filters: {
    minMax: Array<number>
    featured: boolean
  },
  start: any,
  end: any
}

const RoomsList = ({ rooms, filters: _filters, start, end }: Props) => {
  const [filters, setFilters] = React.useState("lh");
  const [_rooms, setRooms] = React.useState(rooms.sort((a: any, b:any) => a.price - b.price));

  return (
    <>
      <div className='flex justify-end items-center mb-4 ml-4 p-4 mr-4 bg-white'>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Filters&nbsp;&nbsp;</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={filters}
            label="Age"
            onChange={(e: any) => setFilters(e.target.value)}
          >
            <MenuItem value={"lh"}>Price: Low To High</MenuItem>
            <MenuItem value={"hl"}>Price: High To Low</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={'w-full flex justify-center items-center flex-col gap-8 px-4' + (filters === "hl" ? ' flex-col-reverse' : '')}>
        {_rooms.map((room, _) => <RoomListItem start={moment(start)} end={moment(end)} filters={_filters} key={'room_' + _} room={room} />)}
      </div>
    </>
  )
}

export default RoomsList