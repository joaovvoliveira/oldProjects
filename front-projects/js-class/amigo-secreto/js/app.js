let listFriends = [];


function addFriend() {
  let list = document.getElementById('friendsList');
  let friendName = document.getElementById('friendsName');
  if(friendName.value == ''){
    alert('Write your friends name !')
    return;
  }

  if(listFriends.includes(friendName.value)){
    alert('Do not repeat the Person.');
    friendName.value = '';
    return;
  }

  listFriends.push(friendName.value);
  if (list.textContent == '') {
    list.textContent = friendName.value;
  } else {
    list.textContent = list.textContent + ', ' + friendName.value;
  }
  friendName.value = '';

  console.log(list.textContent)
}

function drawn() {
  if(listFriends.length <= 3){
    alert('You need at least for 4 friends to play !')
    restart();
  }

  embaralha(listFriends);
  let drawnList = document.getElementById('drawnList');


  for (let i = 0; i < listFriends.length; i++) {
    if (i == listFriends.length - 1) {
      drawnList.innerHTML = drawnList.innerHTML + listFriends[i] + ' --> ' + listFriends[0] + '<br>'
      
    } else {
      drawnList.innerHTML = drawnList.innerHTML + listFriends[i] + ' --> ' + listFriends[i + 1] + '<br>'
    }
  }
}

function restart() {
  listFriends = [];
  document.getElementById('friendsList').innerHTML = '';
  document.getElementById('drawnList').innerHTML = '';
}


function embaralha(lista) {

  for (let indice = lista.length; indice; indice--) {

    const indiceAleatorio = Math.floor(Math.random() * indice);

    // atribuição via destructuring
    [lista[indice - 1], lista[indiceAleatorio]] =
      [lista[indiceAleatorio], lista[indice - 1]];
  }
}