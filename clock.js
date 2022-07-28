setInterval(() => {
    document.getElementById("clock").innerText = `
  ${moment().format('MMMM Do YYYY, h:mm:ss a')}
  `;
  }, 1000);