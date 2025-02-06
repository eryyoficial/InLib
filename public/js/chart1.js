var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: 'Livros Acessados',
            data: [12,19,20,25,69,51,12,11,9,5,3,1],
            backgroundColor: [
                'rgba(8, 169, 8, 0.952)'
            ],
            borderColor: [
                'rgb(9, 99, 147)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true
    }
});