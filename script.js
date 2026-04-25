function convert() {

    const input = document.getElementById("number").value.trim();

    const decbox = document.getElementById("dec");
    const binbox = document.getElementById("bin");
    const octbox = document.getElementById("oct");
    const hexbox = document.getElementById("hex");
    const historyDiv = document.getElementById("history");

    if (input === "") {
        setInvalid();
        return;
    }

    const decimalValue = parseInt(input, 10);

    if (isNaN(decimalValue)) {
        setInvalid();
        return;
    }

    const binary = decimalValue.toString(2);
    const octal = decimalValue.toString(8);
    const hex = decimalValue.toString(16).toUpperCase();

    // Show results
    decbox.textContent = decimalValue;
    binbox.textContent = binary;
    octbox.textContent = octal;
    hexbox.textContent = hex;

    // Explanation
    const explanation = `
    Decimal: ${decimalValue}
    → Binary: Divide by 2 repeatedly → ${binary}
    → Octal: Divide by 8 → ${octal}
    → Hex: Divide by 16 → ${hex}
    `;

    // Add to history
    const div = document.createElement("div");
    div.className = "history-item";
    div.innerHTML = `
        <b>Input:</b> ${input}<br>
        <b>Binary:</b> ${binary}<br>
        <b>Octal:</b> ${octal}<br>
        <b>Hex:</b> ${hex}<br>
        <small>${explanation}</small>
    `;

    historyDiv.prepend(div);
}

function setInvalid() {
    document.getElementById("dec").textContent = "Invalid";
    document.getElementById("bin").textContent = "Invalid";
    document.getElementById("oct").textContent = "Invalid";
    document.getElementById("hex").textContent = "Invalid";
}

// 🌙 Dark mode toggle
function toggleTheme() {
    document.body.classList.toggle("dark");

    const btn = document.getElementById("themeBtn");
    if (document.body.classList.contains("dark")) {
        btn.textContent = "☀ Light Mode";
    } else {
        btn.textContent = "🌙 Dark Mode";
    }
}
function toggleHistory() {
    const historyDiv = document.getElementById("history");

    if (historyDiv.style.display === "none" || historyDiv.style.display === "") {
        historyDiv.style.display = "block";
    } else {
        historyDiv.style.display = "none";
    }
}

