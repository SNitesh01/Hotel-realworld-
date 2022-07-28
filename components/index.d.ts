declare type CheckInAndOutReturnAbles = {
  start: Date | null,
  end: Date | null,
  guests: number
}

declare type Room = {
  _id: string,
  type: string,
  isFeatured: boolean,
  description: string,
  image: string,
  services: Array<string>,
  price: string,
  max: number,
  datesBooked: Array<Array<Array<string>|number>>
}