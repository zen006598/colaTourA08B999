import { salesList } from './data/sales.js';
import { teamsList } from './data/team.js';
import { bookings } from './data/booking.js';

const StatusList = ['全部', '完成', '未完成']
const StatusSelector = document.querySelector('#status')
const SalesSelector = document.querySelector('#sales')
const TeamCodeSelector = document.querySelector('#TeamCode')
const bookingList = document.querySelector('#bookingList')

// set bookings
bookings.forEach(booking => {
  const bookingItem = `
  <div class="booking">
    <div class="bookingHeader">
      <h2 class="digest">${booking.digest}</h2>
    </div>
    <div class="bookingBody">
      <div class="bookingInfo">
        <div>配送時間：${booking.deliveryTime}</div>
        <div>預訂單號:${booking.id}</div>
        <div>購票單號:${booking.orderNo}</div>
        <div>預訂單狀態:
          <span class="bookingStatus">${booking.status}</span>
          <span class="bookingNos">${booking.nos}</span>
        </div>
        <div class="buyererName">訂購姓名:${booking.buyerName}</div>
        <div class="customerName">客戶姓名:${booking.customerName}</div>
        <div class="paxName">旅客:${booking.paxName}</div>
        <div class="departureTime">出發日期:${booking.departureTime}</div>
      </div> 
      <div class="bookingOption">
        <button class="bookingBtn btn">下單</button>
        <div class="finishOption">
          <span>完成:</span>
          <input type="checkbox" class="finishCkb">
        </div>
      </div>
    </div>
  </div>`;
  bookingList.insertAdjacentHTML('afterbegin', bookingItem)
})

// set Sales & Team & booking status
function createOption(text, value, selectElement) {
  const option = document.createElement('option');
  option.text = text;
  option.value = value;
  selectElement.appendChild(option);
}

StatusList.forEach(i => {
  createOption(i, i, StatusSelector);
});

salesList.forEach(sales => {
  createOption(sales.name, sales.id, SalesSelector);
});

teamsList.forEach(team => {
  createOption(team.name, team.code, TeamCodeSelector);
});