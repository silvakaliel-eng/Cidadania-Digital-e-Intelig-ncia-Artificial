document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. Controle de Acessibilidade / Modo Escuro
    // ==========================================================================
    const themeToggle = document.getElementById('theme-toggle');
    
    // Verifica se o usuário já tinha preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️ Modo Claro';
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.textContent = '🌓 Modo Escuro';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️ Modo Claro';
            localStorage.setItem('theme', 'dark');
        }
    });

    // ==========================================================================
    // 2. Validador Dinâmico do Quiz Anti-Desinformação
    // ==========================================================================
    const quizForm = document.getElementById('quiz-form');
    const feedbackBox = document.getElementById('quiz-feedback');

    quizForm.addEventListener('submit', (event) => {
        // Impede o recarregamento padrão do formulário
        event.preventDefault();

        // Captura o valor selecionado via FormData API
        const formData = new FormData(quizForm);
        const userAnswer = formData.get('quiz-answer');

        // Escopos de Mensagens armazenados em variáveis locais antes do output (Exigência do Nível 4)
        const msgSucesso = "🎯 Excelente! Você demonstrou uma postura cidadã. Checar informações em fontes confiáveis e agências de checagem quebra o ciclo de propagação das Deepfakes.";
        const msgErro = "⚠️ Atenção! Compartilhar sem checar ou presumir que vídeos são reais ajuda a disseminar desinformação automatizada por IA. Sempre investigue antes!";

        // Reset de classes utilitárias
        feedbackBox.className = 'feedback-box';

        // Processamento lógico da resposta
        if (userAnswer === 'correta') {
            feedbackBox.textContent = msgSucesso;
            feedbackBox.classList.add('success');
        } else {
            feedbackBox.textContent = msgErro;
            feedbackBox.classList.add('error');
        }
        
        // Torna visível o feedback manipulado no DOM
        feedbackBox.classList.remove('hidden');
    });
});
