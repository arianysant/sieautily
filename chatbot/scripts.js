document.addEventListener('DOMContentLoaded', () => {
    const floatButton = document.getElementById('floatButton');
    const chatbox = document.getElementById('chatbox');
    const closeButton = document.getElementById('closeButton');
    const messages = document.getElementById('messages');
    const options = document.getElementById('options');

    // Mensagens e opções predefinidas
    const responses = {
        "inicial": [
            { text: "Oi, Como posso te ajudar?", options: ["Sobre o APP", "Sobre o Site do APP", "Dúvidas Frequentes(FAQ)"] }
        ],
        "Ajuda sobre o APP": [
            { text: "Qual é a sua dúvida?", options: ["Sobre a minha conta", "Sobre ", "Desenvolvimento "] }
        ],
        "Site": [
            { text: "Qual é a sua dúvida?", options: ["Como posso encontrar?", "Desenvolvedores"] }
        ],
        "local": [
            { text: "Pesquise em seu navegador,  autily.com.br"}
        ],
        "desenvolvedores": [
            { text: "Nossos desenvolvedores são 5 alunos da ETEC de Ribeirão Pires, que colocaram essa ideia em prática no ano de 2024."}
        ],

        "Conta":[
            {text: "Qual o problema?", options: ["Como edito minhas informações de perfil?", ]}
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
        addMessage(' ' + response.text, 'assistant');

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
    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message ' + sender; // Adiciona a classe do balão de mensagem
        messageElement.textContent = message;
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight; // Auto-scroll para o fim
    }

    // Lida com a opção selecionada
    function handleOption(option) {
        addMessage(option, 'user');
        // Sobre o APP
        if (option === "Sobre o APP") {
            showResponse('Ajuda sobre o APP');
        } 
        // Sobre o SITE
        else if (option === "Sobre o Site do APP") {
            showResponse('Site');
        } 
         // Local
         else if (option === "Como posso encontrar?") {
            showResponse('local');
        } 
         // Desenvolvedores
         else if (option === "Desenvolvedores") {
            showResponse('desenvolvedores');
        } 
        // Sobre a conta
        else if (option === "Sobre a minha conta") {
            showResponse('Conta');
        } 
        else if (option === "Suporte ") {
            showResponse('suporte');
        } 
        else if (option === "Falar com um atendente") {
            showResponse('atendente');
        } else {
            addMessage(' Desculpe, não entendi a sua opção.', 'assistant');
        }
    }

    // Inicializa o chatbox
    showResponse('inicial');
});
