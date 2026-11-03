# Carômetro Escolar

Projeto desenvolvido para facilitar a consulta de informações de alunos por meio de uma aplicação web.

A proposta consiste em extrair informações de documentos PDF, organizar os dados em JSON e disponibilizá-los por meio de uma API REST, permitindo pesquisar alunos pelo nome e visualizar informações como fotografia e turma.

## Funcionalidades

- Extração de nomes e informações de turmas a partir de arquivos PDF.
- Organização dos dados em formato JSON.
- Disponibilização das informações por uma API Flask.
- Pesquisa de alunos pelo nome.
- Exibição dos resultados em cartões na interface web.

## Tecnologias utilizadas

- Python
- PyMuPDF
- Pandas
- Flask
- Flask-CORS
- JavaScript
- HTML
- Bootstrap

## Funcionamento

O projeto foi dividido em três etapas:

1. **Extração:** utilização do PyMuPDF para ler os documentos PDF e organizar as informações extraídas.
2. **API:** utilização do Flask para disponibilizar os dados e implementar a pesquisa de alunos.
3. **Interface:** desenvolvimento de uma página web com JavaScript e Bootstrap para consultar e apresentar os resultados.

## Privacidade

Por envolver informações pessoais e fotografias de estudantes, os dados originais foram removidos do repositório. O projeto contém apenas o código-fonte.

## Contexto

Este projeto representa uma experiência prática de integração entre Python, APIs REST e desenvolvimento web, explorando a automação da extração de dados e sua disponibilização para consulta em uma interface própria.
