import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
class Booking{
  constructor(id, digest, finishMark, deliveryTime,status, orderNo, nos, buyerName, customerName, paxName, departureTime){
    this.id = id;
    this.digest = digest;
    this.finishMark = finishMark;
    this.deliveryTime = deliveryTime;
    this.status = status;
    this.orderNo = orderNo;
    this.nos = nos;
    this.buyerName = buyerName;
    this.customerName = customerName;
    this.paxName = paxName;
    this.departureTime = departureTime
  }
}

const paxName = faker.person.fullName()

const bookingList = [];
const currentTime = new Date().toISOString().split('T')[0]
for (let i = 1; i <= 10; i++) {
  const booking = new Booking(
    i.toString().padStart(5,'0'),
    `${faker.airline.airline().name} - ${faker.location.country()}`,
    false,
    currentTime,
    'KK',
    i.toString().padStart(5,'0'),
    i,
    faker.person.fullName(),
    paxName,
    paxName,
    currentTime
  );

  bookingList.push(booking);
}
export{bookingList as bookings}