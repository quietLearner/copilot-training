window.onload = function () {
  // Function to get monthly income values from the input fields
  function getMonthlyIncome() {
    const months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    return months.map((month) => {
      const incomeInput = document.getElementById(`${month}-income`);
      return incomeInput ? parseFloat(incomeInput.value) || 0 : 0;
    });
  }

  // Function to get monthly expense values from the input fields
  function getMonthlyExpenses() {
    const months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    return months.map((month) => {
      const expenseInput = document.getElementById(`${month}-expenses`);
      return expenseInput ? parseFloat(expenseInput.value) || 0 : 0;
    });
  }

  // Initialize the bar chart
  const ctx = document.getElementById("barChart").getContext("2d");
  const barChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Income",
          data: getMonthlyIncome(), // Fetch income data dynamically
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Expenses",
          data: getMonthlyExpenses(), // Fetch expense data dynamically
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Monthly Income vs Expenses",
        },
        datalabels: {
          anchor: "end",
          align: "top",
          formatter: (value) => value.toFixed(2), // Format numbers to 2 decimal places
          color: "#000", // Set label color
          font: {
            weight: "bold",
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
    // Uncomment the following line to enable DataLabels plugin, also ensure to include the ChartDataLabels library in your HTML
    // plugins: [ChartDataLabels], // Enable the DataLabels plugin
  });

  // Update the chart when income or expense inputs change
  document
    .querySelectorAll('[id$="-income"], [id$="-expenses"]')
    .forEach((input) => {
      input.addEventListener("input", () => {
        barChart.data.datasets[0].data = getMonthlyIncome();
        barChart.data.datasets[1].data = getMonthlyExpenses();
        barChart.update();
      });
    });

  // Add an event listener to the download button
  document.getElementById("downloadBtn").addEventListener("click", () => {
    // Convert the chart to a base64 image
    const image = barChart.toBase64Image();

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = image;
    link.download = "chart.png"; // Set the file name for the downloaded image

    // Trigger the download
    link.click();
  });

  // Show the username requirements when the user starts typing
  document.getElementById("username").addEventListener("input", () => {
    const requirements = document.getElementById("username-requirements");
    if (requirements.style.display === "none") {
      requirements.style.display = "block"; // Show the requirements list
    }
  });

  // Function to validate the username and update the UI
  function validateUsernameUI(username) {
    const minLength = 8;
    const maxLength = 100; // Maximum length constraint
    const hasLowerCase = /[a-z]/.test(username);
    const hasUpperCase = /[A-Z]/.test(username);
    const hasNumber = /\d/.test(username);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(username);

    // Update the UI for each requirement
    document.getElementById("requirement-length").style.color =
      username.length >= minLength && username.length <= maxLength
        ? "green"
        : "red";
    document.getElementById("requirement-lowercase").style.color = hasLowerCase
      ? "green"
      : "red";
    document.getElementById("requirement-uppercase").style.color = hasUpperCase
      ? "green"
      : "red";
    document.getElementById("requirement-number").style.color = hasNumber
      ? "green"
      : "red";
    document.getElementById("requirement-special").style.color = hasSpecialChar
      ? "green"
      : "red";

    // Return true if all requirements are satisfied
    return (
      username.length >= minLength &&
      username.length <= maxLength &&
      hasLowerCase &&
      hasUpperCase &&
      hasNumber &&
      hasSpecialChar
    );
  }

  // Add event listener for username validation
  document.getElementById("username").addEventListener("input", (event) => {
    const username = event.target.value;
    validateUsernameUI(username);
  });
};

function validateUsername(username) {
  const minLength = 8;
  const maxLength = 100;
  const hasLowerCase = /[a-z]/.test(username);
  const hasUpperCase = /[A-Z]/.test(username);
  const hasNumber = /\d/.test(username);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(username);

  return (
    username.length >= minLength &&
    username.length <= maxLength &&
    hasLowerCase &&
    hasUpperCase &&
    hasNumber &&
    hasSpecialChar
  );
}

module.exports = { validateUsername };
