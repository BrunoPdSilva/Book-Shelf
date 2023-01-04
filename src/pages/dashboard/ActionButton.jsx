import '../../styles/pages/dashboard/ActionButton.scss';

export function ActionButton({ text, color, children, type, setState }) {
  return (
    <button
      className="action-button"
      style={{ backgroundColor: color }}
      onClick={() => setState(type)}
    >
      {children}
      {text}
    </button>
  );
}

