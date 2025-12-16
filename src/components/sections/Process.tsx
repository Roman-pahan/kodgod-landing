import React from "react";

export const ProcessSection: React.FC = () => (
  <section>
    <div className="container">
      <h2 className="section-title">Как происходит работа</h2>
      <p className="section-subtitle">
        С самого начала фиксируем ожидания, объём работ и результаты по этапам,
        чтобы вам было понятно, что и когда будет сделано.
      </p>
      <div className="steps">
        <div className="step">
          <div className="step-number">Шаг 1</div>
          <div className="step-title">Обсуждение задачи</div>
          <div className="step-text">
            Вы описываете текущую ситуацию и желаемый результат. Определяем
            приоритеты и ориентировочные сроки.
          </div>
        </div>
        <div className="step">
          <div className="step-number">Шаг 2</div>
          <div className="step-title">Предложение и план</div>
          <div className="step-text">
            Формируем архитектуру решения, список работ и этапов. При
            необходимости готовим техническое задание.
          </div>
        </div>
        <div className="step">
          <div className="step-number">Шаг 3</div>
          <div className="step-title">Реализация</div>
          <div className="step-text">
            Разработка, настройка оборудования, интеграции. Регулярно показываем
            прогресс и согласуем изменения.
          </div>
        </div>
        <div className="step">
          <div className="step-number">Шаг 4</div>
          <div className="step-title">Запуск и поддержка</div>
          <div className="step-text">
            Ввод системы в эксплуатацию, обучение ответственных сотрудников,
            дальнейшее сопровождение по договорённости.
          </div>
        </div>
      </div>
    </div>
  </section>
);
