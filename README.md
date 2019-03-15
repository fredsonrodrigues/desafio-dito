# Desafio Dito - Api's de serviço

As tecnologias usadas para esse projeto.

- Node.js
- Docker/Docker-compose
- Nginx
- MongoDB

## Executando projeto

Para executar o projeto em produção, basta seguir esses passos:

``` sh
git clone https://github.com/fredsonrodrigues/desafio-dito.git
cd desafio-dito
server start
```
OBS: Certifique-se que o docker esteja instalado e o docker-compose configurado.

### Desenvolvimento: trabalhando com as Api's em específico.

Para desenvolvimento, o passos acimas podem ser seguidos. Mas caso queira mexer com alguma API em específico, faça dessa maneira: 

``` sh
# depois de baixar o projeto..
cd desafio-dito
# vamos por exemplo, trabalhar com a Api de timeline.
cd timeline-events
npm install
npm run dev
```

## Escalando serviços

Para definir quantas réplicas devem ser adicionadas a rede, edite o arquivo `config.ini` na raiz do projeto. Ele deve ser preenchido com o mesmo nome do serviço que está no `docker-compose.yml`. 

Assim que o numero de réplicas for definida, basta executar o comando:

``` sh
# CMD windows
server start
# power shell ou no linux
./server start
```

O serviço será iniciado com os valores definidos no arquivo de configuração. Para encerrar os serviços, basta digitar:

``` sh
# CMD windows
server stop
# power shell ou no linux
./server stop
```

Detalhe: Se você alterar a quantidade de réplicas em `config.ini` , pode tranquilamente executar o comando `start` novamente. Ele apenas atualizará o número de réplicas sem encerrar o serviço.

Com as réplicas em produção, a própria rede interna trabalhará junto com o nginx para fazer o balanceamento de carga. Segue o exemplo de teste em desenvolvimento: 

![Teste-rede](Docs/img/teste-scale.JPG)

Foi colocado um `console.log("aqui")` para que fosse identificado qual das replicas foi chamada no momento. 