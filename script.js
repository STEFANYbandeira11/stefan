javascript
const ctx = document.getElementById('socialMediaChart').getContext('2d');
const socialMediaChart = new Chart(ctx, {
    type: 'bar', // Tipo do gráfico
    data: {
        labels: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok'],
        datasets: [{
            label: 'Número de Usuários (milhões)',
            data: [2900, 1400, 400, 900, 1000], // Dados fictícios
            backgroundColor: [
                'rgba(59, 89, 152, 0.6)',
                'rgba(225, 48, 108, 0.6)',
                'rgba(29, 161, 242, 0.6)',
                'rgba(40, 103, 178, 0.6)',
                'rgba(255, 65, 54, 0.6)'
            ],
            borderColor: [
                'rgba(59, 89, 152, 1)',
                'rgba(225, 48, 108, 1)',
                'rgba(29, 161, 242, 1)',
                'rgba(40, 103, 178, 1)',
                'rgba(255, 65, 54, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Usuários (milhões)'
                }
            }
        }
    }
});

