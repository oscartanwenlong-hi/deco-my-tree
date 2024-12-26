document.addEventListener('DOMContentLoaded', () => {
    const createTreeBtn = document.getElementById('create-tree-btn');
    const treeSection = document.getElementById('tree-section');
    const treeNameDisplay = document.getElementById('tree-name-display');
    const addDecorationBtn = document.getElementById('add-decoration-btn');
    const addMessageBtn = document.getElementById('add-message-btn');
    const treeDiv = document.getElementById('tree');
    const messagesList = document.getElementById('messages-list');

    let currentTree = null;

    createTreeBtn.addEventListener('click', () => {
        const treeName = document.getElementById('tree-name').value;
        if (treeName) {
            currentTree = { treeName, decorations: [], messages: [] };
            treeNameDisplay.textContent = treeName;
            treeSection.style.display = 'block';
        }
    });

    addDecorationBtn.addEventListener('click', () => {
        const decoration = document.getElementById('decoration').value;
        if (decoration && currentTree) {
            const decorationEl = document.createElement('div');
            decorationEl.classList.add('decoration');
            decorationEl.style.left = `${Math.random() * 280}px`;
            decorationEl.style.top = `${Math.random() * 380}px`;
            treeDiv.appendChild(decorationEl);
        }
    });

    addMessageBtn.addEventListener('click', () => {
        const message = document.getElementById('message').value;
        if (message && currentTree) {
            const messageItem = document.createElement('li');
            messageItem.textContent = message;
            messagesList.appendChild(messageItem);
        }
    });
});
