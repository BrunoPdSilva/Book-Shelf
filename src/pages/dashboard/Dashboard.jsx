import { useState } from 'react';

import { FilePlus, CloudArrowUp, Trash } from 'phosphor-react';

import { AddBook } from './AddBook';
import { DeleteBook } from './DeleteBook';
import { UpdateBook } from './UpdateBook';
import { ActionButton } from './ActionButton';

import '../../styles/pages/dashboard/Dashboard.scss';

export function Dashboard() {
  const [action, setAction] = useState('buttonsActive');

  return (
    <div className="dashboard">
      {action === 'buttonsActive' && (
        <section className="action-buttons-container">
          <ActionButton
            text={'Adicionar livro'}
            color="#06D6A0"
            type="add"
            setState={setAction}
          >
            <FilePlus size={28} />
          </ActionButton>
          <ActionButton
            text={'Atualizar livro'}
            color="#FFD166"
            type="update"
            setState={setAction}
          >
            <CloudArrowUp size={28} />
          </ActionButton>
          <ActionButton
            text={'Excluir livro'}
            color="#EB5E28"
            type="delete"
            setState={setAction}
          >
            <FilePlus size={28} />
          </ActionButton>
        </section>
      )}

      <section className="painel">
        {action === 'add' && <AddBook setState={setAction} />}
        {action === 'delete' && <DeleteBook setState={setAction} />}
        {action === 'update' && <UpdateBook setState={setAction} />}
      </section>
    </div>
  );
}
