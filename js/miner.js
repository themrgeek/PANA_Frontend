async function mineBlock() {
  const address = document.getElementById('miner').value;
  const res = await fetch(`https://https-github-com-themrgeek-pana-2.onrender.com/mine/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ address })
  });
  const data = await res.json();
  document.getElementById('mineOutput').textContent = data.message || data.error;
}

async function getChain() {
  const res = await fetch(`https://https-github-com-themrgeek-pana-2.onrender.com/chain`);
  const data = await res.json();
  document.getElementById('chainOutput').textContent = JSON.stringify(data, null, 2);
}
