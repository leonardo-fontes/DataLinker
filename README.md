## Para rodar o projeto local, siga os seguintes passos:

1. Instale as dependências com o comando `npm install` ou `yarn`
2. Para rodar o projeto, use o comando `npm run dev` ou `yarn dev`
3. Acesse o projeto em `http://localhost:5173/`
4. Você também pode acessar o projeto através do link: https://list-interface.vercel.app/


## A aplicação

Dentro da pasta "json", existem 3 arquivos. Os dados finais servem como modelo para o payload, e os outros dois arquivos são lidos para preencher os componentes da aplicação.

Pasta 'components': 
1. Pasta 'helper': arquivo js que nos ajuda a gerar os dados finais;
2. Pasta 'Inputs': microcomponentes da nossa aplicação;
3. Arquivo 'InputGroup': Componente final da nossa aplicação. 

## Funcionamento

Quando adicionamos novos itens ou fazemos alterações nos já existentes, o estado do programa é atualizado. Quando clicamos no botão 'salvar', as informações que estamos enviando são mostradas no console.
