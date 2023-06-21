import imagefirst from '../images/gentle-deodorant-for-sensitive-skin-the-natural-deodorant.jpg';
import imagesecond from '../images/21.05.27---Berry-Bottle-smaller-1_570x.webp';
import imagethird from '../images/Refill---Neroli---Cart-Image_a7b0a01a-8e2b-4591-9e9d-137a80c5467a_570x.webp';
import imagefourth from '../images/21.05.27-Berry-Subscription-smaller_570x.webp';

const data = {
    products: [
      {
        id: '1',
        name: 'Toothpaste Bits',
        description: 'Lorem ipsum sit amep dalde locuas sim',
        price: '1400',
        smallprice: '1300',
        quantity: 1,
        image: imagefirst,
      },
      {
        id: '2',
        name: 'Body Balm',
        description: 'Lorem ipsum sit amep dalde locuas sim',
        price: '2400',
        smallprice: '2100',
        quantity: 1,
        image: imagesecond,
      },
      {
        id: '3',
        name: 'Cleansing Bar',
        description: 'Lorem ipsum sit amep dalde locuas sim',
        price: '1000',
        smallprice: '800',
        quantity: 1,
        image: imagethird,
      },
      {
        id: '4',
        name: 'Trucking',
        description: 'Lorem ipsum sit amep dalde locuas sim',
        price: '2000',
        smallprice: '1600',
        quantity: 1,
        image: imagefourth,
      },
      {
        id: '5',
        name: 'fifth product',
        description: 'Lorem ipsum sit amep dalde locuas sim',
        price: '1400',
        smallprice: '1200',
        quantity: 1,
        image: imagefirst,
      },
      {
        id: '6',
        name: 'sixth Balm',
        description: 'Lorem ipsum sit amep dalde locuas sim',
        price: '2400',
        smallprice: '2200',
        quantity: 1,
        image: imagesecond,
      },
      {
        id: '7',
        name: 'seventh Bar',
        description: 'Lorem ipsum sit amep dalde locuas sim',
        price: '1000',
        smallprice: '900',
        quantity: 1,
        image: imagethird,
      },
      {
        id: '8',
        name: 'eigth Trucking',
        description: 'Lorem ipsum sit amep dalde locuas sim',
        price: '2000',
        smallprice: '1800',
        quantity: 1,
        image: imagefourth,
      },
      {
        id: '9',
        name: 'Ninth Toothpaste Bits',
        description: 'Lorem ipsum sit amep dalde locuas sim',
        price: '1400',
        smallprice: '1200',
        quantity: 1,
        image: imagefirst,
      },
      {
        id: '10',
        name: 'Tenth Body Balm',
        description: 'Lorem ipsum sit amep dalde locuas sim',
        price: '2400',
        smallprice: '2000',
        quantity: 1,
        image: imagesecond,
      },
      {
        id: '11',
        name: 'eleventh Cleansing Bar',
        description: 'Lorem ipsum sit amep dalde locuas sim',
        price: '1000',
        smallprice: '900',
        quantity: 1,
        image: imagethird,
      },
      {
        id: '12',
        name: 'twelveth Trucking',
        description: 'Lorem ipsum sit amep dalde locuas sim',
        price: '2000',
        smallprice: '1800',
        quantity: 1,
        image: imagefourth,
      },
    ],
    tax: 12,
    promotions: [
      {
        id: "1",
        code: "SUMMER50",
        category: "SUMMER",
        description: "SHOP FOR RS. 1250 GET",
        discount: "50"
      },
      {
        id: "2",
        code: "AUTUMN40",
        category: "AUTUMN",
        description: "SHOP FOR RS. 2000 GET",
        discount: "40"
      },
      {
        id: "3",
        code: "WINTER30",
        category: "WINTER",
        description: "SHOP FOR RS. 750 GET",
        discount: "30"
      }
    ],
    promoCode: "",
    discount: 0,
    itemCount: 0
  };
  export default data;
  