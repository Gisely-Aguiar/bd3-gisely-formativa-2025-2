/*  CRIAÇÃO DA CONSTANTE QUE RERESENTA O NOME DO BANCO DE DADOS */
const database =  'BD3-AULA';

/*  CRIAÇÃO DA CONSTANTE QUE RERESENTA O NOME DA COLEÇÃO DE ARQUIVOS */
const collection =  'LIVRARIA';

/* DEFINE O BANCO DE DADOS QUE SERÁ UTILIZADO, CASO NÃO EXISTA SERÁ CRIADO */
use(database);

/* EXEMPLO DE INSERÇÃO DE DADOS COM insertMany */
db['LIVRARIA'].insertMany(
    [
            {
      "codigo":"1",
      "titulo": "As Cavernas de Aço",
      "autor": "Isaac Asimov",
      "descricao": "As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais.",
      "imagem":"/livros/cavernas_aco.jpg",
      "valor": 120,
      "categoria":"Ficção Científica"
    },
    {
      "codigo":"2",
      "titulo": "O Sol Desvelado",
      "autor": "Isaac Asimov",
      "descricao": "Um homem morto, um robô danificado e um crime sem solução. Convocado para uma reunião em Washington, Elijah Baley descobre que foi escalado para investigar um novo crime. Desta vez, porém, o policial deverá deixar a segurança da Terra e enfrentar sua fobia de espaços abertos.",
      "imagem":"/livros/sol_desvelado.jpg",
      "valor": 100,
      "categoria":"Ficção Científica"
    },
    {
      "codigo":"3",
      "titulo": "Os Robôs da Alvorada",
      "autor": "Isaac Asimov",
      "descricao": "Em meio à mais evoluída colônia humana fora da Terra, ocorre um crime sem precedentes: um robô humaniforme é assassinado, colocando em xeque a reputação de um importante estudioso daquele planeta, único suspeito do crime.",
      "imagem":"/livros/robos_alvorada.jpg",
      "valor": 115,
      "categoria":"Ficção Científica"
    },
    {
      "codigo":"4",
      "titulo": "Robôs e Império",
      "autor": "Isaac Asimov",
      "descricao": "A humanidade evoluiu muito a partir então, e, para desgosto dos Siderais, o plano delineado por Baley finalmente começa a dar certo. Mas o universo se encontra em um impasse, enquanto cientistas poderosos e vingativos ameaçam destruir a Terra e tudo o que ela representa.",
      "imagem":"/livros/robos_imperio.jpg",
      "valor": 180,
      "categoria":"Ficção Científica"
    },
    {
      "codigo":"5",
      "titulo": "Poeira das Estrelas",
      "autor": "Isaac Asimov",
      "descricao": "Quando o jovem Biron Farrill descobre que seu pai foi assassinado e que sua própria vida corre perigo, decide partir em uma missão perigosa para encontrar respostas e achar os culpados. Ele não imagina, porém, que sua busca o lançará em uma obscura trama de revoltas, conspirações políticas e espionagem.",
      "imagem":"/livros/poeira_estrelas.jpg",
      "valor": 85,
      "categoria":"Ficção Científica"
    }
    ]
);
