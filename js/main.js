// Dados dos temas de sustentabilidade
const sustainabilityThemes = [
    {
        icon: '🌍',
        title: 'Educação Ambiental',
        description: 'Consciência e conhecimento sobre os problemas ambientais e soluções sustentáveis.'
    },
    {
        icon: '♻️',
        title: 'Reciclagem e Reuso',
        description: 'Práticas de redução, reutilização e reciclagem de materiais para diminuir o desperdício.'
    },
    {
        icon: '🌱',
        title: 'Agricultura Sustentável',
        description: 'Métodos agrícolas que preservam o solo, água e biodiversidade.'
    },
    {
        icon: '☀️',
        title: 'Energias Renováveis',
        description: 'Utilização de fontes limpas de energia como solar, eólica e hidrelétrica.'
    },
    {
        icon: '💧',
        title: 'Conservação de Água',
        description: 'Estratégias para economizar e proteger este recurso essencial.'
    },
    {
        icon: '🌳',
        title: 'Reflorestamento',
        description: 'Restauração de florestas e aumento da cobertura vegetal para combater a poluição.'
    }
];

/**
 * Carrega os cartões de temas na página
 */
function loadThemeCards() {
    const container = document.getElementById('temas-container');
    
    if (!container) return;
    
    container.innerHTML = sustainabilityThemes.map(theme => `
        <div class="card">
            <div class="card-icon">${theme.icon}</div>
            <h3>${theme.title}</h3>
            <p>${theme.description}</p>
        </div>
    `).join('');
}

/**
 * Manipula o envio do formulário de contato
 */
function handleContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Coleta dados do formulário
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simula envio
        console.log('Formulário enviado:', data);
        alert('Mensagem enviada com sucesso! Obrigado pelo interesse em sustentabilidade.');
        
        // Limpa o formulário
        form.reset();
    });
}

/**
 * Anima elementos ao entrar na viewport
 */
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });
}

/**
 * Inicializa a aplicação
 */
function init() {
    console.log('🌱 Agrinho 2026 - Iniciando aplicação de sustentabilidade...');
    loadThemeCards();
    handleContactForm();
    setupIntersectionObserver();
}

// Executa quando o DOM estiver carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}