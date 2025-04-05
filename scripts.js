// scripts.js

const ctx = document.getElementById('exercise-chart').getContext('2d');
const exerciseChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Without Exercise', 'With Regular Exercise'],
        datasets: [{
            label: 'Reduction in Symptoms (%)',
            data: [0, 25], // Example data
            backgroundColor: ['#FF6384', '#36A2EB']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.raw + '% reduction in symptoms';
                    }
                }
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.addEventListener("mouseover", () => {
            section.style.transform = "scale(1.07)";
        });

        section.addEventListener("mouseleave", () => {
            section.style.transform = "scale(1)";
        });
    });
});
