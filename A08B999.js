import { salesList } from './data/sales.js';
import { teamsList } from './data/team.js';
import { bookingList } from './data/booking.js';

const StatusList = ['全部', '完成', '未完成']
const StatusSelector = document.querySelector('#status')
const SalesSelector = document.querySelector('#sales')
const TeamCodeSelector = document.querySelector('#TeamCode')

StatusList.forEach(i => {
  const option = document.createElement('option')
  option.text = i
  option.value = i
  StatusSelector.appendChild(option)
})

salesList.forEach(sales => {
  const option = document.createElement('option')
  option.text = sales.name
  option.value = sales.id
  SalesSelector.appendChild(option)
})

teamsList.forEach(team=> {
  const option = document.createElement('option')
  option.text = team.name
  option.value = team.code
  TeamCodeSelector.appendChild(option)
})
