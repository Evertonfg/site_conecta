import React from "react";

export default function Terms() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Termos e Condições de Uso
      </h1>

      <p className="mb-6 text-gray-700 leading-8">
        Bem-vindo à ConectaStartup. Ao acessar ou utilizar nossos serviços,
        plataformas, aplicações ou website, você declara que leu, compreendeu
        e concorda integralmente com estes Termos e Condições de Uso. Caso não
        concorde com qualquer disposição aqui prevista, recomendamos que não
        utilize nossos serviços.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        1. Objeto
      </h2>

      <p className="text-gray-700 leading-8">
        Estes Termos regulam a utilização dos serviços disponibilizados pela
        ConectaStartup, incluindo plataformas de telecomunicações,
        mensageria, APIs, integrações, soluções digitais e demais produtos
        oferecidos pela empresa.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        2. Cadastro do Usuário
      </h2>

      <p className="text-gray-700 leading-8">
        Alguns serviços poderão exigir cadastro. O usuário compromete-se a
        fornecer informações verdadeiras, completas e atualizadas, sendo
        responsável pela confidencialidade de suas credenciais de acesso e por
        todas as atividades realizadas em sua conta.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        3. Utilização dos Serviços
      </h2>

      <p className="text-gray-700 leading-8">
        Os serviços deverão ser utilizados exclusivamente para fins lícitos,
        respeitando a legislação brasileira, as normas regulatórias e os
        direitos de terceiros.
      </p>

      <p className="text-gray-700 leading-8 mt-4">
        É expressamente proibido utilizar a plataforma para:
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
        <li>Práticas ilegais ou fraudulentas;</li>
        <li>Envio de spam ou mensagens não autorizadas;</li>
        <li>Distribuição de conteúdo ilícito ou ofensivo;</li>
        <li>Violação de direitos autorais ou propriedade intelectual;</li>
        <li>Tentativas de invasão, exploração de vulnerabilidades ou ataques aos sistemas.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        4. Responsabilidades do Usuário
      </h2>

      <p className="text-gray-700 leading-8">
        O usuário é integralmente responsável pelas informações inseridas na
        plataforma, pelo conteúdo enviado por meio dos serviços contratados e
        pela utilização adequada das ferramentas disponibilizadas.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        5. Disponibilidade dos Serviços
      </h2>

      <p className="text-gray-700 leading-8">
        A ConectaStartup empregará seus melhores esforços para manter seus
        serviços disponíveis continuamente. Entretanto, poderão ocorrer
        interrupções temporárias decorrentes de manutenção, atualização,
        falhas de infraestrutura, caso fortuito ou força maior.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        6. Propriedade Intelectual
      </h2>

      <p className="text-gray-700 leading-8">
        Todo o conteúdo da plataforma, incluindo marcas, logotipos, layouts,
        códigos, textos, imagens, sistemas e demais materiais, é de propriedade
        exclusiva da ConectaStartup ou de seus licenciadores, sendo vedada sua
        reprodução, distribuição ou utilização sem autorização prévia.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        7. Limitação de Responsabilidade
      </h2>

      <p className="text-gray-700 leading-8">
        A ConectaStartup não será responsável por prejuízos decorrentes do uso
        inadequado da plataforma, indisponibilidade causada por terceiros,
        problemas na conexão de internet do usuário ou eventos de força maior.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        8. Suspensão ou Encerramento
      </h2>

      <p className="text-gray-700 leading-8">
        A empresa poderá suspender ou encerrar o acesso de usuários que violem
        estes Termos, utilizem os serviços de forma ilícita ou coloquem em
        risco a segurança da plataforma, sem prejuízo das medidas legais
        cabíveis.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        9. Alterações dos Termos
      </h2>

      <p className="text-gray-700 leading-8">
        Estes Termos poderão ser atualizados a qualquer momento para refletir
        mudanças legais, regulatórias ou operacionais. A versão mais recente
        estará sempre disponível neste website.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        10. Lei Aplicável e Foro
      </h2>

      <p className="text-gray-700 leading-8">
        Estes Termos são regidos pelas leis da República Federativa do Brasil.
        Fica eleito o foro da comarca da sede da ConectaStartup para dirimir
        quaisquer controvérsias oriundas destes Termos, com renúncia expressa a
        qualquer outro, por mais privilegiado que seja.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        11. Contato
      </h2>

      <p className="text-gray-700 leading-8">
        Em caso de dúvidas sobre estes Termos e Condições de Uso, entre em
        contato conosco através do e-mail:
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
