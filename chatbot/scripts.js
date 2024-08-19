document.addEventListener('DOMContentLoaded', () => {
    const floatButton = document.getElementById('floatButton');
    const chatbox = document.getElementById('chatbox');
    const closeButton = document.getElementById('closeButton');
    const messages = document.getElementById('messages');
    const options = document.getElementById('options');

    // Mensagens e opções predefinidas
    const responses = {
        "inicial": [
            { text: "Olá! Como posso ajudar você hoje?", options: ["Informações sobre nossos serviços", "Suporte técnico", "Falar com um atendente"] }
        ],
        "serviços": [
            { text: "Aqui estão alguns dos nossos serviços:", options: ["Consultoria", "Suporte técnico", "Desenvolvimento de software"] }
        ],
        "suporte": [
            { text: "Qual tipo de suporte você precisa?", options: ["Problemas com o software", "Problemas com hardware"] }
        ],
        "atendente": [
            { text: "Um atendente estará com você em breve." }
        ]
    };

    // Abre e fecha o chatbox
    floatButton.addEventListener('click', () => {
        chatbox.classList.toggle('hidden');
        if (!chatbox.classList.contains('hidden')) {
            showResponse('inicial');
        }
    });

    closeButton.addEventListener('click', () => {
        chatbox.classList.add('hidden');
    });

    // Função para mostrar mensagem e opções
    function showResponse(responseKey) {
        const response = responses[responseKey][0];
        addMessage('Chatbot: ' + response.text);

        // Limpa opções anteriores
        options.innerHTML = '';

        // Adiciona novas opções
        if (response.options) {
            response.options.forEach(option => {
                const button = document.createElement('button');
                button.className = 'option';
                button.textContent = option;
                button.addEventListener('click', () => handleOption(option));
                options.appendChild(button);
            });
        }
    }

    // Adiciona uma mensagem ao chat
    function addMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight;
    }

    // Lida com a opção selecionada
    function handleOption(option) {
        addMessage('Você: ' + option);
        if (option === "Informações sobre nossos serviços") {
            showResponse('serviços');
        } else if (option === "Suporte técnico") {
            showResponse('suporte');
        } else if (option === "Falar com um atendente") {
            showResponse('atendente');
        } else {
            addMessage('Chatbot: Desculpe, não entendi a sua opção.');
        }
    }

    // Inicializa o chatbox
    showResponse('inicial');
});
