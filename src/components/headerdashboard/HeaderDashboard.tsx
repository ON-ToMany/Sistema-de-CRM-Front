import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function HeaderDashboard() {
  const { usuario } = useContext(AuthContext);

  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-gray-800">Olá, {usuario.nome || 'Cliente'}!</h1>
      <p className="text-gray-600 text-lg mt-2">
        Acompanhe aqui o processo de descarte do seu equipamento e seu impacto.
      </p>
      <hr className="mt-8 border-t-2 border-[#B3C6B9]" />
    </div>
  );
}

export default HeaderDashboard;