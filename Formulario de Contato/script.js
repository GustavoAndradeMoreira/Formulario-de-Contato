function validateForm() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let isValid = true;

    if (name === '') {
        document.getElementById('nameError').innerText = 'Por favor, preencha seu nome.';
        document.getElementById('name').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('nameError').innerText = '';
        document.getElementById('name').classList.remove('error');
    }

    if (email === '') {
        document.getElementById('emailError').innerText = 'Por favor, preencha seu email.';
        document.getElementById('email').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
        document.getElementById('email').classList.remove('error');
    }

    if (message === '') {
        document.getElementById('messageError').innerText = 'Por favor, escreva sua mensagem.';
        document.getElementById('message').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('messageError').innerText = '';
        document.getElementById('message').classList.remove('error');
    }

    if (isValid) {
        alert('Mensagem enviada com sucesso!');
        return true;
    } else {
        return false;
    }
}
