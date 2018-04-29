const url = './slatko.json';
const init = () => {
  const renderList = (data) => {
    let table = document.querySelector('table');
    let ul = document.querySelector('ul');
    table.classList.add('dn');
    ul.classList.remove('dn');
    let inner = '';
    for (let i of data) {
      inner += '<li>' + i.name + '</li>';
    }
    ul.innerHTML = inner;
    document.body.appendChild(ul);
  };

  const renderTable = (data) => {
    let table = document.querySelector('table');
    let ul = document.querySelector('ul');
    table.classList.remove('dn');
    ul.classList.add('dn');
    let tbody = document.querySelector('tbody');
    let inner = '';
    for (let tr of data) {
      inner += '<tr>';
      for (let td in tr) {
        inner += '<td>' + tr[td]  + '</td>';
      }
      inner += '</tr>';
    }
    tbody.innerHTML = inner;
  };

  const onFetchSuccess = (data) => {
    const radioButtons = document.querySelectorAll('input');
    for (let rb of radioButtons) {
      rb.addEventListener('click', function (ev) {
        if (ev.currentTarget.value === 'table') {
          renderTable(data);
        } else {
          renderList(data);
        }
      });
    }

  };

  fetch(url)
    .then(data => data.json())
    .then((res) => {
      onFetchSuccess(res);
    })
    .catch(err => console.error(err));
};

document.addEventListener('DOMContentLoaded', function () {
  init();
});
