import './style.css';

const fetchdata = require('./module/fetchdata.js');
const postData = require('./module/postData.js');

const table = document.querySelector('.table');
const refresh = document.getElementById('refresh');
const btnsubmit = document.getElementById('btn-submit');

const createlist = async () => {
  table.innerHTML = '';
  let newdata = '';
  const setdata = await fetchdata();

  setdata.forEach((item) => {
    newdata = `<tr>
     <td>${item.user}</td>
     <td>${item.score}</td>
    </tr>`;

    table.innerHTML += newdata;
  });
};
createlist();

refresh.addEventListener('click', () => {
  window.location.reload();
});

btnsubmit.addEventListener('click', () => {
  const user = document.getElementById('user').value;
  const score = document.getElementById('score').value;

  if (user === '' || score === '') {
    alert('Please Enter the Field');
  } else {
    postData(user, score);
    document.getElementById('user').value = '';
    document.getElementById('score').value = '';
  }

  createlist();
});