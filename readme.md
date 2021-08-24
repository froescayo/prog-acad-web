# Sistema de Progressões Acadêmicas da UFBA
Repositório contendo o projeto desenvolvido para a disciplina de TÓPICOS EM SISTEMAS DE INFORMAÇÃO E WEB I, do PGCOMP (Programa de Mestrado em Ciência da Computação da UFBA) sob orientação do Prof. Dr. Fred Durão, no ano de 2021

# Quem somos nós

<p align="center">
  <img src="Equipe.jpg" width="700">
</p>

- [Iury Gomes de Oliveira](https://github.com/iurygdeoliveira) (Gestão)
- [Lucas Ferreira](https://github.com/KasFerreira) (Implantação)
- [Andrei Macedo](https://github.com/asmcdo) (Back-End e Testes)
- [Breno Barreto de Souza Santos](https://github.com/brenobss) (Front-End)
- [Emanuel Vieira](https://github.com/emanuelvs) (Design)
- [Cayo Froes](https://github.com/froescayo) (Back-End e BD)
- [Arlete Reis](https://github.com/arllette) (Requisitos e Documentação)

# Escopo

Este projeto-piloto tem por objetivo desenvolver um sistema para facilitar a gestão dos processos de progressões docentes na UFBA

# [Diagramas UML](https://github.com/froescayo/prog-acad-web/tree/master/Diagramas%20UML)
- Caso de Uso
- Atividade
- Sequencia

# Regras de Negócio

- RN01: o sistema deve carregar os dados quando houver cadastro básico no banco de dados, caso não encontre, deverá cadastrar novo. **_(Qual o entendimento sobre cadastros básico ?)_**
- RN02: o sistema deverá cadastrar a carreira do docente, cargo, classificação/nível, titulação, avaliação de desempenho e categoria das atividades. **_(Isso precisa ser discutido, não precisa de todas essas informações)_**
- RN03: As funcionalidades “Cadastrar”, “Incluir” e “Editar” poderão ser realizados pelos usuários com perfil administrador e operador. **_(Teremos esse dois atores ?)_**
- RN04 A funcionalidade “Consultar” poderá ser realizadas pelos usuários com perfis administrador, operador e consulta. **_(Teremos esses dois atores ?)_**
- RN05: A busca do docente poderá ser efetuada pelos seguintes filtros: matricula, nome completo e/ou CPF. **_(Qual o proposito dessa busca docente ?)_**
- RN06: A Grid apresentada com a lista dos docentes deverá exibir: matricula, nome completo, carreira, cargo, titulação e categoria de atividades. **_(Qual o prosísto dessa grid ?)_**
- RN07: O sistema deve informar o “Nome do Usuário” logado automaticamente. 
- RN08: O sistema não deve aceitar cadastrar mais de uma vez o mesmo usuário e/ou docente.
- RN09: o sistema deve permitir de acordo com a Classificação/Nível ( Art. 2º) - a inclusão da progressão funcional de um nível para o seguinte dentro da mesma classe: mínimo cumprimento de 24 (vinte e quatro) meses de permanência do nível anterior incluindo docentes cedidos para outro órgão público de acordo com Art.7º do Decreto 4.050/2001 e aprovação de desempenho acadêmico.
- RN10: o sistema deve permitir de acordo com a Classificação/Nível (Art. 3º Resolução nº 03/2016) - a inclusão da promoção cumprimento mínimo de 24 (vinte e quatro) meses de efetivo exercício no último nível da Classe antecedente àquela que se dará a promoção e, ainda, cumulativamente nas seguintes condições, abaixo:
I - para o nível 1 da Classe B, com a denominação de Professor Assistente, ser aprovado em processo de avaliação de desempenho; 
II - para o nível 1 da Classe C, com a denominação de Professor Adjunto, ser aprovado em processo de avaliação de desempenho;
III - para o nível 1 da Classe D, com a denominação de Professor Associado: 
a) possuir o título de doutor; e 
b) ser aprovado em processo de avaliação de desempenho.
- RN11: o sistema deve permitir que o docente de acordo com a Carga horária esteja apto para progressão, na soma das nove categorias de atividades consideradas na resolução nº 03/2016 do Anexo Único. Limite mínimo de pontos correspondente a:
a) 40 pontos, para o docente em regime de 20 horas; 
b) 80 pontos, para o docente em regime 40 horas; 
c) 100 pontos, para o docente em regime de DE.
- RN12: o sistema deve permitir que o docente de acordo com a Carga horária esteja apto para promoção, na soma das nove categorias de atividades consideradas na resolução nº 03/2016 do Anexo Único. Limite mínimo de pontos correspondente a:
a) 50 pontos, para o docente em regime de 20 horas; 
b) 100 pontos, para o docente em regime 40 horas; 
c) 120 pontos, para o docente em regime de DE.
- RN13: O sistema deve permitir que seja cadastrado documentos comprobatórios de acordo com o Art. 5 §2°- da Resolução 03//2016 devendo estar indexados com numeração de folhas e com vinculação expressa aos itens de avaliação mencionadas nos campos I a IX do Anexo Único.
- RN14: O sistema deve permitir que docentes ocupantes de cargo na Classe A da Carreira de Magistério Superior de acordo com o § 2º do Art. 1º da Lei 12863/13, que atenderem aos requisitos de titulação farão jus a processo de denominação, sem exigência de cumprimento de estágio probatório e de interstício: **_(O que é processo de denominação)_**

  - I - da denominação de Professor Auxiliar para a denominação de Professor Assistente A, pela apresentação de título de Mestre; 
  - II - das denominações de Professor Auxiliar ou de Professor Assistente A, para a denominação Professor Adjunto A, pela apresentação de título de doutor.
  - Parágrafo único. O docente fará a solicitação devidamente documentada, que será encaminhada à Reitoria, por meio da Comissão Permanente de Pessoal Docente, para proceder à alteração de denominação.

- RN15: O sistema permite editar a classificação/nível, titulação e categoria de atividades.**_(Não entendi isso ?)_**
- RN16: O sistema deve permitir que de acordo com Art. 7º da resolução nº 03/2016, os docentes aprovados no estágio probatório do respectivo cargo da Carreira de Magistério Superior que atenderem aos seguintes requisitos de titulação farão jus a processo de aceleração da promoção, que se dará mediante solicitação devidamente documentada e encaminhada à Reitoria, por meio da Comissão Permanente de Pessoal Docente, para proceder à promoção:

  - I - de qualquer nível da Classe A, com as denominações de Professor Assistente A e Professor Auxiliar para o nível 1 da Classe B, com a denominação de Professor Assistente, pela apresentação de titulação de Mestre;
  - II - de qualquer nível da Classe A, com as denominações de Professor Adjunto A, Professor Assistente A e Professor Auxiliar, e da classe B, com a denominação de Professor Assistente, para o nível 1 da Classe C, com a denominação de Professor Adjunto, pela apresentação de titulação de doutor.

# Requisitos Funcionais

- RF01: Consultar Docente 
  - **_Qual o objetivo da consulta ?_** 
- RF02: Cadastrar Docente
  - Nome Completo e  Siape **_(Outros dados acredito serem desnessários)_** 
- RF03: Requerer Progressão 
  - Inserção dos documentos comprobatórios, realizar o pedido de progressão ?

# Requisitos Não-Funcionais

- Confiabilidade
  - RNF01: O sistema deve garantir a atualização de dados feitos de forma atômica e imediata 
  - RNF02: O sistema deve fornecer disponibilidade 24/7 
- Desempenho
  - RNF03: O sistema deve permitir o acesso de diferentes usuários simultâneamente, mantento o tempo de resposta específico
- Usabilidade:
  -  RNF04: O sistema deve utilizar componente auto completar para os campos de lista, cujas informações sejam carregadas a partir da consulta a uma tabela na base de dados do sistema
  -  **_Outros Requisitos a serem melhor elaborados em conjunto com o design e front ?_**
- Segurança
  - RNF05: O sistema disponibiliza o acesso as ações das telas a partir da verificação do perfil do usuário 
  - RNF06: O sistema não permitir que o usuário visualize uma tela que não tenha permissão no controle de acesso 
  - **_RNF07: O sistema registra o log das operações, inclusão e edição realizadas pelos usuários. A tabela armazena a data/hora,usuário (isso pode ficar mais para o final)_** 
# Tecnologias Utilizadas
## [Front-End](https://github.com/froescayo/prog-acad-web)
- HTML5
- CSS3
- JS
- ReactJS
## [Back-End](https://github.com/froescayo/prog-acad-api)
- Docker
- TypeScript
# Deploy
- Em análise
# Cenários de Teste
- Em análise
