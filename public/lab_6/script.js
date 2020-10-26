// You may wish to find an effective randomizer function on MDN.

function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}

function sortFunction(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  } if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((fromServer) => {
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      var countries = range(10);
      var count = fromServer.length;

      for (let i = 0; i < countries.length; i++) {
        countries[i] = fromServer[getRandomInt(count)];
      }
      countries.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      if ($('ul')[0]) $('ul').empty();
      else $('form').prepend("<ul class='flex-inner'></ul>");

      for (let i = 0; i < countries.length; i++) {
        $('ul').prepend(
          `<li><input type='checkbox'
          id='country'
          name='${countries[i].code}'
          value='${countries[i].code}'>
          <label for='country'>${countries[i].name}
          </label>
          </li>`)
      }
      console.log('fromServer', fromServer);
    })
    .catch((err) => console.log(err));
});