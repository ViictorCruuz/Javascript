var xhr = new XMLHttpRequest(); // Essa classe XMLHttpRequest nos dá acesso à funcionalidade do AJAX para que eu possa recuperar informação ou dados de um Servidor

xhr.open('GET', 'https://api.github.com/users/viictorcruuz'); // '.open' é um método(instância) da classe XMLHttpRequest que inicializa uma nova requisição.
xhr.send(null);

xhr.onreadystatechange = function() {   // quando xhr estiver pronto(por ser uma requisição assíncrona) ele executa essa função que está sendo criada
    if (xhr.readyState === 4) { // Variável que significa quando a resposta voltou pra gente
        console.log(JSON.parse(xhr.responseText)); // Então eu mostro essa requisição do github '''(JSON.parse)''' porque o corpo dessa requisição retorna um JSON
    }
}


var minhaPromise = function() {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/viictorcruuz');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição babaca');
                }
            }
        }

    });
}