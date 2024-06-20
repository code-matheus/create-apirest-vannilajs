document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('user-form');
    const userList = document.getElementById('user-list');

    // Função para carregar usuários
    async function loadUsers() {
        const response = await fetch('/api/users');
        const users = await response.json();
        userList.innerHTML = users.map(user => `<div>${user.name} (${user.email})</div>`).join('');
    }

    // Função para criar um novo usuário
    userForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        });

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        loadUsers();
    });

    loadUsers();
});
