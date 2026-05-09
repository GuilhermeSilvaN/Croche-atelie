# Crochê Ateliê

![Tela principal](/images/viewModelCroche.png)

---

## Visão Geral

O sistema de filtros foi desenvolvido em React utilizando componentes reutilizáveis e compartilhamento de estado entre componentes.

Atualmente o projeto possui:

* Busca por nome
* Filtro por categoria
* Filtro por faixa de preço
* Renderização dinâmica dos produtos
* Estrutura componentizada

---

# Estrutura dos Componentes

```txt
src/
│
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Product/
│   │   └── ProductCard.jsx
│   ├── ProductList/
│   │   └── ProductList.jsx
│   └── SearchProduct/
│       └── SearchProduct.jsx
│
├── service/
│   └── products.js
│
├── App.jsx
└── main.jsx
```

---

# Fluxo da Aplicação

O componente `App.jsx` centraliza todos os estados dos filtros.

Fluxo:

```txt
SearchProduct
      ↓
Atualiza os estados
      ↓
App.jsx armazena os filtros
      ↓
ProductList recebe os filtros
      ↓
Produtos são filtrados
      ↓
ProductCard renderiza os resultados
```

---

# Estados Utilizados

Os estados ficam no componente `App.jsx`.

```jsx
const [search, setSearch] = useState("");
const [category, setCategory] = useState("");
const [priceFilter, setPriceFilter] = useState("");
```

## Responsabilidades

| Estado      | Responsabilidade           |
| ----------- | -------------------------- |
| search      | Busca pelo nome do produto |
| category    | Filtra por categoria       |
| priceFilter | Filtra por faixa de preço  |

---

# Componente SearchProduct

Responsável pelos filtros e busca.

## Funcionalidades

* Input de pesquisa
* Select de categoria
* Select de faixa de preço

## Props Recebidas

```jsx
search
setSearch
category
setCategory
priceFilter
setPriceFilter
```

## Exemplo de Input

```jsx
<input
  type="text"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
```

## Exemplo de Select

```jsx
<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="">Todas as categorias</option>
</select>
```

---

# Componente ProductList

Responsável por:

* Receber os filtros
* Filtrar os produtos
* Renderizar os cards

## Props Recebidas

```jsx
search
category
priceFilter
```

---

# Lógica do Filtro

A filtragem utiliza o método `.filter()` do JavaScript.

## Busca por Nome

```jsx
const matchSearch =
  product.name
    .toLowerCase()
    .includes(search.toLowerCase());
```

### Objetivo

Permitir busca independente de letras maiúsculas ou minúsculas.

---

# Filtro por Categoria

```jsx
const matchCategory =
  category === "" ||
  product.category === category;
```

## Objetivo

* Quando vazio: mostra todos
* Quando selecionado: filtra pela categoria

---

# Filtro por Preço

```jsx
if (priceFilter === "0-50") {
  matchPrice = product.price <= 50;
}
```

## Faixas utilizadas

| Valor   | Regra                 |
| ------- | --------------------- |
| 0-50    | Até R$ 50             |
| 50-100  | Entre R$ 50 e R$ 100  |
| 100-200 | Entre R$ 100 e R$ 200 |
| 200     | Acima de R$ 200       |

---

# Estrutura do Produto

Arquivo: `service/products.js`

## Exemplo

```js
{
  id: 1,
  name: "Tapete Floral",
  category: "Tapetes",
  price: 120,
  image: "url-da-imagem"
}
```

---

# Conceitos React Utilizados

## useState

Utilizado para armazenar os filtros.

```jsx
const [search, setSearch] = useState("");
```

---

## Props

Utilizadas para compartilhar informações entre componentes.

```jsx
<SearchProduct
  search={search}
  setSearch={setSearch}
/>
```

---

## Lifting State Up

Técnica utilizada para compartilhar estados entre componentes.

O estado foi movido para o componente pai (`App.jsx`) para permitir comunicação entre:

* SearchProduct
* ProductList

---

# Vantagens da Arquitetura Atual

## Componentização

Cada componente possui apenas uma responsabilidade.

---

## Reutilização

Os componentes podem ser reutilizados em outras páginas.

---

## Escalabilidade

A estrutura permite adicionar facilmente:

* Ordenação
* Paginação
* API externa
* Context API
* Carrinho
* Favoritos
* Login
* Backend Spring Boot

