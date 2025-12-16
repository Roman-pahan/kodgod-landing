import React from "react";

export const Hero: React.FC = () => (
  <section className="hero">
    <div className="container hero-grid">
      <div>
        <h1 className="hero-title">
          Разработка IT-проектов любой сложности <span>под ключ</span>
        </h1>
        <p className="hero-subtitle">
          Берём на себя полный цикл: от постановки задачи и проектирования до
          внедрения и технической поддержки. Подбираем, настраиваем и
          интегрируем компьютерное и серверное оборудование, программное
          обеспечение и облачные сервисы под задачи вашего бизнеса.
        </p>

        <div className="hero-actions">
          <a href="#contacts" className="btn btn-primary">
            Получить консультацию
          </a>
          <a href="#services" className="btn btn-outline">
            Посмотреть услуги
          </a>
        </div>

        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="hero-meta-label">Форма работы</span>
            <span className="hero-meta-value">ИП, официальный договор</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Формат</span>
            <span className="hero-meta-value">
              Удалённо и на выезде по договорённости
            </span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Документы</span>
            <span className="hero-meta-value">
              Счета, акты, техническая документация
            </span>
          </div>
        </div>
      </div>

      <aside className="hero-card">
        <div className="hero-card-title">Что делаем для компаний</div>
        <ul className="hero-card-list">
          <li>
            Разработка и доработка внутренних сервисов, кабинетов, интеграций
          </li>
          <li>Внедрение и настройка компьютерного и серверного оборудования</li>
          <li>Организация резервного копирования и базовой защиты данных</li>
          <li>Сопровождение и техническая поддержка существующих решений</li>
        </ul>
        <div className="hero-note">
          Работаем по предварительному обсуждению задач. Масштаб проекта и
          стоимость фиксируются в техническом задании и договоре.
        </div>
      </aside>
    </div>
  </section>
);
