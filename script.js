var Albums;

// Describe this function...
function setArrayValues() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  Albums = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOT-U8VxGxjtCpMayukEJ67r4DonXd0Praxj-KfOgJZE_6NtE5sYF7EVDZFe-F1pGXKto&usqp=CAU', 'https://i.ibb.co/8xfJtPg/purpleus.jpg', 'https://i.ibb.co/Y32qBHp/parkday.jpg"', 'https://i.ibb.co/qnJ7B37/trainus.jpg', 'https://i.ibb.co/NNCHGMN/michealandme.jpg', 'https://i.ibb.co/4fCXWLs/menuuandme.jpg', 'https://i.ibb.co/8xh28wg/leicester.jpg', 'https://i.ibb.co/G07vysY/emmaandme.jpg', 'https://i.ibb.co/xJxPbVV/bookday.jpg', 'https://i.ibb.co/Bwq3Vpg/francesandme.jpg'];
}


setArrayValues();
let element_title = document.getElementById('title');
element_title.style.color = '#cc0000';
let element_album = document.getElementById('album');
element_album.innerText = Albums[0];


document.getElementById('next').addEventListener('click', (event) => {
  let element_album2 = document.getElementById('album');
  element_album2.setAttribute("src", Albums[0]);
  Albums.push(Albums.shift());
  if (!Albums.length) {
    setArrayValues();
  }

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_album3 = document.getElementById('album');
  element_album3.setAttribute("src", Albums[0]);
  Albums.unshift(Albums.pop());
  if (!Albums.length) {
    setArrayValues();
  }

});