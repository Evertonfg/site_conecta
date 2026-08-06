import React from "react";

export default function Privacidade() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Política de Privacidade
      </h1>

      <p className="mb-6 text-gray-700 leading-8">
        A ConectaStartup respeita sua privacidade e está comprometida com a
        proteção dos dados pessoais de seus usuários. Esta Política de
        Privacidade explica como coletamos, utilizamos, armazenamos e
        protegemos suas informações, em conformidade com a Lei nº 13.709/2018
        (Lei Geral de Proteção de Dados – LGPD). Ao utilizar nossos serviços,
        você declara estar ciente e concordar com os termos desta política.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        1. Abrangência
      </h2>

      <p className="text-gray-700 leading-8">
        Esta política aplica-se a todos os usuários e visitantes dos sites,
        sistemas, aplicações e demais serviços disponibilizados pela
        ConectaStartup, bem como aos potenciais clientes que utilizem nossos
        canais de atendimento.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        2. Dados coletados
      </h2>

      <p className="text-gray-700 leading-8 mb-4">
        Durante a utilização de nossos serviços poderão ser coletados dados de
        navegação automaticamente, bem como informações fornecidas pelo próprio
        usuário.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Nome completo;</li>
        <li>Nome da empresa;</li>
        <li>CPF ou CNPJ;</li>
        <li>Telefone;</li>
        <li>E-mail;</li>
        <li>Endereço;</li>
        <li>Informações relacionadas ao negócio;</li>
        <li>Endereço IP;</li>
        <li>Cookies e dados de navegação;</li>
        <li>Data e horário de acesso;</li>
        <li>Histórico de utilização dos serviços.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        3. Finalidade do tratamento
      </h2>

      <p className="text-gray-700 leading-8">
        Os dados pessoais poderão ser utilizados para:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
        <li>Prestação dos serviços contratados;</li>
        <li>Atendimento ao cliente;</li>
        <li>Autenticação e segurança da plataforma;</li>
        <li>Melhoria contínua dos serviços;</li>
        <li>Cumprimento de obrigações legais;</li>
        <li>Prevenção à fraude;</li>
        <li>Comunicações institucionais e comerciais.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        4. Compartilhamento de dados
      </h2>

      <p className="text-gray-700 leading-8">
        A ConectaStartup não comercializa dados pessoais. O compartilhamento
        poderá ocorrer apenas quando necessário para cumprimento de obrigações
        legais, execução de contratos, determinação judicial ou com parceiros
        responsáveis pela operação dos serviços, sempre observando os requisitos
        da LGPD.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        5. Segurança das informações
      </h2>

      <p className="text-gray-700 leading-8">
        Adotamos medidas técnicas e administrativas para proteger os dados
        pessoais contra acessos não autorizados, perda, alteração, destruição ou
        divulgação indevida. Entre elas destacam-se criptografia de senhas,
        controle de acesso aos sistemas e monitoramento dos ambientes onde os
        dados são armazenados.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        6. Direitos do titular
      </h2>

      <p className="text-gray-700 leading-8">
        Nos termos da LGPD, o titular poderá solicitar:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
        <li>Confirmação da existência de tratamento;</li>
        <li>Acesso aos dados pessoais;</li>
        <li>Correção de informações incorretas;</li>
        <li>Anonimização, bloqueio ou exclusão quando aplicável;</li>
        <li>Portabilidade dos dados;</li>
        <li>Revogação do consentimento;</li>
        <li>Informações sobre compartilhamento de dados.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        7. Retenção dos dados
      </h2>

      <p className="text-gray-700 leading-8">
        Os dados serão armazenados enquanto forem necessários para execução dos
        serviços, cumprimento de obrigações legais ou exercício regular de
        direitos, podendo permanecer armazenados mesmo após solicitação de
        exclusão quando houver obrigação legal para tanto.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        8. Dados sensíveis
      </h2>

      <p className="text-gray-700 leading-8">
        A ConectaStartup não solicita nem trata dados pessoais sensíveis como
        origem racial, convicções religiosas, opiniões políticas, dados de
        saúde, biométricos ou relativos à vida sexual dos usuários.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        9. Alterações desta Política
      </h2>

      <p className="text-gray-700 leading-8">
        Esta Política poderá ser alterada a qualquer momento para adequação às
        mudanças legais ou aos serviços oferecidos. Sempre que houver alterações
        relevantes, os usuários serão comunicados pelos canais oficiais da
        empresa.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        10. Contato
      </h2>

      <p className="text-gray-700 leading-8">
        Em caso de dúvidas sobre esta Política de Privacidade ou sobre o
        tratamento de seus dados pessoais, entre em contato conosco através do
        e-mail:
      </p>

      <p className="font-semibold mt-4 text-lg">
        suporte@conectastartup.com.br
      </p>

      <div className="border-t mt-12 pt-6 text-sm text-gray-500">
        Última atualização: {new Date().toLocaleDateString("pt-BR")}
      </div>
    </div>
  );
}
