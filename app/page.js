"use client";
import Counter from "@/components/Counter";
import AkpagerAccordion from "@/components/AkpagerAccordion";
import TestimonialSlider2 from "@/components/TestimonialSlider2";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Nav, Tab, Accordion } from "react-bootstrap";

// Example: faq-data.js or within your FAQ component file
export const accordionItems = [
  {
    id: 1,
    title: "Como faço para comprar o GeloMais?",
    value:
      "Você pode adquirir nossos produtos diretamente pelo site, acessando a área de pedidos para revendedores ou entrando em contato conosco por telefone ou WhatsApp. Se não for um revendedor cadastrado, faça seu registro na página específica.",
  },
  {
    id: 2,
    title: "Quais são os tamanhos de embalagem disponíveis?",
    value:
      "Oferecemos Gelo em Cubos em embalagens de 2,9 kg e 5 kg, além de Gelo em Escamas em embalagens de 10 kg e 20 kg, todas produzidas com água potável.",
  },
  {
    id: 3,
    title: "Qual a diferença entre Gelo em Cubos e Gelo em Escamas?",
    value:
      "O Gelo em Cubos é indicado para consumo direto em bebidas, já o Gelo em Escamas não é apropriado para consumo humano, sendo ideal para conservar alimentos e gelar produtos diversos (garrafas, latas, serpentinas etc).",
  },
  {
    id: 4,
    title: "Como me tornar um revendedor autorizado?",
    value:
      "Para se tornar um revendedor, basta acessar nosso formulário de cadastro na página específica ou entrar em contato com a equipe GeloMais. Oferecemos suporte completo para o seu negócio.",
  },
  {
    id: 5,
    title: "Existe uma quantidade mínima para entrega?",
    value:
      "Sim, definimos quantidades mínimas de acordo com cada embalagem e região. Entre em contato para saber mais detalhes e garantir o melhor atendimento.",
  },
  {
    id: 6,
    title: "Em quanto tempo recebo meu pedido?",
    value:
      "O prazo de entrega varia conforme a localização e a demanda do momento. Entretanto, trabalhamos para manter prazos ágeis e entregas pontuais em todas as regiões atendidas.",
  },
];

const page = () => {
  const [active, setActive] = useState("collapse1");
  return (
    <AkpagerLayout footer={2} header={2} bodyClass={"home-two"} onePage>
      {/* Hero area start */}
      <section
        id="home"
        className="hero-area-two bgp-bottom bgc-black py-140 rpt-95 rpb-100"
        style={{ backgroundImage: 'url("/images/gelo-hero-bg.jpg")' }}
      >
        <div className="container">
          <div className="row gap-150 justify-content-center">
            <div className="col-lg-12">
              <div
                className="hero-content style-two text-white rmb-65 text-center"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1>
                  Fábrica de Gelo em Cubos e Escamas Produzidos com <span>Água Potável</span>
                </h1>
                <p className="mt-4">
                  Seja bem-vindo à <strong>GeloMais</strong>, sua melhor opção em gelo para uso doméstico, comercial e
                  industrial. Aqui você encontra:
                  <br />
                  Gelo em Cubos, Gelo em Escamas, Revenda, e Muito Mais!
                </p>
                <hr className="mt-4 mb-4" />
                {/* Replace the hero's link section with a single CTA button */}
                <div className="d-flex flex-wrap justify-content-center gap-4">
                  <Link href="#fazer-pedido" className="theme-btn">
                    Comprar Agora <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero area End */}
      {/* A EMPRESA SECTION */}
      <section id="empresa" className="services-two-area pt-120 rpt-100 pb-90 rpb-70 rel z-2">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-8" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
              <div className="section-title mb-40">
                <h2>
                  Sobre a <span>GeloMais</span>
                </h2>
              </div>
              <p>
                Somos uma empresa especializada na produção de gelo em cubos e em escamas. Utilizamos água potável para
                garantir a melhor qualidade do produto e atender diversas demandas, desde estabelecimentos comerciais até
                eventos de grande porte.
              </p>
              <p className="mt-3">
                Conheça nossa história, confira nossos produtos e encontre o ponto de venda mais próximo de você!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* A EMPRESA SECTION END */}
      {/* PRODUTOS SECTION */}
      <section id="produtos" className="services-two-area pt-60 rpt-60 pb-90 rpb-70 rel z-2 bgc-lighter">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-8" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
              <div className="section-title mb-40">
                <h2>
                  Nossos <span>Produtos</span>
                </h2>
              </div>
              <p>
                GeloMais oferece gelo em cubos e gelo em escamas em diversos tamanhos de embalagens para atender suas
                necessidades.
              </p>
            </div>
          </div>
          <div className="row pt-45 justify-content-center">
            {/* Gelo em Cubos */}
            <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
              <div className="iconic-box style-four">
                <div className="icon">
                  <i className="far fa-cube" />
                </div>
                <div className="content">
                  <h5>Gelo em Cubos</h5>
                  <p>
                    Produzido com água potável, o gelo em cubos é muito utilizado diretamente nas bebidas, tanto no dia a
                    dia, como em bares e restaurantes para preparar sucos e coquetéis.
                  </p>
                  <p className="mt-2">
                    <strong>Tamanhos disponíveis:</strong> 2,9kg e 5kg
                  </p>
                </div>
              </div>
            </div>
            {/* Gelo em Escamas */}
            <div
              className="col-xl-4 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-four color-two">
                <div className="icon">
                  <i className="far fa-snowflake" />
                </div>
                <div className="content">
                  <h5>Gelo em Escamas</h5>
                  <p>
                    Embora seja produzido com água potável, não é apropriado para consumo direto. O gelo em escamas é ideal
                    para gelar produtos diversos (garrafas, latas, serpentinas de chopp) e também para conservação de
                    alimentos como carnes, peixes e frios.
                  </p>
                  <p className="mt-2">
                    <strong>Tamanhos disponíveis:</strong> 10kg e 20kg
                  </p>
                </div>
              </div>
            </div>
            {/* Link to all products */}
            <div
              className="col-xl-4 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-four color-three text-center h-100 d-flex flex-column justify-content-center">
                <h4>Conheça Todos os Nossos Produtos</h4>
                <Link href="#produtos" className="theme-btn mt-3">
                  Ver Detalhes <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PRODUTOS SECTION END */}

      {/* TESTIMONIALS */}
      {/* Testimonials Area Start */}
      <section id="testimonials" className="testimonials-area pb-120 rpb-100 rel z-1 mt-3">
        <div
          className="testimonials-bg bgc-black"
          style={{
            backgroundImage: 'url("/images/backgrounds/box-shape.png")',
          }}
        />
        <TestimonialSlider2 />
      </section>
      {/* Testimonials Area End */}
      {/* ONDE COMPRAR SECTION */}
      <section id="onde-comprar" className="counter-two-area pt-70 pb-70 rpb-50" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container container-1070 text-center">
          <h2 className="mb-4" data-aos="fade-up">
            Está precisando de Gelo?
          </h2>
          <p className="mb-5" data-aos="fade-up" data-aos-delay={100}>
            Encontre o ponto de venda mais próximo de você e garanta a qualidade de nosso gelo.
          </p>
          <Link href="#contato" className="theme-btn" data-aos="fade-up" data-aos-delay={200}>
            Onde Comprar <i className="far fa-arrow-right" />
          </Link>
        </div>
      </section>
      {/* ONDE COMPRAR SECTION END*/}
      {/* SEJA REVENDEDOR SECTION */}
      <section id="seja-revendedor" className="customer-data-area py-120 rpy-100 bgc-lighter">
        <div className="container">
          <div className="row gap-135 align-items-center">
            <div className="col-xl-6">
              <div className="customer-data-content" data-aos="fade-left" data-aos-duration={1500} data-aos-offset={50}>
                <div className="section-title mb-40">
                  <h2>
                    Quer fazer um ótimo negócio na sua região? Seja um revendedor <span>GeloMais</span>
                  </h2>
                </div>
                <p>
                  Aumente a lucratividade do seu negócio comercializando gelo de alta qualidade. Nossa equipe oferece suporte
                  completo, desde o cadastro até a entrega dos produtos.
                </p>
                <ul className="icon-list style-two mt-35">
                  <li>
                    <i className="fal fa-check" /> Cadastre-se para ser um revendedor autorizado.
                  </li>
                  <li>
                    <i className="fal fa-check" /> Atendimento diferenciado e entregas pontuais.
                  </li>
                  <li>
                    <i className="fal fa-check" /> Suporte contínuo para potencializar suas vendas.
                  </li>
                </ul>
                <Link href="#fazer-pedido" className="theme-btn mt-4">
                  Descubra Como <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="customer-data-images" data-aos="fade-right" data-aos-duration={1500} data-aos-offset={50}>
                <img src="/images/revendedor.jpg" alt="Imagem Seja Revendedor GeloMais" style={{ borderRadius: "8px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SEJA REVENDEDOR SECTION END */}

      {/* ÁREA DE PEDIDOS */}
      <section id="fazer-pedido" className="tab-area bgc-white pt-120 rpt-100 pb-85 bgs-cover">
        <div className="container">
          <div className="section-title mb-35 text-center" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
            <h2>
              <span>Fazer Pedido</span> - Área de pedidos para Revendedores
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="text-center mb-5">
                Se você não é um Revendedor autorizado GeloMais, <Link href="#contato">faça seu cadastro aqui</Link>.
              </p>
              <p className="text-center mb-4">
                Se a sua empresa é Revendedora autorizada e já possui cadastro ativo, siga os passos abaixo e faça seu
                pedido.
              </p>
              {/* Simple multi-step form example */}
              <div className="p-4 border rounded">
                <h4 className="mb-3">Passo 1 - Escolha a quantidade:</h4>
                <form>
                  <div className="form-group mb-3">
                    <label htmlFor="cubo29">Gelo em Cubos (2,9kg)</label>
                    <input type="number" className="form-control w-50" id="cubo29" defaultValue={0} />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="cubo5">Gelo em Cubos (5,0kg)</label>
                    <input type="number" className="form-control w-50" id="cubo5" defaultValue={0} />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="escama10">Gelo em Escamas (10Kg)</label>
                    <input type="number" className="form-control w-50" id="escama10" defaultValue={0} />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="escama20">Gelo em Escamas (20Kg)</label>
                    <input type="number" className="form-control w-50" id="escama20" defaultValue={0} />
                  </div>
                  <div className="text-end">
                    <button type="button" className="theme-btn">
                      Próximo <i className="far fa-arrow-right" />
                    </button>
                  </div>
                </form>
              </div>
              {/* Additional steps or logic can go below */}
            </div>
          </div>
        </div>
      </section>
      {/* ÁREA DE PEDIDOS END */}

      {/* FAQs Area Start */}
      <section id="faqs" className="faqs-area bgc-lighter pt-125 rpt-105 pb-105 rpb-85">
        <div className="container">
          <div className="row gap-120">
            <div className="col-lg-5">
              <div className="faq-left-content rmb-55" data-aos="fade-left" data-aos-duration={1500} data-aos-offset={50}>
                <div className="section-title mb-25">
                  <span className="subtitle-one mb-20">
                    <i className="fas fa-usd-square" /> FAQs
                  </span>
                  <h2>Perguntas Frequentes</h2>
                </div>
                <p>
                  Tire suas principais dúvidas sobre nossos produtos, serviços e processos. Se precisar de mais informações,
                  fique à vontade para entrar em contato.
                </p>
                <a href="#contato" className="theme-btn style-three mt-10">
                  Saiba Mais <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              {/* Ensure you have "active" and "setActive" in state */}
              <Accordion
                className="accordion"
                defaultActiveKey={active}
                id="accordionOne"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                {accordionItems.map((item) => (
                  <AkpagerAccordion
                    key={item.id}
                    title={item.title}
                    event={`collapse${item.id}`}
                    onClick={() => setActive(active === `collapse${item.id}` ? "" : `collapse${item.id}`)}
                    active={active}
                  >
                    {item.value}
                  </AkpagerAccordion>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs Area End */}
      {/* CONTATO E INFORMAÇÕES */}
      <section id="contato" className="lead-monitoring-area pt-120 rpt-100" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container">
          <div className="row gap-135 align-items-center">
            <div className="col-xl-6">
              <div className="lead-monitoring-content" data-aos="fade-right" data-aos-duration={1500} data-aos-offset={50}>
                <div className="section-title mb-40">
                  <h2>
                    GeloMais <span>Contato</span>
                  </h2>
                </div>
                <p>Entre em contato conosco e garanta o melhor atendimento para suas necessidades de gelo!</p>
                <ul className="icon-list style-two mt-25">
                  <li>
                    <i className="fal fa-map-marker-alt" /> <strong>Local: </strong> Rio de Janeiro - Brasil
                  </li>
                  <li>
                    <i className="fal fa-phone" /> <strong>Telefone: </strong> (XX) 1234-56789
                  </li>
                  <li>
                    <i className="fab fa-whatsapp" /> <strong>WhatsApp: </strong> <a href="#">Clique aqui</a>
                  </li>
                </ul>
                <p className="mt-4">
                  <strong>Email:</strong> contato@gelomais.com.br
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="lead-monitoring-images rpb-20"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="/images/contato.jpg" alt="Imagem Contato GeloMais" style={{ borderRadius: "8px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CONTATO E INFORMAÇÕES END */}
      {/* Client Logos Area Start */}
      <section
        className="client-logo-area-two pt-90 rpt-70 pb-80 rpb-60 bgp-center"
        style={{
          backgroundImage: "url(assets/images/backgrounds/client-logo.png)",
        }}
      >
        <div className="section-title text-center mb-30" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
          <h4>
            Temos mais de <span>1253</span> parceiros satisfeitos em todo o país — e contando!
          </h4>
        </div>
      </section>
      {/* Client Logos Area End */}
    </AkpagerLayout>
  );
};
export default page;
