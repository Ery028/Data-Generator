///////////////////////////////////////////////////////////////////////////////////////// CLIPBOARDS /////////////////////////////////////////////////////////////////////////////////////////////
const clipboard = document.getElementById('clipboard');
const clipboard2 = document.getElementById('clipboard2');
const clipboard3 = document.getElementById('clipboard3');


////////////////////////////////////////////////////////////////////////////////////////// RESULTS ///////////////////////////////////////////////////////////////////////////////////////////////
const resultPass = document.getElementById('result-pass');
const resultEmail = document.getElementById('result-email');
const resultCPF = document.getElementById('result-cpf');


/////////////////////////////////////////////////////////////////////////////////////////// FORMS ////////////////////////////////////////////////////////////////////////////////////////////////
const form = document.getElementById('caracs');
const form2 = document.getElementById('names');
const form3 = document.getElementById('cpf');


/////////////////////////////////////////////////////////////////////////////////////// CREATE FORMS /////////////////////////////////////////////////////////////////////////////////////////////
form.onsubmit = (event) => {
  event.preventDefault();
  const pass = Object.fromEntries(new FormData(form));
  createPass(pass);
  form.reset();
};

form2.onsubmit = (event) => {
  event.preventDefault();
  const email = Object.fromEntries(new FormData(form2));
  createEmail(email);
  form2.reset();
};

form3.onsubmit = (event) => {
  event.preventDefault();
  const cpf = Object.fromEntries(new FormData(form3));
  createCPF(cpf);
  form3.reset();
};


//////////////////////////////////////////////////////////////////////////////////////// FUNCTIONS ///////////////////////////////////////////////////////////////////////////////////////////////
async function createPass(pass) {
  const url = '/pass';

  const config = {
    method: 'post',
    body: JSON.stringify(pass),
    headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  const newPass = await (await fetch(url, config)).json();
  
  resultPass.innerText = newPass.psd;
};

async function createEmail(email) {
  const url = '/email';

  const config = {
    method: 'post',
    body: JSON.stringify(email),
    headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  if(email.tipo == "--Selecione--"){
    resultEmail.innerText = "Apenas domínio válido!"
  }else{
    const newEmail = await (await fetch(url, config)).json();
    resultEmail.innerText = newEmail.address;
  };
};

async function createCPF(cpf) {
  const url = '/cpf';

  const config = {
    method: 'post',
    body: JSON.stringify(cpf),
    headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  const newCPF = await (await fetch(url, config)).json();
  
  resultCPF.innerText = newCPF.Cpf;
};


////////////////////////////////////////////////////////////////////////////////////////// CREATE CLIPBOARD ///////////////////////////////////////////////////////////////////////////////////////
clipboard.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultPass.innerText;

  if(!password) { return; }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Senha copiada para a área de transferência!');
});

clipboard2.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const email = resultEmail.innerText;

  if(!email) { return; }  
  textarea.value = email;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Email copiado para a área de transferência!');
});

clipboard3.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const cpf = resultCPF.innerText;

  if(!cpf) { return; }  
  textarea.value = cpf;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('CPF copiado para a área de transferência!');
});
