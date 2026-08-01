import React from "react";

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Termos de Serviço</h1>

      <p className="mb-4">
        Ao utilizar este site, você concorda com os presentes Termos de Serviço. 
        Nosso objetivo é garantir transparência, segurança e uma boa experiência 
        para todos os usuários.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Uso da Plataforma</h2>
      <p className="mb-4">
        O usuário se compromete a utilizar o site de forma responsável, sem 
        violar leis, regulamentos ou direitos de terceiros.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Coleta de Dados</h2>
      <p className="mb-4">
        Alguns dados podem ser coletados para melhorar a experiência do usuário 
        e garantir o funcionamento adequado da plataforma.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Responsabilidades</h2>
      <p className="mb-4">
        Não nos responsabilizamos por danos causados por uso indevido da 
        plataforma ou por falhas externas fora do nosso controle.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Alterações</h2>
      <p className="mb-4">
        Os termos podem ser atualizados periodicamente. Recomendamos que o 
        usuário revise esta página regularmente.
      </p>

      <p className="mt-10 text-sm text-gray-500">
        Última atualização: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
