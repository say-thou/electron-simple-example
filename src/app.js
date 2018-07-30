const moment = require('moment');
const btn = document.getElementById('btn');
const text = document.getElementById('text');
btn.addEventListener('click', function () {
	text.innerHTML = moment().format('YYYY-MM-DD HH:mm:ss');
});
