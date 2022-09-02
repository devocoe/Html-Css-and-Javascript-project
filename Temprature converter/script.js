const calculateTemp = () => {
  const tempvalue = document.getElementById("tempvalue").value;
  const tempOptions = document.getElementById("temp-options");
  const temp = tempOptions.options[tempOptions.selectedIndex].value;
  if (temp === "cel") {
    const result = document.getElementById("result-container");
    result.innerHTML = Math.round((tempvalue * 9) / 5 + 32);
  } else {
    const result = document.getElementById("result-container");
    result.innerHTML = `${Math.round(((tempvalue - 32) * 5) / 9)} Celcius`;
  }
};
