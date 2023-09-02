import v1 from "../imgs/aboutUs1.jpg";
import v2 from "../imgs/aboutUs3.jpg";
import "../styles/aboutUs.css";
function AboutUs({ selectedOption }) {
  if (selectedOption === "Tr") {
    return (
      <div className="container">
        <div className="about-title">
          <h2>
            <b>Dexsvoa Hotel</b>: Sizin İçin Harika Bir Deneyim
          </h2>
          <p>
            Dexsvoa Hotel, misafirlerine unutulmaz bir konaklama deneyimi sunan,
            konfor ve zarafetin mükemmel bir karışımını sunan bir oteldir. 2003
            yılından beri misafirlerimize hizmet veriyor ve her geçen gün bu
            büyüleyici yolculuğumuzda daha da büyüyoruz.
          </p>
        </div>
        <div className="Main-container ">
          <div className="first">
            <div className="first-left">
              <img src={v1} alt="" />
            </div>
            <div className="first-right">
              <p>
                Eşsiz Konumumuz: Dexsvoa Hotel'de Özel Bir Kaçış, sıradanlıktan
                uzaklaşarak unutulmaz bir kaçış sunar. Şehir merkezinde olmamıza
                rağmen, iş ve turistik bölgelere kolay erişim sağlarız. Merkezi
                Konum: Her Yere Yakın Dexsvoa Hotel, turistik yerlere ve iş
                merkezlerine hızlı erişim sunar. Huzurlu Sığınak: Şehir
                Karmaşasından Uzak Şehir yaşamının karmaşasından kaçmak
                isteyenler için ideal bir seçenektir. Otelimiz, doğayla iç içe
                bir lüks ve huzur sunar. Dexsvoa Hotel, doğal güzelliklere ve
                tarihi mekanlara yakındır. Şehrin gürültüsünden uzaklaşarak
                doğanın tadını çıkarabilirsiniz. Misafirlerimizin rahatlığı ve
                huzuru her zaman önceliğimizdir. Dexsvoa Hotel, sizi
                ağırlamaktan mutluluk duyar. Şehir yaşamının enerjisi ve
                huzurunun bir araya geldiği bu deneyimi yaşamak için sizi
                bekliyoruz!
              </p>
            </div>
          </div>
          <div className=" second">
            <div className="second-left">
              <div className="socials">
                <h4>Sosyal Ağlarımız</h4>
                <div>
                  <div>
                    <i
                      className="fa-brands fa-instagram"
                      style={{ color: "#bc2a8d" }}
                    ></i>
                    <p>Instagram</p>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/" target="blanked">
                      <i
                        className="fa-solid fa-arrow-up-right-from-square icons-social"
                        style={{ fontSize: "15px" }}
                      ></i>
                      Follow
                    </a>
                  </div>
                </div>
                <div>
                  <div>
                    <i
                      className="fa-brands fa-facebook"
                      style={{ color: "#4867AA" }}
                    ></i>
                    <p>Facebook</p>
                  </div>
                  <div>
                    <a href="https://www.facebook.com/" target="blanked">
                      <i
                        className="fa-solid fa-arrow-up-right-from-square icons-social"
                        style={{ fontSize: "15px" }}
                      ></i>
                      Follow
                    </a>
                  </div>
                </div>
                <div>
                  <div>
                    <i
                      className="fa-brands fa-x-twitter "
                      style={{ color: "black" }}
                    ></i>
                    <p>Twitter</p>
                  </div>
                  <div>
                    <a href="https://twitter.com" target="blanked">
                      <i
                        className="fa-solid fa-arrow-up-right-from-square icons-social"
                        style={{ fontSize: "15px" }}
                      ></i>
                      Follow
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="second-right">
              <img src={v2} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="about-title">
          <h2>
            <b>Dexsvoa Hotel</b>: A Wonderful Experience For You
          </h2>
          <p>
            Dexsvoa Hotel offers its guests an unforgettable accommodation
            experience, providing a perfect blend of comfort and elegance. We
            have been serving our guests since 2003 and continue to grow with
            each passing day in this enchanting journey.
          </p>
        </div>
        <div className="Main-container ">
          <div className="first">
            <div className="first-left">
              <img src={v1} alt="" />
            </div>
            <div className="first-right">
              <p>
                Our Unique Location: Dexsvoa Hotel offers an exceptional escape,
                far from the ordinary. Despite being in the city center, we
                provide easy access to both business and tourist areas. Central
                Location: Conveniently Located Dexsvoa Hotel offers quick access
                to tourist attractions and business centers. Peaceful Sanctuary:
                Ideal for those looking to escape the hustle and bustle of city
                life. Our hotel offers a luxurious and tranquil experience
                immersed in nature. Dexsvoa Hotel is close to natural beauty and
                historic sites. You can enjoy the beauty of nature while getting
                away from the noise of the city. The comfort and tranquility of
                our guests are always our top priority. Dexsvoa Hotel is
                delighted to host you. We invite you to experience this blend of
                the energy and serenity of city life!
              </p>
            </div>
          </div>
          <div className=" second">
            <div className="second-left">
              <div className="socials">
                <h4>Our Social Networks</h4>
                <div>
                  <div>
                    <i
                      className="fa-brands fa-instagram"
                      style={{ color: "#bc2a8d" }}
                    ></i>
                    <p>Instagram</p>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/" target="blanked">
                      <i
                        className="fa-solid fa-arrow-up-right-from-square icons-social"
                        style={{ fontSize: "15px" }}
                      ></i>
                      Follow
                    </a>
                  </div>
                </div>
                <div>
                  <div>
                    <i
                      className="fa-brands fa-facebook"
                      style={{ color: "#4867AA" }}
                    ></i>
                    <p>Facebook</p>
                  </div>
                  <div>
                    <a href="https://www.facebook.com/" target="blanked">
                      <i
                        className="fa-solid fa-arrow-up-right-from-square icons-social"
                        style={{ fontSize: "15px" }}
                      ></i>
                      Follow
                    </a>
                  </div>
                </div>
                <div>
                  <div>
                    <i
                      className="fa-brands fa-x-twitter "
                      style={{ color: "black" }}
                    ></i>
                    <p>Twitter</p>
                  </div>
                  <div>
                    <a href="https://twitter.com" target="blanked">
                      <i
                        className="fa-solid fa-arrow-up-right-from-square icons-social"
                        style={{ fontSize: "15px" }}
                      ></i>
                      Follow
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="second-right">
              <img src={v2} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
