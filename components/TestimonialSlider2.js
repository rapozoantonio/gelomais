"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";

export default class TestimonialSlider2 extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    return (
      <div className="container">
        <div className="row gap-60 align-items-center">
          {/* Left column with title and nav buttons */}
          <div
            className="col-lg-5 text-white rmb-55"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title text-white mb-40">
              <h2>
                O que nossos clientes dizem sobre <span>GeloMais</span>
              </h2>
            </div>
            <p>
              Confira abaixo as opiniões de quem já trabalha e confia em nossa
              qualidade e atendimento.
            </p>
            <div className="testimonials-arrows mt-55">
              <button className="slick-arrow testi-prev" onClick={this.previous}>
                <i className="fas fa-arrow-left" />
              </button>
              <button className="slick-arrow testi-next" onClick={this.next}>
                <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>

          {/* Slider column */}
          <div
            className="col-lg-7"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <Slider
              ref={(c) => (this.slider = c)}
              {...sliderProps.testiSliderSeven}
              className="testi-slider-seven mb-70"
            >
              {/* Slide 1 */}
              <div className="testimonial-item">
                <div className="author">
                  <div className="image">
                    <img src="assets/images/testimonials/author1.png" alt="" />
                  </div>
                  <div className="title">
                    <b>Márcio Favaro /</b> Gelo Treviso
                  </div>
                </div>
                <div className="author-text">
                  “Gelo Treviso, há 8 anos distribuindo os produtos da GeloMais
                  com seriedade, ética, honestidade e fazendo nosso melhor para
                  atender a região”.
                </div>
                <div className="testi-footer">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="text">
                    <span>5/5</span> de satisfação
                  </span>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="testimonial-item">
                <div className="author">
                  <div className="image">
                    <img src="assets/images/testimonials/author2.png" alt="" />
                  </div>
                  <div className="title">
                    <b>Sandro /</b> Auto Posto Ecos
                  </div>
                </div>
                <div className="author-text">
                  “O profissionalismo e a confiança sempre estiveram presentes há
                  mais de 20 anos na parceria entre as nossas duas empresas”.
                </div>
                <div className="testi-footer">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="text">
                    <span>5/5</span> de satisfação
                  </span>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="testimonial-item">
                <div className="author">
                  <div className="image">
                    <img src="assets/images/testimonials/author3.png" alt="" />
                  </div>
                  <div className="title">
                    <b>Ismael /</b> Posto Via Expressa
                  </div>
                </div>
                <div className="author-text">
                  “A pontualidade e a eficiência na entrega dos produtos são os
                  principais ingredientes que fazem a nossa parceria ser um
                  grande sucesso há mais de 15 anos”.
                </div>
                <div className="testi-footer">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="text">
                    <span>5/5</span> de satisfação
                  </span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
