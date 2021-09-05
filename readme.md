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

O projeto-piloto tem por objetivo desenvolver um sistema de cadastro da progressão e promoção do docente na carreira do Ensino Superior da Universidade Federal da Bahia.

# Arquitetura do Sistema
# [Diagramas UML](https://github.com/froescayo/prog-acad-web/tree/master/Diagramas%20UML)
- Caso de Uso
- Classes
- Sequencia

# Regras de Negócio

[RN01] O requerente acessa o sistema através de convite para solicitar sua progressão ou promoção.
[RN02] O sistema deve calcular a pontuação do docente a partir de suas atividades realizadas em um interstício de 2 anos/4 semestres.
[RN03] O sistema deve “Incluir” comprovante das atividades que serão anexadas.
[RN04] O sistema deve informar o “Nome do Usuário” logado automaticamente.
[RN05] O sistema deve permitir que o perfil seja associado a um ou mais usuários. 
[RN06] O sistema não deve aceitar cadastrar mais de uma vez o mesmo usuário.

# Requisitos Funcionais

- RF01: O sistema deve permitir ao docente requerente solicitar progressão ou promoção 
- RF02: Cadastrar Docente
  - Nome Completo e  Siape
- RF03: O sistema deve permitir anexar as atividades do docente e documentos comprobatórios.
- RF04: O sistema deve permitir emitir comprovante das atividades anexadas.
- RF05: O sistema deve exportar o relatório final como uma planilha (.xls ou PDF), realizando o merge dos comprovantes.
- RF06: O sistema deve permitir ao avaliador, analisar as solicitações dos requerentes à progressão ou promoção, visualizando e atestando a veracidade dos documentos.

# Requisitos Não-Funcionais

- Confiabilidade
  - RNF01: O sistema deve garantir a atualização de dados feitos de forma atômica e imediata 
  - RNF02: O sistema deve fornecer disponibilidade 24/7 
- Desempenho
  - RNF03: O sistema deve permitir o acesso de diferentes usuários simultâneamente, mantento o tempo de resposta específico
- Usabilidade:
  -  RNF04: O sistema deve permitir facilidade de uso.
  -  RNF04: O sistema deve permitir navegabilidade fácil, contendo poucas páginas
- Segurança
  - RNF05: O sistema disponibiliza o acesso as ações das telas a partir da verificação do perfil do usuário 
  - RNF06: O sistema registra o log das operações, inclusão e edição realizadas pelos usuários. A tabela armazena a data/hora,usuário 
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
- ## Como Rodar o front-end
- Dependências
  - nodejs
  - npm
  - yarn

- Digite o comando no terminal > git clone https://github.com/froescayo/prog-acad-web.git

- Após isso entre na pasta do projeto ainda no terminal com > cd prog-acad-web

- Em seguida digite > npm install

- Por fim > npm start
- ## Como Rodar o back-end
# Projeto de Implantação
- Em construção
  
