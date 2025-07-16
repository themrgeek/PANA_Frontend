async function mineBlock() {
  const address = document.getElementById('miner').value;
  const res = await fetch(`https://localhost:4433/mine/${address}`, { method: 'POST' });
  const data = await res.json();
  document.getElementById('mineOutput').textContent = data.message || data.error;
}

async function getChain() {
  const res = await fetch(`https://localhost:4433/chain`);
  const data = await res.json();
  document.getElementById('chainOutput').textContent = JSON.stringify(data, null, 2);
}
