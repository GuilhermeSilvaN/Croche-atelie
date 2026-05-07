import "./SearchProduct.css";

export default function SearchProduct({
  search, 
  setSearch,
  category,
  setCategory,
  priceFilter,
  setPriceFilter
}) {

  return (
    <section className="search-product">
      <div className="search-header">
        <span className="filter-icon">⚚</span>
        <h2>Filtros e Busca</h2>
      </div>

      <div className="search-fields">

        <div className="field-group">
          <label>Buscar por nome</label>

          <div className="input-wrapper">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Ex: tapete, bolsa..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="field-group">
          <label>Categoria</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Todas as categorias</option>

            <option value="Tapetes">Tapetes</option>
            <option value="Bolsas">Bolsas</option>
            <option value="Blusas">Blusas</option>
            <option value="Amigurumis">Amigurumis</option>
            <option value="Decoração">Decoração</option>
          </select>
        </div>

        <div className="field-group">
          <label>Ordenar por preço</label>

          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="">todos os preços</option>
            <option value="0-200">Menor preço</option>
            <option value="200">Maior preço</option>
          </select>
        </div>

      </div>
    </section>
  );
}