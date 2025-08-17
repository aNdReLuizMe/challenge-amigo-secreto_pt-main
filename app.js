let friends = [];
const originalTitle = "Digite o nome dos seus amigos:";

function showTemporaryMessage(message) {
  const sectionTitle = document.querySelector(".section-title");
  sectionTitle.textContent = message;
  
  setTimeout(() => {
    sectionTitle.textContent = originalTitle;
  }, 3000);
}

function restoreOriginalTitle() {
  document.querySelector(".section-title").textContent = originalTitle;
}

document.addEventListener('DOMContentLoaded', function() {
  const inputAmigo = document.getElementById("amigo");
  inputAmigo.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addFriend();
    }
  });
});

function addFriend() {
  const friendName = document.getElementById("amigo").value;

  if (friendName.trim() === "") {
    showTemporaryMessage("Insira um nome para clicar em adicionar");
  } else {
    friends.push(friendName.trim());
    document.querySelector("#amigo").value = "";
    restoreOriginalTitle();

    showsFriendsList();
  }
}

function showsFriendsList() {
  const listaAmigos = document.querySelector("#listaAmigos");
  
  if (!listaAmigos) {
    console.error('Elemento #listaAmigos não encontrado!');
    return;
  }
  
  listaAmigos.innerHTML = "";

  for (let index = 0; index < friends.length; index++) {
    const element = friends[index];

    const listaHTML = document.createElement("li");
    listaHTML.className = "friend-item";
    
    listaHTML.innerHTML = `
      <span class="friend-name">${element}</span>
      <div class="friend-actions">
        <button class="btn-edit" onclick="editFriend(${index})" title="Editar nome">
          ✏️
        </button>
        <button class="btn-delete" onclick="deleteFriend(${index})" title="Excluir nome">
          🗑️
        </button>
      </div>
    `;
    
    listaAmigos.appendChild(listaHTML);
  }
}

function drawFriend() {
  const numberOfFriends = friends.length;
  
  if (numberOfFriends === 0) {
    showTemporaryMessage("Insira um nome antes de sortear");
  } else {
    const friendIndex = Math.floor(Math.random() * numberOfFriends);
    const htmlResults = document.querySelector("#resultado");
    htmlResults.innerHTML = friends[friendIndex];
    
    document.getElementById("resetButton").style.display = "inline-block";
  }
}

function resetGame() {
  friends = [];
  
  document.querySelector("#listaAmigos").innerHTML = "";
  document.querySelector("#resultado").innerHTML = "";
  document.querySelector("#amigo").value = "";
  
  restoreOriginalTitle();
  
  document.getElementById("resetButton").style.display = "none";
}

function deleteFriend(index) {
  friends.splice(index, 1);
  
  showsFriendsList();
  
  if (friends.length === 0) {
    document.getElementById("resetButton").style.display = "none";
    document.querySelector("#resultado").innerHTML = "";
  }
}

function editFriend(index) {
  const friendNameSpan = document.querySelectorAll('.friend-name')[index];
  const currentName = friends[index];
  
  friendNameSpan.innerHTML = `
    <input type="text" class="edit-input" value="${currentName}" 
           onblur="saveEdit(${index}, this.value)" 
           onkeypress="handleEditKeypress(event, ${index}, this.value)">
  `;
  
  const input = friendNameSpan.querySelector('.edit-input');
  input.focus();
  input.select();
}

function saveEdit(index, newName) {
  const trimmedName = newName.trim();
  
  if (trimmedName !== "" && trimmedName !== friends[index]) {
    friends[index] = trimmedName;
  }
  
  showsFriendsList();
}

function handleEditKeypress(event, index, value) {
  if (event.key === 'Enter') {
    saveEdit(index, value);
  } else if (event.key === 'Escape') {
    showsFriendsList();
  }
}