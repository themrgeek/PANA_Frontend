async function createWallet() {
  const res = await fetch(`https://https-github-com-themrgeek-pana-2.onrender.com/wallet/create`, { method: 'POST' });
  const data = await res.json();
  document.getElementById('address').value = data.address;
  document.getElementById('privateKey').value = data.privateKey;
}

async function getBalance() {
  const address = document.getElementById('balanceAddress').value;
  const res = await fetch(`https://https-github-com-themrgeek-pana-2.onrender.com/wallet/balance/${address}`);
  const data = await res.json();
  document.getElementById('balanceOutput').textContent = `Balance: ${data.balance}`;
}

async function sendTransaction() {
  const body = {
    fromAddress: document.getElementById('from').value,
    toAddress: document.getElementById('to').value,
    amount: Number(document.getElementById('amount').value),
    privateKey: document.getElementById('key').value
  };
  const res = await fetch(`https://https-github-com-themrgeek-pana-2.onrender.com/transaction/send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  document.getElementById('txOutput').textContent = data.message || data.error;
}
