import { faCaretDown, faCross, faHotTub, faRightFromBracket, faStar, faUtensils, faWifi, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, AppBar, Box, Button, Dialog, Divider, IconButton, List, ListItem, ListItemText, Slide, Toolbar, Typography } from '@mui/material';
import moment, { Moment } from 'moment';
import React from 'react'
import Service from './Service';
import { TransitionProps } from '@mui/material/transitions';
import SplitBox from './SplitBox';
import { dateDiff, encrypt, getBookedMonthDates, getLowestInOnce, getRange } from '../utils';
import Link from 'next/link';

type Props = {
  room: Room,
  filters: {
    minMax: Array<number>,
    featured: boolean
  },
  start: any,
  end: any
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RoomListItem = ({ room, filters, start, end }: Props) => {
  const { featured, minMax } = filters;
  const bookButton = React.useRef<any>();

  const datesAvailiable = room.datesBooked.map((date, idx) => {
    let datesBooked = getBookedMonthDates(room.datesBooked, start, { max: room.max }).map((_: Array<any>) => {
      if (!_[1]) return _[0];
    }).filter((_: any) => _ !== undefined);


    let result = datesBooked.flatMap((_: any) => {
      return !(_.isBetween(start, end) || _.isSame(start) || _.isSame(end));
    });

    return result.filter(res => res === false).length > 0 ? false : true;
  }).filter(res => res == true)[0];

  const [details, setDetails] = React.useState({
    open: false
  });

  const [roomId] = React.useState<string>(encrypt(room._id));

  return (
    <div className={(Number(room.price) < minMax[0] || Number(room.price) > minMax[1] ? 'hidden ' : '') + (featured === true ? (room.isFeatured ? '' : 'hidden ') : '') + "w-full lg:max-w-full flex justify-center items-center md:flex-row md:h-56 h-auto flex-col overflow-hidden"}>
      <div className='flex overflow-hidden h-full md:flex-row flex-col'>
        <div className="h-full lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden relative">
          {
            room.isFeatured ? (
              <div className='absolute top-[10px] left-[10px] flex justify-center items-center gap-2 bg-white py-2 px-2 rounded-sm'>
                <div className='w-6 aspect-square overflow-hidden rounded-full flex justify-center items-center'>
                  <span className='p-4 bg-yellow-500 rounded-none -translate-y-0.5'>
                    <FontAwesomeIcon className='text-white text-xs' icon={faStar} />
                  </span>
                </div>
                <span className='text-xs'>Featured</span>
              </div>
            ) : null
          }
          <img className='w-full object-cover h-full aspect-square' src={room.image} />
        </div>
        <div className="p-4 flex flex-col justify-around pl-6 leading-normal pr-3 bg-white">
          <div className="mb-8">
            {/* <p className="text-sm text-gray-600 flex items-center">
            <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p> */}
            <div className="text-gray-900 capitalize font-bold lg:text-lg xl:text-xl mb-2">{room.type} Room</div>
            <p className="text-gray-700 text-base lg:text-sm">
              {
                room.description.split('\n')[0].toString().replace(/\\n/m, '')
              }
            </p>
          </div>
          <div className='flex justify-start items-center gap-3'>
            {room.services.map(service => (
              <>
                {service.toLowerCase() === "wifi" ? <Service service={service} icon={faWifi} /> : null}
                {service.toLowerCase() === "sauna" ? <Service service={service} icon={faHotTub} /> : null}
                {service.toLowerCase() === "breakfast" ? <Service service={service} icon={faUtensils} /> : null}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className='flex md:flex-col md:max-w-[20%] bg-white h-full justify-between py-2 md:py-0 md:justify-center items-center md:border-l border-t md:border-t-0 w-full pl-6 md:px-6 gap-4'>
        <div className='flex justify-end h-1/2 items-center flex-col text-center'>
          <span className='text-xl w-full font-bold'>₹{room.price}</span>
          <span className='text-xs w-max'>&nbsp;PER NIGHT</span>
        </div>
        {
          datesAvailiable ?
            <div className='h-1/2 md:w-full w-1/2 flex justify-center items-start'>
              <Link href={'/rooms/book?_v=' + roomId + '&_a=' + encrypt(start.format('yyyy-MM-DD') + ' to ' + end.format('yyyy-MM-DD'))}>
                <button ref={bookButton} onMouseLeave={(e) => bookButton.current.innerText = "Book Now"} onMouseEnter={(e) => { bookButton.current.innerText = "₹" + (Number(room.price) + 1) * dateDiff(start, end) }} className='bg-teal-600 w-10/12 text-white px-2 text-sm py-2 cursor-pointer'>Book Now</button>
              </Link>
            </div>
            : (
              <div className='relative flex md:w-full w-2/3 justify-between items-center flex-col h-1/2 mr-3'>
                <Alert severity="error" className='text-sm scale-75 flex justify-center items-center w-[130%]'>Change your dates</Alert>
                <div className='absolute flex-col hidden bottom-0 -left-5 right-0 bg-gray-100 text-sm p-2 md:flex justify-around items-center border w-[135%] mr-0'>
                  <span className='flex text-xs justify-center items-cent cursor-pointer'>
                    <button onClick={() => setDetails({ open: true })}>Availability Details &nbsp;&nbsp;</button>
                    <span>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                  </span>
                </div>
              </div>
            )
        }
      </div>
      <Dialog
        fullScreen
        open={details.open}
        onClose={() => setDetails({ open: false })}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <button onClick={() => setDetails({ open: false })}>
              <span className='text-2xl outline-none'>
                <FontAwesomeIcon icon={faXmark} />
              </span>
            </button>
            <Typography sx={{ ml: 2, flex: 1, textTransform: 'capitalize', fontFamily: 'poppins', fontWeight: 'light' }} variant="h6" component="div">
              {room.type} Room - Availability Details
            </Typography>
          </Toolbar>
        </AppBar>
        <Box className='w-full h-full'>
          <SplitBox>
            <div className='w-2/3 h-full'>
              <img src={room.image} className='h-full object-cover' />
            </div>
            <div className='w-1/3 overflow-hidden h-full py-8 pr-8 font-poppins flex justify-center items-center flex-col'>
              <>
                <div className="capitalize text-2xl font-semibold mb-6">
                  Availability Details - For {moment(start).format('MMMM')}
                </div>
                <div className='flex flex-wrap justify-start items-center mb-3'>
                  <div className={'w-[12.5%] bg-gray-100 shadow-sm aspect-square px-5 my-1 justify-center mx-1 items-center flex'}>
                    <span>
                      Mo
                    </span>
                  </div>

                  <div className={'w-[12.5%] bg-gray-100 shadow-sm aspect-square px-5 my-1 justify-center mx-1 items-center flex'}>
                    <span>
                      Tu
                    </span>
                  </div>
                  <div className={'w-[12.5%] bg-gray-100 shadow-sm aspect-square px-5 my-1 justify-center mx-1 items-center flex'}>
                    <span>
                      We
                    </span>
                  </div>

                  <div className={'w-[12.5%] bg-gray-100 shadow-sm aspect-square px-5 my-1 justify-center mx-1 items-center flex'}>
                    <span>
                      Th
                    </span>
                  </div>

                  <div className={'w-[12.5%] bg-gray-100 shadow-sm aspect-square px-5 my-1 justify-center mx-1 items-center flex'}>
                    <span>
                      Fr
                    </span>
                  </div>
                  <div className={'w-[12.5%] bg-gray-100 shadow-sm aspect-square px-5 my-1 justify-center mx-1 items-center flex'}>
                    <span>
                      Sa
                    </span>
                  </div>
                  <div className={'w-[12.5%] bg-gray-100 shadow-sm aspect-square px-5 my-1 justify-center mx-1 items-center flex'}>
                    <span>
                      Su
                    </span>
                  </div>
                </div>
                <div className='flex flex-wrap justify-start items-center mt-2'>
                  {
                    getBookedMonthDates(room.datesBooked, start, { max: room.max })?.map((date: any, idx: number) => {
                      return (
                        <React.Fragment>
                          {
                            idx === 0 ?
                              [...new Array(date[0].day() - 1)].map((value) => (
                                <div className={'w-[12.5%] aspect-square px-5 my-1 justify-center mx-1 items-center flex'}>
                                  <span></span>
                                </div>
                              ))
                              : null
                          }
                          <div className={'w-[12.5%] aspect-square px-5 my-1 justify-center mx-1 items-center flex' + (date[0].isBefore(moment(new Date()).subtract(1)) ? ' bg-gray-200' : '') + ((date[0].isAfter(moment().subtract(1, 'd')) && date[1]) ? ' bg-teal-300' : '') + ((date[0].isAfter(moment().subtract(1, 'd')) && !date[1]) ? ' bg-rose-200' : '')}>
                            <span>
                              {date[0].format("DD")}
                            </span>
                          </div>
                        </React.Fragment>
                      )
                    })
                  }
                </div>
              </>
            </div>
          </SplitBox>
        </Box>
      </Dialog>
    </div>
  )
}

export default RoomListItem