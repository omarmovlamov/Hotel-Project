import "../styles/aboutPage.css";
import Cartoon1 from "../imgs/55.png";
import Cartoon2 from "../imgs/51.png";

function AboutPage({ selectedOption }) {
  if (selectedOption === "Tr") {
    return (
      <div className="about">
        <div className="about-card animate__animated animate__bounceInLeft">
          <div className="about-container-top">
            <div className="about-t-container-right">
              <img src={Cartoon1} alt="Cartoon" />
            </div>
            <div className="about-t-container-left">
              <h2>Şıklık ve Konfor</h2>
              <p>
                Dexsvoa Hotel, modern ve zarif tasarımı ile sizi büyülüyor. Her
                oda, konforlu yataklar, lüks banyolar ve muhteşem manzaralarla
                donatılmıştır. Odalarımız, misafirlerimizin rahatlığı ve huzuru
                için düşünülerek tasarlanmıştır.
              </p>

              <h2>Lezzet Dolu Deneyim</h2>
              <p>
                Restoranlarımız ve kafelerimiz, dünya mutfağının en lezzetli
                tatlarını sunar. Şeflerimiz, yerel ve uluslararası mutfaklardan
                ilham alarak harika yemekler hazırlarlar. Dexsvoa'da yemek,
                lezzet yolculuğunun başlangıcıdır.
              </p>

              <h2>Etkinlikler ve Eğlence</h2>
              <p>
                Otelimiz, her yaşa ve zevke uygun bir dizi etkinlik ve eğlence
                seçeneği sunar. Havuzlarımızda serinleyebilir, spa
                hizmetlerimizden yararlanabilir, gece kulüplerinde eğlenebilir
                ve daha fazlasını keşfedebilirsiniz.
              </p>
            </div>
          </div>

          <div className="about-container-bottom">
            <div className="about-b-container-right">
              <h2>Konfor ve Rahatlık</h2>
              <p>
                Dexsvoa Hotel, konfor ve rahatlık arayanlar için mükemmel bir
                seçenektir. Odalarımızdaki lüks yataklarda rahatça
                dinlenebilirsiniz. Ayrıca, her türlü ihtiyacınıza hizmet veren
                personelimiz her zaman yanınızda.
              </p>
              <h2>Manzara ve Doğa</h2>
              <p>
                Dexsvoa Hotel çevresindeki muhteşem doğa manzaralarıyla ünlüdür.
                Doğa yürüyüşleri, bisiklet turları ve doğanın tadını çıkarmak
                isteyenler için mükemmel bir seçenektir.
              </p>

              <h2>Bizimle Seyahat Deneyimi</h2>
              <p>
                Dexsvoa Hotel, misafirlerine unutulmaz bir seyahat deneyimi
                sunar. Siz de bizimle seyahat edin ve unutulmaz anılar
                biriktirin. Dexsvoa Hotel: Sizin için harika bir deneyim!
              </p>
            </div>
            <div className="about-b-container-left">
              <img src={Cartoon2} alt="Cartoon" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="about">
        <div className="about-card animate__animated animate__bounceInLeft">
          <div className="about-container-top">
            <div className="about-t-container-right">
              <img src={Cartoon1} alt="Cartoon" />
            </div>
            <div className="about-t-container-left">
              <h2>Elegance and Comfort</h2>
              <p>
                Dexsvoa Hotel fascinates you with its modern and elegant design.
                Each room with comfortable beds, luxury bathrooms and stunning
                views. equipped. Our rooms, the comfort and peace of our guests
                has been designed with you in mind.
              </p>

              <h2>Flavorful Experience</h2>
              <p>
                Our restaurants and cafes, the most delicious of world cuisine
                presents its flavors. Our chefs from local and international
                cuisines Inspired by their inspiration, they prepare great
                meals. dining at Dexsvoa, It is the beginning of the flavor
                journey.
              </p>

              <h2>Events and Entertainment</h2>
              <p>
                Our hotel offers a range of activities and entertainment for all
                ages and tastes. offers the option. You can cool off in our
                pools, spa can benefit from our services, have fun in nightclubs
                and you can discover more.
              </p>
            </div>
          </div>

          <div className="about-container-bottom">
            <div className="about-b-container-right">
              <h2>Comfort and Convenience</h2>
              <p>
                Dexsvoa Hotel is the perfect destination for those seeking
                comfort and convenience. is an option. Comfortably in the luxury
                beds in our rooms You can rest. In addition, serving all your
                needs Our staff is always with you.
              </p>
              <h2>Landscape and Nature</h2>
              <p>
                Dexsvoa Hotel is famous for the magnificent natural landscapes
                around it. Nature walks, bike tours and enjoying nature It is an
                excellent option for those who want it.
              </p>

              <h2>Travel Experience With Us</h2>
              <p>
                Dexsvoa Hotel offers its guests an unforgettable travel
                experience. presents. Travel with us and make unforgettable
                memories accumulate. Dexsvoa Hotel: A great experience for you!
              </p>
            </div>
            <div className="about-b-container-left">
              <img src={Cartoon2} alt="Cartoon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
