import React from "react";

export const Cases: React.FC = () => (
  <section>
    <div className="container">
      <h2 className="section-title">Примеры задач</h2>
      <p className="section-subtitle">
        Типовые сценарии, с которыми обращаются клиенты. Наполнение и объём
        работ подбираем индивидуально под конкретный бизнес.
      </p>

      <div className="cases">
        <div className="case">
          <div className="case-industry">Офисная инфраструктура</div>
          <div className="case-title">Наладка рабочих мест и сети</div>
          <div className="case-text">
            Организация офисной сети с доступом к серверу, настройка рабочих
            станций, удалённого доступа и базового резервного копирования для
            небольшой команды.
          </div>
        </div>

        <div className="case">
          <div className="case-industry">Внутренние сервисы</div>
          <div className="case-title">Сервис учёта заявок</div>
          <div className="case-text">
            Разработка веб-кабинета для учёта обращений и задач, интеграция с
            существующими системами, разграничение ролей и журналирование
            действий.
          </div>
        </div>

        <div className="case">
          <div className="case-industry">Интеграции</div>
          <div className="case-title">Связка внешних сервисов</div>
          <div className="case-text">
            Настройка обмена данными между несколькими сервисами и
            оборудованием, автоматическая выгрузка отчётов и уведомления о
            ключевых событиях.
          </div>
        </div>
      </div>
    </div>
  </section>
);
