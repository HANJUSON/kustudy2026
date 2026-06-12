async function runCheck() {
  const textA = document.getElementById("textA").value;
  const textB = document.getElementById("textB").value;

  if (!textA.trim() && !textB.trim()) {
    alert("Please enter text in at least one document.");
    return;
  }

  const btn = document.getElementById("checkBtn");
  btn.textContent = "Checking…";
  btn.disabled = true;

  try {
    const res = await fetch("/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text_a: textA, text_b: textB }),
    });

    if (!res.ok) throw new Error("Server error: " + res.status);

    const data = await res.json();
    renderResults(data);
  } catch (err) {
    alert("Error: " + err.message);
  } finally {
    btn.textContent = "Check Similarity";
    btn.disabled = false;
  }
}

function renderResults(data) {
  document.getElementById("score").textContent = data.similarity + "%";
  document.getElementById("lcsLen").textContent = data.lcs_length;
  document.getElementById("lcsStr").textContent = data.lcs_string || "(none)";

  const diffView = document.getElementById("diffView");
  diffView.innerHTML = "";

  for (const token of data.diff) {
    const span = document.createElement("span");
    span.className = token.status;          // "match" | "removed" | "added"
    span.textContent = token.char === "\n" ? "\n" : token.char;
    diffView.appendChild(span);
  }

  document.getElementById("results").classList.remove("hidden");
}
