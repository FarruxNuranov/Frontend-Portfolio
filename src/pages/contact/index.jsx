import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, contactConfig } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import NetParticlesLeft from "../../components/LeftParticles/LeftParticles";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    title: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, loading: true }));

    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: formData.title || "Сообщение с портфолио",
      message: formData.message,
    };

    try {
      await emailjs.send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        { publicKey: contactConfig.YOUR_USER_ID }
      );

      setFormData({
        email: "",
        name: "",
        title: "",
        message: "",
        loading: false,
        show: true,
        alertmessage: "Готово! Сообщение отправлено.",
        variant: "success",
      });
    } catch (err) {
      console.error(err);
      setFormData((s) => ({
        ...s,
        loading: false,
        show: true,
        alertmessage:
          `Не удалось отправить. ${err?.text || "Проверь Service/Template/Public Key"}`,
        variant: "danger",
      }));
      document.getElementsByClassName("co_alert")[0]?.scrollIntoView();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  return (
    <HelmetProvider>
      <section className="contact-section">
        <NetParticlesLeft />

        <Container className="contact-content">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{meta.title} | Contact</title>
            <meta name="description" content={meta.description} />
          </Helmet>

          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
            <h1 className="display-4 mb-4">Свяжитесь со мной</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>

          <Row className="sec_sp">
            <Col lg="12">
              <Alert
                variant={formData.variant}
                className={`rounded-0 co_alert ${formData.show ? "d-block" : "d-none"}`}
                onClose={() => setFormData((s) => ({ ...s, show: false }))}
                dismissible
              >
                <p className="my-0">{formData.alertmessage}</p>
              </Alert>
            </Col>

            <Col lg="5" className="mb-5">
             <h3 className="color_sec py-4">Связаться со мной</h3>
              <address>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
              </address>
              <p>{contactConfig.description}</p>
            </Col>

            <Col lg="7" className="d-flex align-items-center">
              <form onSubmit={handleSubmit} className="contact__form w-100">
                <Row>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Имя"
                      value={formData.name}
                      type="text"
                      required
                      onChange={handleChange}
                    />
                  </Col>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control rounded-0"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={formData.email}
                      required
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <input
                  className="form-control rounded-0 mb-3"
                  id="title"
                  name="title"
                  placeholder="Тема (необязательно)"
                  value={formData.title}
                  onChange={handleChange}
                />

                <textarea
                  className="form-control rounded-0"
                  id="message"
                  name="message"
                  placeholder="Сообщение"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <br />
                <Row>
                  <Col lg="12" className="form-group">
                    <button className="btn ac_btn" type="submit" disabled={formData.loading}>
                      {formData.loading ? "Отправляю..." : "Отправить"}
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>

        <div className={formData.loading ? "loading-bar" : "d-none"}></div>
      </section>
    </HelmetProvider>
  );
};