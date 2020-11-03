import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn2.desidime.com/topics/photos/1118957/original/IN_PRIME_GW_FT_30_Days_1500x600_Desktop_1x._CB424371503_.jpg?1581188480"
          alt=""
        />

        <div className="home__row">
          <Product
            id="00001"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={24.99}
            rating={5}
          />
          <Product
            id="00002"
            title="Echo (3rd Gen) - Smart speaker with Alexa - Twilight Blue"
            image="https://images-na.ssl-images-amazon.com/images/I/61D%2B3FTZ3ML._AC_SL1000_.jpg"
            price={249.99}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="00003"
            title="Samsung Galaxy A21 Android Cell Phone, 32GB Storage, Long-Lasting Battery, 6.5” Infinity Display, Quad Camera, Black"
            image="https://images-na.ssl-images-amazon.com/images/I/81r%2Bm4KDKiL._AC_SL1500_.jpg"
            price={249.99}
            rating={4}
          />
          <Product
            id="00004"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
            image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
            price={346.99}
            rating={4}
          />
          <Product
            id="00005"
            title="Crucial MX500 1TB 3D NAND SATA 2.5 Inch Internal SSD, up to 560MB/s - CT1000MX500SSD1(Z)"
            image="https://images-na.ssl-images-amazon.com/images/I/81TmfqEBQwL._AC_SL1280_.jpg"
            price={114.99}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="00006"
            title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms Response, FreeSync 2 with HDR"
            image="https://images-na.ssl-images-amazon.com/images/I/71cWNfXecfL._AC_SL1500_.jpg"
            price={829.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
