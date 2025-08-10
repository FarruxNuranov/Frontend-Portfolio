import React, { memo, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import NetParticlesLeft from "../../components/LeftParticles/LeftParticles";

const ImageCard = memo(function ImageCard({ img, description, link }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <article className={`po_item ${loaded ? "is-loaded" : ""}`}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="po_link"
        aria-label="Открыть проект"
      >
        <img
          src={img}
          alt={description}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          sizes="(max-width: 768px) 100vw, 520px"
        />
        <div className="content">
          <p className="po_desc">{description}</p>
          <span className="po_btn">Смотреть проект</span>
        </div>
      </a>
    </article>
  );
});

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <section className="portfolio-section">
        <NetParticlesLeft />

        <Container className="portfolio-content">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Портфолио | {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>

          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">Портфолио</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>

          <section className="po_items_ho" aria-label="Список проектов">
            {dataportfolio.map((it, i) => (
              <ImageCard
                key={i}
                img={it.img}
                description={it.description}
                link={it.link}
              />
            ))}
          </section>
        </Container>
      </section>
    </HelmetProvider>
  );
};