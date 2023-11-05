class Booking{
  constructor(id, digest, finishMark, deliveryTime,status, orderNo, nos, buyerName, customerName, paxName, departureTime){
    this.id = id;
    this.digest = digest;
    this.finishMark = finishMark;
    this.deliveryTime = deliveryTime;
    this.orderNo = orderNo;
    this.nos = nos;
    this.buyerName = buyerName;
    this.customerName = customerName;
    this.paxName = paxName;
    this.departureTime = departureTime
  }
}

const bookingList = [];
const currentTime = new Date().toISOString().split('T')[0]
for (let i = 1; i <= 10; i++) {
  const booking = new Booking(
    i.toString().padStart(5,'0'),
    `Digest ${i}`,
    false,
    currentTime,
    i.toString().padStart(5,'0'),
    i,
    `Buyer Name ${i}`,
    `Customer Name ${i}`,
    `Pax Name ${i}`,
    currentTime
  );

  bookingList.push(booking);
}

export{bookingList}