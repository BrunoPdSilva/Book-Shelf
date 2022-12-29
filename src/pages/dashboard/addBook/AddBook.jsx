import { useReducer } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { dataBase } from '../../../firebase/config';

import { Input } from '../Input';

import './AddBook.css';

const initialState1 = {
  title: 'O Poder do Hábito',
  author: 'Charles Duhigg',
  length: '408',
  categories: ['Autoajuda', 'História'],
  editor: 'Objetiva',
  language: 'Português',
  image: 'https://imagens.lelivros.org/2013/05/Download-O-Poder-do-Habito-Charles-Duhigg-em-ePUB-mobi-PDF2-370x532.jpg',
  buy: 'https://www.amazon.com.br/poder-do-h%C3%A1bito-Charles-Duhigg/dp/8539004119/?_encoding=UTF8&pd_rd_w=IHcG7&content-id=amzn1.sym.07271deb-23ee-498c-8f97-f25954bcc083&pf_rd_p=07271deb-23ee-498c-8f97-f25954bcc083&pf_rd_r=3NF7DPWSBJH9CF4J9QFV&pd_rd_wg=YqAjU&pd_rd_r=ecddd132-8538-4019-ae31-381dbc1ec9ca&ref_=pd_gw_ci_mcx_mr_hp_atf_m',
  download: 'https://drive.google.com/file/d/1-iaJ5xFOeKZqpgQnX4NHmm1UFAF5q91C/view',
  sinopse: `Charles Duhigg, repórter investigativo do New York Times, mostra que a chave para o sucesso é entender como os hábitos funcionam - e como podemos transformá-los.

  Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela mudaram de maneira fundamental. Publicitários da Procter & Gamble observaram vídeos de pessoas fazendo a cama. Tentavam desesperadamente descobrir como vender um novo produto chamado Febreze, que estava prestes a se tornar um dos maiores fracassos na história da empresa. De repente, um deles detecta um padrão quase imperceptível - e, com uma sutil mudança na campanha publicitária, Febreze começa a vender um bilhão de dólares por anos. Um diretor executivo pouco conhecido assume uma das maiores empresas norte-americanas. Seu primeiro passo é atacar um único padrão entre os funcionários - a maneira como lidam com a segurança no ambiente de trabalho -, e logo a empresa começa a ter o melhor desempenho no índice Dow Jones.
  
  O que todas essas pessoas tem em comum? Conseguiram ter sucesso focando em padrões que moldam cada aspecto de nossas vidas. Tiveram êxito transformando hábitos. Com perspicácia e habilidade, Charles Duhigg apresenta um novo entendimento da natureza humana e seu potencial para a transformação.`,
  publishDate: '24 de setembro de 2012'
};

const initialState = {
  title: '',
  author: '',
  length: '',
  categories: '',
  editor: '',
  language: '',
  image: '',
  buy: '',
  download: '',
  sinopse: '',
  publishDate: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'Título':
      return { ...state, title: action.payload };
    case 'Autor':
      return { ...state, author: action.payload };
    case 'Qnt. Páginas':
      return { ...state, length: action.payload };
    case 'Categorias':
      return { ...state, categories: action.payload };
    case 'Editora':
      return { ...state, editor: action.payload };
    case 'Idioma':
      return { ...state, language: action.payload };
    case 'URL da imagem':
      return { ...state, image: action.payload };
    case 'URL da compra':
      return { ...state, buy: action.payload };
    case 'URL do livro':
      return { ...state, download: action.payload };
    case 'Sinopse':
      return { ...state, sinopse: action.payload };
    case "Publicação":
      return { ...state, publishDate: action.payload };
    case 'clean':
      return initialState;
    default:
      return state;
  }
}

export function AddBook({ setState }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function handleSubmit(e) {
    e.preventDefault();

    const collectionRef = collection(dataBase, 'books');
    await addDoc(collectionRef, state);

    dispatch({ type: 'clean' });
  }

  async function testBook() {
    const collectionRef = collection(dataBase, 'books');
    await addDoc(collectionRef, initialState1);

    dispatch({ type: 'clean' });
  }

  return (
    <div className="add-form-wrapper">
      <h2>Adicionar livro</h2>

      <form onSubmit={handleSubmit}>
        <Input title="Título" dispatch={dispatch} value={state.title} />
        <div className="double-input">
          <Input title="Autor" dispatch={dispatch} value={state.author} />
          <Input title="Qnt. Páginas" dispatch={dispatch} value={state.length} />
        </div>
        <Input title="Categorias" dispatch={dispatch} value={state.categories} />
        <div className="double-input">
          <Input title="Editora" dispatch={dispatch} value={state.editor} />
          <Input title="Idioma" dispatch={dispatch} value={state.language} />
        </div>
        <Input title="URL da imagem" dispatch={dispatch} value={state.image} />
        <div className="double-input">
          <Input title="URL da compra" dispatch={dispatch} value={state.buy} />
          <Input title="Publicação" dispatch={dispatch} value={state.publishDate} />
        </div>
        <Input title="URL do livro" dispatch={dispatch} value={state.download} />
        <Input title="Sinopse" dispatch={dispatch} value={state.sinopse} />

      <div className="buttons-container">
        <button onClick={() => setState('buttonsActive')}>Cancelar</button>
        <button type="submit">Adicionar</button>
      </div>
      </form>
      <button onClick={testBook}>Teste</button>
    </div>
  );
}
