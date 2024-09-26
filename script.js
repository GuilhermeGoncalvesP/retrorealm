let isLoggedIn = false; // Para controlar se o usuário está logado

function showSignup() {
    const signupForm = document.getElementById('signup-form');
    signupForm.classList.toggle('hidden');
}

function searchGame() {
    const query = document.getElementById('search').value.toLowerCase();
    const games = document.querySelectorAll('.game-item');

    games.forEach(game => {
        const title = game.querySelector('h3').textContent.toLowerCase();
        const description = game.querySelector('p').textContent.toLowerCase();
        game.style.display = (title.includes(query) || description.includes(query)) ? 'block' : 'none';
    });
}

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
    isLoggedIn = true; // Atualiza o estado de login
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('games-list').classList.remove('hidden'); // Mostra a lista de jogos
});

function handleDownload(gameTitle) {
    if (!isLoggedIn) {
        alert('Você precisa se cadastrar antes de baixar o jogo.');
        return;
    }
    
    alert(`Você clicou em Download para ${gameTitle}.`);
}

// Inicialização
window.onload = function() {
    document.getElementById('games-list').classList.remove('hidden'); // Mostra a lista de jogos
};
