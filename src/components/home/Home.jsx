import "./home.scss";
import "../general.scss";
import News from "../news/News";
import firstImage from "../../images/home-first-img.png";
import whoImage from "../../images/home-who-img.png";
import { allNews } from "./news";

const news = allNews;

const Home = () => {
  return (
    <div className="Home">
      <main>
        <section className="section first-section">
          <div className="first__container container">
            <div className="first-section__wrapper">
              <div className="first-section__img">
                <img src={firstImage} alt="cat" />
              </div>
              <div className="first-section__background">
                <div className="first-section__text-box">
                  <h2 className="first-section__heading section_heading">
                    Муркотливий Клуб
                  </h2>
                  <p className="first-section__info">
                    Місце, де зустрічаються серця, що б'ються в такт мурчанню
                    котів!
                  </p>
                  <a
                    href="http://facebook.com/"
                    className="button red_medium_button"
                  >
                    Долучитися
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section who-section">
          <div className="container who__container">
            <h2 className="who-section__heading section_heading">Хто ми</h2>
            <div className="who-section__wrapper">
              <div className="who-section__img">
                <img src={whoImage} alt="who we are" />
              </div>
              <div className="who-section__text-wrapper">
                <h2 className="who-section__heading-desk section_heading">
                  Хто ми
                </h2>
                <p className="who-section__info">
                  Селіна - місце для заводчиків породистих котів та просто
                  любителів цих чарівних мурчунів. У нашому клубі ви знайдете
                  все: консультації, клубні заходи (виставки), спілкування з
                  однодумцями, де кожен може поділитися своїм досвідом. Ми
                  допомагаємо новачкам отримати всю необхідну інформацію про
                  утримання, догляд, виховання улюбленців та навіть підбір
                  котеняти. Наша мета - створити спільноту, де кожен зможе
                  знайти своє місце серед справжніх кішкових друзів!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section news-section">
          <div className="container">
            <h2 className="news-section__heading section_heading">Новини</h2>
            <div className="news-section">
              <div className="news-section__list">
                {allNews.map(({ id, name, info, img }) => (
                  <News key={id} text={name} info={info} img={img} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
