import React from "react";

export const Footer: React.FC = () => (
  <footer>
    <div className="container footer-grid">
      <div className="footer-legal">
        ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ УЛАНОВ АЛЕКСАНДР ВЛАДИМИРОВИЧ
        <br />
        ИНН&nbsp;402915430758&nbsp;&nbsp;|&nbsp;&nbsp;ОГРНИП&nbsp;325400000045933
      </div>

      <div className="footer-row">
        <div className="footer-domain">
          Доменное имя: <span>kodgod.ru</span>
        </div>
        <div className="badge">
          <span>IT-сопровождение</span>
          <span>•</span>
          <span>Разработка и инфраструктура</span>
        </div>
      </div>
    </div>
  </footer>
);
