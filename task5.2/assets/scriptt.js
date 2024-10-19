function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    if (isNaN(inputValue)) {
        document.getElementById("result").innerText = "Please enter a valid number";
        return;
    }

    let conversionFactor = getConversionFactor(fromUnit, toUnit);
    let result = inputValue * conversionFactor;

    document.getElementById("result").innerText = `Result: ${result.toFixed(5)}`;
}

function getConversionFactor(fromUnit, toUnit) {
    const conversionRates = {
        meter: {
            meter: 1,
            kilometer: 0.001,
            centimeter: 100,
        },
        kilometer: {
            meter: 1000,
            kilometer: 1,
            centimeter: 100000,
        },
        centimeter: {
            meter: 0.01,
            kilometer: 0.00001,
            centimeter: 1,
        }
    };

    return conversionRates[fromUnit][toUnit];
}
