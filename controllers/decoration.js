const { Request, Response } = require('express');

class Decoration {
  /**
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  static images(req, res) {
    return res.status(200).send([
      {
        heading: 'Welcome to Hotel.com',
        subheading: 'Live your Myth in greece',
        url: 'https://demo.zantetheme.com/wp-content/uploads/2018/02/slider-1.jpg'
      },
      {
        heading: 'ENJOY YOUR HOLIDAYS',
        subheading: 'Navagio Beach',
        url: 'https://demo.zantetheme.com/wp-content/uploads/2018/04/slider-3.jpg'
      },
      {
        heading: 'TOUCH THE DREAM',
        subheading: 'Family Room for $29 per night',
        url: 'https://demo.zantetheme.com/wp-content/uploads/2018/04/slider-2.jpg',
      },
      {
        heading: 'Amazing Nature',
        subheading: 'MiniGoa',
        url: 'https://d1rytvr7gmk1sx.cloudfront.net/wp-content/uploads/2020/04/ca-9.jpg?x59658'
      },
      {
        heading: 'Explore Greece',
        subheading: 'only $19 per night',
        url: 'https://www.eventstodayz.com/wp-content/uploads/2018/04/beautiful-nature-wallpaper.jpg'
      }
    ]);
  }
}

module.exports = Decoration;