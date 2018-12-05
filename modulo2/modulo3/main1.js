var xhr = new XMLHttpRequest(); // << Nos dá acesso à funcionalidade do AJAX para que possamos recuperar informações de aglum Servidor.

xhr.open('GET', 'https://api.github.com/users/viictorcruuz') // 'GET' é o método usado para buscar uma informação... e passo a URL que quero buscar os dados
xhr.send(null); // utilizado para envio de parâmentros (por enquanto vai ser nulo)

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}