import "../ComponentCss/Projects.css"
export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Наши проекты</h2>
      <div className="project-gallery">
          <div className="project-item">
              <img src="https://avatars.mds.yandex.net/i?id=90c98959be76f05d6f112e80009310c20147e5cd-5252264-images-thumbs&n=13" alt="Проект 1" />
              <p>Проект жилого дома</p>
          </div>
          <div className="project-item">
              <img src="https://avatars.mds.yandex.net/i?id=f5476a86cea604ae0941223174e0322201c2df9b-5357509-images-thumbs&n=13" alt="Проект 2" />
              <p>Коммерческое строение</p>
          </div>
          <div className="project-item">
              <img src="https://cdn-edge.kwork.ru/pics/t3/97/8802112-1596117397.jpg" alt="Проект 3"/>
              <p>Ремонт и отделка</p>
          </div>
      </div>
  </section>
  )
}
