import React from "react";

export default function Privacidade() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>

      <p className="mb-4">
        Esta Política de Privacidade descreve como coletamos, utilizamos e 
        protegemos as informações dos usuários que acessam nossa plataforma.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Informações Coletadas</h2>
      <p className="mb-4">
        Podemos coletar dados como nome, e-mail, telefone e informações de 
        navegação para melhorar sua experiência.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Uso das Informações</h2>
      <p className="mb-4">
        Os dados são utilizados para comunicação, segurança, melhorias do 
        sistema e personalização de conteúdo.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Compartilhamento</h2>
      <p className="mb-4">
        Não compartilhamos informações pessoais com terceiros, exceto quando 
        exigido por lei ou para garantir o funcionamento da plataforma.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Segurança</h2>
      <p className="mb-4">
        Adotamos medidas técnicas e administrativas para proteger os dados 
        contra acessos não autorizados.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Direitos do Usuário</h2>
      <p className="mb-4">
        O usuário pode solicitar acesso, correção ou exclusão de seus dados 
        pessoais conforme previsto na legislação vigente.
      </p>

      <p className="mt-10 text-sm text-gray-500">
        Última atualização: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
