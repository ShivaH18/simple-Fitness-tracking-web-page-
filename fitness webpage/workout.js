
type = "text/babel"
const workoutForm = document.getElementById('workoutForm');
const workoutChart = document.getElementById('workoutChart').getContext('2d');


let exerciseTypes = [];
let durations = [];
let caloriesBurned = [];


let chartInstance = null; 

function updateChart() {
    
    if (chartInstance) {
        chartInstance.destroy();
    }

    
    chartInstance = new Chart(workoutChart, {
        type: 'bar',
        data: {
            labels: exerciseTypes,
            datasets: [{
                label: 'Duration (minutes)',
                data: durations,
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
            },
            {
                label: 'Calories Burned',
                data: caloriesBurned,
                backgroundColor: 'rgba(255, 99, 132, 0.6)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


workoutForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const exerciseType = document.getElementById('exerciseType').value;
    const duration = parseInt(document.getElementById('duration').value);
    const calories = parseInt(document.getElementById('calories').value);

    exerciseTypes.push(exerciseType);
    durations.push(duration);
    caloriesBurned.push(calories);

    workoutForm.reset();

    updateChart();
});
updateChart();
const {createRoot} = ReactDOM