import style from "./myntra.module.css"
import logo from "./myntra logo.png"
import pic1 from "./homeimage1.webp"
import pic2 from "./homeimage7.webp"
import pic3 from "./homeimage3.webp"
import pic4 from "./homeimage4.webp"
import pic5 from "./homeimage5.webp"
import pic6 from "./homeimage6.webp"
import pic7 from "./homeimage7.webp"
import pic8 from "./homeimage8.webp"
import pic9 from "./homeimage9.webp"
import pic10 from "./homeimage10.webp"
import pic11 from "./homeimage11.webp"
import pic12 from "./homeimage12.webp"
import pic13 from "./homeimage13.webp"
import pic14 from "./homeimage14.webp"
import pic15 from "./homeimage15.webp"
import pic16 from "./homeimage16.webp"
import pic17 from "./homeimage17.webp"
import pic18 from "./homeimage18.webp"
import pic19 from "./homeimage19.webp"
import pic20 from "./homeimage20.webp"
import pic21 from "./homeimage21.webp"
import pic22 from "./homeimage22.webp"
import pic23 from "./homeimage23.webp"
import pic24 from "./homeimage24.webp"
import pic25 from "./homeimage25.webp"
import pic26 from "./homeimage26.webp"
import pic27 from "./homeimage27.webp"
import pic28 from "./homeimage28.webp"
import pic29 from "./homeimage29.webp"
import pic30 from "./homeimage30.webp"
import pic31 from "./homeimage31.webp"
import pic32 from "./homeimage32.webp"
import pic33 from "./homeimage33.webp"
import pic34 from "./homeimage34.webp"
import pic35 from "./homeimage35.webp"
import pic36 from "./homeimage36.webp"
import pic37 from "./homeimage37.webp"
import pic38 from "./homeimage38.webp"
import pic39 from "./homeimage39.webp"
import pic40 from "./homeimage40.webp"
import pic41 from "./homeimage41.webp"
import pic42 from "./homeimage42.webp"
import pic43 from "./homeimage43.webp"
import pic44 from "./homeimage44.webp"
import pic45 from "./homeimage45.webp"
import pic46 from "./homeimage46.webp"
import pic47 from "./homeimage47.webp"
import pic48 from "./homeimage48.webp"
import pic49 from "./homeimage49.webp"
import pic50 from "./homeimage50.webp"
import pic51 from "./homeimage51.webp"
import pic52 from "./homeimage52.webp"
import pic53 from "./homeimage53.webp"
import pic54 from "./homeimage54.webp"
import pic55 from "./homeimage55.webp"
import pic56 from "./footer1.png"
import pic57 from "./footer2.png"
import pic58 from "./footer3.png"
import pic59 from "./footer4.png"
import pic60 from "./footer5.png"
import pic61 from "./footer6.png"
import pic62 from "./footer7.png"
import pic63 from "./footer8.png"


const Myntra = ()=>{
    return(
        <div>
            {/* Nav Bar */}
            <section id={style.nav}>
                <article>
                    <div className={style.Logo}>
                        <img src={logo}/>
                    </div>
                    <div className={style.Menu}>
                        <ol>
                            <li><a href="">MEN</a></li>
                            <li><a href="">WOMEN</a></li>
                            <li><a href="">KIDS</a></li>
                            <li><a href="">HOME & LIVING</a></li>
                            <li><a href="">BEAUTY</a></li>
                            <li><a href="">STUDIO <sup>NEW</sup></a></li>
                        </ol>
                    </div>
                    <div className={style.Search}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search for products brands and more"/>
                    </div>
                    <div className={style.Icons}>
                        <article>
                            <a href="https://www.myntra.com/login?referer=https://www.myntra.com/">
                        <i class="fa-regular fa-user"><p className={style.profile}>Profile</p></i>
                            </a>
                        <a href="https://www.myntra.com/wishlist">
                        <i class="fa-regular fa-heart"><p className={style.wishlist}>Wishlist</p></i>
                        </a>
                        <a href="https://www.myntra.com/checkout/cart">
                        <i class="fa-solid fa-bag-shopping"><p className={style.bag}>Bag</p></i>
                        </a>
                        </article>
                    </div>
                </article>
            </section>

            {/* Home Page */}
            {/* First Content */}
            <section id={style.homePage1}>
                <div>
                    <h1>DEALS OF THE DAY</h1>
                </div>

                <article>
                    <img src={pic1}/>
                    <img src={pic2}/>
                    <img src={pic3}/>
                    <img src={pic4}/>
                    <img src={pic5}/>
                    <img src={pic6}/>
                    <img src={pic7}/>
                    <img src={pic8}/>
                </article>
            </section>

            {/* Home Page */}
            {/* Second Content */}
            <section id={style.homePage2}>
                <div>
                    <h1>BEST OF MYNTRA EXCLUSIVE BRANDS</h1>
                </div>

                <article>
                    <img src={pic9}/>
                    <img src={pic10}/>
                    <img src={pic11}/>
                    <img src={pic12}/>
                    <img src={pic13}/>
                    <img src={pic14}/>
                    <img src={pic15}/>
                    <img src={pic16}/>
                </article>

                <article>
                    <img src={pic17}/>
                    <img src={pic18}/>
                    <img src={pic19}/>
                    <img src={pic20}/>
                    <img src={pic21}/>
                    <img src={pic22}/>
                    <img src={pic23}/>
                    <img src={pic24}/>
                </article>
            </section>

            {/* Home Page */}
            {/* Third Content */}
            <section id={style.homePage3}>
                <div>
                    <h1>TOP PICKS</h1>
                </div>

                <article>
                    <img src={pic25}/>
                    <img src={pic26}/>
                    <img src={pic27}/>
                    <img src={pic28}/>
                    <img src={pic29}/>
                    <img src={pic30}/>
                    <img src={pic31}/>
                </article>
            </section>

            {/* Home Page */}
            {/* Fourth Content */}
            <section id={style.homePage4}>
                <div>
                    <h1>CATEGORIES TO BAG</h1>
                </div>

                <article>
                    <img src={pic32}/>
                    <img src={pic33}/>
                    <img src={pic34}/>
                    <img src={pic35}/>
                    <img src={pic36}/>
                    <img src={pic37}/>
                    <img src={pic38}/>
                    <img src={pic39}/>
                </article>

                <article>
                    <img src={pic40}/>
                    <img src={pic41}/>
                    <img src={pic42}/>
                    <img src={pic43}/>
                    <img src={pic44}/>
                    <img src={pic45}/>
                    <img src={pic46}/>
                    <img src={pic47}/>
                </article>

                <article>
                    <img src={pic48}/>
                    <img src={pic49}/>
                    <img src={pic50}/>
                    <img src={pic51}/>
                    <img src={pic52}/>
                    <img src={pic53}/>
                    <img src={pic54}/>
                    <img src={pic55}/>
                </article>
            </section>


<footer id={style.mainfooter}>

    {/* Footer */}
    {/* First Part */}
   <div id={style.footerp1}>
    <section id={style.p1}>
        <article>
            <div>
                <h1>ONLINE SHOPPING</h1>
                <div>
                <ol>
                    <li><a href="">Men</a></li>
                    <li><a href="">Women</a></li>
                    <li><a href="">Kids</a></li>
                    <li><a href="">Home & Living</a></li>
                    <li><a href="">Beauty</a></li>
                    <li><a href="">Gift Cards</a></li>
                    <li><a href="">Myntra Insider</a></li>
                </ol>
                </div>
            </div>
            <div id={style.links}>
                <h1>Useful Links</h1>
                <div>
                <ol>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Site Map</a></li>
                    <li><a href="">Corporate Information</a></li>
                    <li><a href="">Whitehat</a></li>
                </ol>
                </div>
            </div>
        </article>

        <article>
            <div>
                <h1>CUSTOMER POLICIES</h1>
                <div>
                <ol>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">T&C</a></li>
                    <li><a href="">Terms of Use</a></li>
                    <li><a href="">Track Orders</a></li>
                    <li><a href="">Shipping</a></li>
                    <li><a href="">Cancellation</a></li>
                    <li><a href="">Return</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Grievence Officer</a></li>
                </ol>
                </div>
            </div>
        </article>

        <article>
            <div>
                <h1>EXPERIENCE MYNTRA APP ON MOBILE</h1>
                <div>
                    <a href=""><img src={pic56} id={style.app1}/></a>
                    <a href=""><img src={pic57} id={style.app2}/></a>
                    <div id={style.social}>
                        <h1>Keep in Touch</h1>
                        <a href=""><img src={pic58}/></a>
                        <a href=""><img src={pic59}/></a>
                        <a href=""><img src={pic60}/></a>
                        <a href=""><img src={pic61}/></a>

                    </div>
                </div>
            </div>
        </article>

        <article>
            <div id={style.guarantee}>
                <img src={pic62}/>
                <div>
                <p><b>100% ORIGINAL guarantee</b> for</p>
                <p>all products at myntra.com</p>
                </div>
            </div>

            <div id={style.replace}>
                <img src={pic63}/>
                <div>
                    <p><b>Return within 30days</b> of</p>
                    <p>receiving your order</p>
                </div>
            </div>
        </article>
    </section>
    </div>


    {/* Footer */}
    {/* Second Part */}
    <section id={style.footerp2}>
        <div id={style.p2}>
            <h1>Popular Searches --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h1>
            <p><a href="">Makeup</a> | <a href="">Dresses for Girls</a> | <a href="">T-Shirt</a> | <a href="">Sandals</a> | <a href="">Headphones</a> | <a href="">Babydolls</a> | <a href="">Blazzers for Men</a> | <a href="">Handbags</a> | <a href="">Ladies Watches</a> | <a href="">Bags</a> | <a href="">Sports Shoes</a> | <a href="">Reebok Shoes</a> | <a href="">Puma Shoes</a> | <a href="">Boxers</a> | <a href="">Wallet</a> | <a href="">Tops</a> | <a href="">Earrings</a> | <a href="">Fastrack Watches</a> | <a href="">Kurtis</a> | <a href="">Nike</a> | <a href="">Smart Watches</a> | <a href="">Titan Watches</a> | <a href="">Designer Blouse</a> | <a href="">Gowns</a> | <a href="">Rings</a> | <a href="">Cricket Shoes</a> | <a href="">Forever 21</a> | <a href="">Eye Makeup</a> | <a href="">Photo Frames</a> | <a href="">Punjabi Suits</a> | <a href="">Bikini</a> | <a href="">Myntra Fashion Show</a> | <a href="">Lipstick</a> | <a href="">Saree</a> | <a href="">Watches</a> | <a href="">Dresses</a> | <a href="">Lehenga</a> | <a href="">Nike Shoes</a> | <a href="">Goggles</a> | <a href="">Bras</a> | <a href="">Suit</a> | <a href="">Chinos</a> | <a href="">Shoes</a> | <a href="">Adidas Shoes</a> | <a href="">Woodland Shoes</a> | <a href="">Jewellery</a> | <a href="">Designers Saree</a></p>
        </div>
    </section>


    {/* Footer */}
    {/* Third Part */}
    <section id={style.footerp3}>
        <div id={style.p3}>
            <div>
            <h1>
            In case of any concern, <b>Contact Us</b> 
            </h1>
            </div>

            <div>
            <h1 id={style.rights}>
            © 2023 www.myntra.com. All rights reserved.
            </h1>
            </div>
        </div>
    </section>

</footer>
        </div>
    )
}

export default Myntra