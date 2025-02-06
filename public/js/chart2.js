var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Estudantes Externos', 'Estudantes Internos', 'Docentes'],
        datasets: [{
            label: 'Estudantes Inscritos',
            data: [12,9,20],
            backgroundColor: [
                'rgba(8, 169, 8, 0.952)',
                'rgb(9, 99, 147)',
                'rgb(162, 24, 24)'
            ],
            borderColor: [
                'rgb(0, 9, 60)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});