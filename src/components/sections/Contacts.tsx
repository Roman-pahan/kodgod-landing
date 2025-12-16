import React, { useState } from "react";

export const Contacts: React.FC = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // можно потом добавить реальную отправку на сервер
    setTimeout(() => setSent(false), 4000); // через 4 сек убираем
  };

  return (
    <section id="contacts">
      <div className="container">
        <h2 className="section-title">Контакты и запрос на проект</h2>
        <p className="section-subtitle">
          Опишите коротко задачу и желаемый результат — в ответ будут предложены
          варианты реализации и ориентировочная стоимость работ.
        </p>

        <div className="contacts-grid">
          <div>
            {/* левая колонка так же, как было */}
            <ul className="contact-list">
              <li>
                <span className="contact-label">Email</span>
                <span className="contact-value">info@kodgod.ru</span>
              </li>
            </ul>

            <p
              style={{
                marginTop: 14,
                fontSize: 13,
                color: "var(--muted)",
              }}
            >
              Для банков и партнёров возможно предоставление дополнительной
              информации: описание инфраструктуры, используемые технологии,
              пример технического задания и акты выполненных работ.
            </p>
          </div>

          <div className="contact-form">
            <h3>Быстрый запрос</h3>

            {sent && (
              <div className="success-banner">
                Спасибо, ваша заявка отправлена. Мы свяжемся с вами после
                обработки запроса.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Имя / организация</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Как к вам обращаться"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email или мессенджер</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Контакт для связи"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Кратко о задаче</label>
                <textarea
                  id="message"
                  placeholder="Например: настроить сервер, разработать сервис, интегрировать систему и т.п."
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary full-width">
                Отправить запрос
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
