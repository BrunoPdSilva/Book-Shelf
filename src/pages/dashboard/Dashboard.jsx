import { useState } from 'react';
import { motion } from 'framer-motion';

import { FilePlus, CloudArrowUp } from 'phosphor-react';

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
        <section className="action-buttons">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
          >
            <ActionButton
              text={'Adicionar livro'}
              color="#06D6A0"
              type="add"
              setState={setAction}
            >
              <FilePlus size={28} />
            </ActionButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.3,
            }}
          >
            <ActionButton
              text={'Atualizar livro'}
              color="#FFD166"
              type="update"
              setState={setAction}
            >
              <CloudArrowUp size={28} />
            </ActionButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.4,
            }}
          >
            <ActionButton
              text={'Excluir livro'}
              color="#EB5E28"
              type="delete"
              setState={setAction}
            >
              <FilePlus size={28} />
            </ActionButton>
          </motion.div>
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
