import { DownloadSimple, ShoppingCart } from 'phosphor-react';

export function BookButton({ type }) {
  return (
    <>
      {type === 'download' ? (
        <button>
          <DownloadSimple size={22} color="#000" weight="bold" />
          Download
        </button>
      ) : (
        <button>
          <ShoppingCart size={22} color="#FFF" weight="bold" />
          Comprar
        </button>
      )}
    </>
  );
}
