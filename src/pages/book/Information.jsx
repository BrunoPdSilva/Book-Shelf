import { Scroll, GlobeHemisphereWest, Buildings, Calendar } from 'phosphor-react';

export function Information({ data }) {
  return (
    <div className="information">
      <div>
        <h3>Número de páginas</h3>
        <Scroll size={24} color="var(--text)" />
        <h4>{data.length}</h4>
      </div>
      <div>
        <h3>Idioma</h3>
        <GlobeHemisphereWest size={24} color="var(--text)" />
        <h4>{data.language}</h4>
      </div>
      <div>
        <h3>Editora</h3>
        <Buildings size={24} color="var(--text)" />
        <h4>{data.editor}</h4>
      </div>
      <div>
        <h3>Data de publicação</h3>
        <Calendar size={24} color="var(--text)" />
        <h4>{data.publishDate}</h4>
      </div>
    </div>
  );
}
