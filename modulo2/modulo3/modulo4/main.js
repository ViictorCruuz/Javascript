// Promisses são códigos que não vão ifluenciar na linha do tempo do nosso código javascript
// São funções que vão devolver o valor de resultado, seja sucesso ou erro só depois de um tempo
// Não precisamos nos preocupar quando esse valor vai ser retornado porque nosso javascript continua executando normalmente

axios.get('https://api.github.com/users/ViictorCruuz')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
