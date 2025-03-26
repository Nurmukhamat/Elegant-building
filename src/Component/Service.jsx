import "../ComponentCss/Service.css"
export const Service = () => {
  return (
    <section id="services" className="services">
    <h2 className="servisOur">Наши Услуги</h2>
    <div className="service-cards">
        <div className="service-card">
            <h3>Базовый ремонт</h3>
            <p>Мы строим дома, учитывая все ваши пожелания. Современные технологии, качественные материалы и профессиональные специалисты.</p>
        </div>
        <div className="service-card">
            <h3>Средний ремонт</h3>
            <p>Качественный ремонт квартир и домов. От косметического ремонта до полной перепланировки.</p>
        </div>
        <div className="service-card">
            <h3>Качественный ремонт</h3>
            <p>Создаем индивидуальные проекты для жилых и коммерческих объектов, учитывая все современные требования.</p>
        </div>
    </div>
</section>
  )
}