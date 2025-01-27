import logo from "./assets/logo.png";
import bannerImage2 from "./assets/bannerImage2.png";
import firstProduct from "./assets/firstProduct.png";
import secondProduct from "./assets/secondProduct.png";
import thierdProduct from "./assets/thierdProduct.png";
import forthdProduct from "./assets/forthProduct.png";
import bannerImg3 from "./assets/bannerImg3.png/";
import fifthProduct from "./assets/fifthProduct.png";
import category1 from "./assets/category1.jpg";
import category2 from "./assets/category2.jpg";
import category3 from "./assets/category3.jpg";
import post1 from "./assets/post1.jpg";
import post2 from "./assets/post2.jpg";
import post3 from "./assets/post3.jpg";
import post4 from "./assets/post4.jpg";
import insta1 from "./assets/insta1.jpg";
import insta2 from "./assets/insta2.jpg";
import insta3 from "./assets/insta3.jpg";
import insta4 from "./assets/insta4.jpg";
import insta5 from "./assets/insta5.jpg";
import insta6 from "./assets/insta6.jpg";







function Inline(){
    const navFlex = { display: 'flex', justifyContent: 'space-evenly' }

    const navbarLists = {
        listStyle: 'none',
        display: 'flex'
    };

    const navLi = {
        margin: '13px'
    };
    const icons = { margin: '13px', fontSize: '28px' };
    const links = { textDecoration: 'none' };
    const fontSize = { fontSize: '28px', lineHeight: '25px' };

    const headerBtn = { padding: '14px', backgroundColor: 'red', color: 'white' };

    const headerFlex = { display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' };

    const fontIcons = { fontSize: '35px', color: 'red', position: "relative", top: '7px' };

    const spans = { fontSize: '30px', marginLeft: '17px' };

    const p = { fontSize: '22px', maxWidth: '250px', marginLeft: '50px', marginTop: '-1px' };

    const cardsFlex = { display: 'flex', justifyContent: 'space-evenly', marginTop: '85px' };

    const viewLink = {
        backgroundColor: "red", color: 'white', padding: '14px', borderRadius: '20px', fontSize: '15px'
        , textDecoration: 'none', position: "relative", top: '41px'
    };

    const thierdSflex = { display: 'flex', justifyContent: 'space-around' };

    const firstImg = { width: '150px' };

    const cardsLink = { textDecoration: 'none', fontSize: '20px' };

    const p2 = { fontSize: '18px' };
    const pRed = { color: 'red', fontSize: '23px' };

    const cardsFlex2 = { display: 'flex', justifyContent: 'space-evenly', marginTop: '100px' };

    const pSection4 = { maxWidth: '320px', fontSize: '50px' };
    const p2Section4 = { maxWidth: '400px', fontSize: '40px' };

    const s4Flex = { display: 'flex', justifyContent: 'space-evenly', marginTop: '100px' };

    const s4Link = {
        backgroundColor: 'red', color: 'white', padding: '13px', fontSize: '20px', textDecoration: 'none'
        , borderRadius: '20px'
    };

    const s5_flex1 = { display: 'flex', justifyContent: 'space-evenly', width: '400px' };

    const sevtion5_width = { maxWidth: '400px', border: 'solid whiteSmoke' };

    const sevtion5_width2 = { maxWidth: '400px', border: 'solid whiteSmoke' };

    const s5_flex = { display: 'flex', justifyContent: 'space-evenly', marginTop: '100px' };

    const textCenter = { textAlign: 'center', marginTop: '100px' };

    const categoriesImg = { height: '200px' };

    const categoriesFlex = { display: 'flex', justifyContent: 'space-evenly', marginTop: '100px' };

    const pS6 = {
        fontSize: '25px', maxWidth: '600px', lineHeight: '35px', marginLeft: '470px', backgroundColor: 'white'
        , padding: '20px'
    }

    const postsImg = { width: '250px' };

    const s8P = { maxWidth: '400px', fontSize: '18px' };

    const s8Flex = { display: 'flex', justifyContent: 'space-evenly', marginTop: '100px' };

    const instaImgs = { width: '230px' };

    const s9Flex = { display: 'flex', justifyContent: 'space-evenly', marginTop: '80px' };

    const p1Footer ={maxWidth:'400px' , fontSize:'18px', lineHeight:'27px'};

    const footerIconsDiv = {fontSize:'20px'};

    const footerIcons = {margin:'7px' , color:'gray'};

    const footerQuick ={listStyle: 'none'};

    const quickLinks ={textDecoration: 'none' , color:'black' , marginTop:'10px' , position:'relative' , right:'30px'};

    const footerFlex ={ display:'flex', justifyContent: 'space-evenly', marginTop:'130px'}





    return (
        <div className="container">

              {/*Start Header  */}

            {/* Start Navbar */}
            <div style={navFlex}>
                <div>
                    <a href=""> <img src={logo} alt="" /></a>
                </div>

                <div>
                    <ul style={navbarLists}>
                        <li style={navLi}><a style={links} href="">HOME</a></li>
                        <li style={navLi}><a style={links} href="">About</a></li>
                        <li style={navLi}><a style={links} href="">SHOP</a></li>
                        <li style={navLi}><a style={links} href="">BLOGS</a></li>
                        <li style={navLi}><a style={links} href="">PAGES</a></li>
                        <li style={navLi}><a style={links} href="">Contact</a></li>
                    </ul>
                </div>
                {/* Icons */}
                <div>
                    <i style={icons} class="fa-solid fa-magnifying-glass"></i>
                    <i style={icons} class="fa-regular fa-user"></i>
                    <i style={icons} class="fa-regular fa-heart"></i>
                    <i style={icons} class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>






            {/* End Navbar */}


            <header className="header-bg" style={headerFlex}>
                <div style={fontSize}>
                    <h1>The fine Print</h1>
                    <h1>Book</h1>
                    <h5>Best Offer Save 30% Grab it Now</h5>
                    <button style={headerBtn}>Shop Collection</button>

                </div>


                <div>
                    <img src={bannerImage2} alt="" />
                </div>
            </header>

            {/* End Header */}






            <div style={cardsFlex}>

<div>
    <i style={fontIcons} class="fa-solid fa-cart-shopping"></i>
    <span style={spans}>Free delivery</span>
    <p style={p}>Consectetur adipi elit lorem ipsum dolor sit amet</p>

</div>


<div>
    <i style={fontIcons} class="fa-solid fa-star"></i>
    <span style={spans}>Quality guarantee</span>
    <p style={p}>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>

</div>


<div>
    <i style={fontIcons} class="fa-regular fa-envelope"></i>
    <span style={spans}>Daily offers</span>
    <p style={p}>Amet consectetur adipi elit loreme ipsum dolor sit.</p>

</div>





<div>
    <i style={fontIcons} class="fa-solid fa-plus"></i>
    <span style={spans}>Daily offers</span>
    <p style={p}>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>

</div>
</div>





<div>
<div style={thierdSflex}>
    <div>
        <h1>Best selling items</h1>
    </div>

    <div>
        <a href="" style={viewLink}>View All</a>
    </div>

</div>



<div style={cardsFlex2}>
    <div>
        <img style={firstImg} src={firstProduct} alt="" />
        <div>
            <a style={cardsLink} href="">House of Sky Breath</a>
            <p style={p2}>Lauren Asher <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>


            </p>
            <p style={pRed}>870$</p>
        </div>
    </div>




    <div>
        <img style={firstImg} src={secondProduct} alt="" />
        <div>
            <a style={cardsLink} href="">Heart Land</a>
            <p style={p2}>Lauren Asher <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>


            </p>
            <p style={pRed}>870$</p>
        </div>
    </div>


    <div>
        <img style={firstImg} src={thierdProduct} alt="" />
        <div>
            <a style={cardsLink} href="">His Saving Grace </a>
            <p style={p2}>Lauren Asher <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>


            </p>
            <p style={pRed}>870$</p>
        </div>
    </div>



    <div>
        <img style={firstImg} src={forthdProduct} alt="" />
        <div>
            <a style={cardsLink} href="">His Saving Grace </a>
            <p style={p2}>Lauren Asher <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>


            </p>
            <p style={pRed}>870$</p>
        </div>
    </div>



</div>
</div>




{/* Start Section 4 */}




<div className="section4-bg" style={s4Flex}>

<div>
    <img src={bannerImg3} alt="" />
</div>

<div>
    <p style={pSection4}>30% Discount on all items. Hurry Up !!!</p>

    <p style={pSection4}> 27 : 23 : 55 : 00</p>

    <p style={p2Section4}> Days : Hrs : Min : Sec</p>

    <a style={s4Link} href="#">Shop Collection</a>
</div>
</div>


{/* End Section 4 */}




{/* Start Section 5 */}






<div style={s5_flex}>
<div style={sevtion5_width}>


    <div style={s5_flex1}>
        <div>
            <img style={firstImg} src={forthdProduct} alt="" />
        </div>
        <div>
            <a style={cardsLink} href="">His Saving Grace </a>
            <p style={p2}>Lauren Asher <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>


            </p>
            <p style={pRed}>870$</p>
        </div>
    </div>
    <hr />
    <div style={s5_flex1}>
        <img style={firstImg} src={fifthProduct} alt="" />
        <div>
            <a style={cardsLink} href="">His Saving Grace </a>
            <p style={p2}>Lauren Asher <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>


            </p>
            <p style={pRed}>870$</p>
        </div>
    </div>
    <hr />
    <div style={s5_flex1}>
        <img style={firstImg} src={thierdProduct} alt="" />
        <div>
            <a style={cardsLink} href="">His Saving Grace </a>
            <p style={p2}>Lauren Asher <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>


            </p>
            <p style={pRed}>870$</p>
        </div>
    </div>

    <hr />
    <div style={s5_flex1}>
        <img style={firstImg} src={forthdProduct} alt="" />
        <div>
            <a style={cardsLink} href="">His Saving Grace </a>
            <p style={p2}>Lauren Asher <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>


            </p>
            <p style={pRed}>870$</p>
        </div>
    </div>


</div>



<div style={sevtion5_width2}>


    <div style={s5_flex1}>
        <div>
            <img style={firstImg} src={forthdProduct} alt="" />
        </div>
        <div>
            <a style={cardsLink} href="">His Saving Grace </a>
            <p style={p2}>Lauren Asher <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>


            </p>
            <p style={pRed}>870$</p>
        </div>
    </div>
    <hr />
    <div style={s5_flex1}>
        <img style={firstImg} src={fifthProduct} alt="" />
        <div>
            <a style={cardsLink} href="">His Saving Grace </a>
            <p style={p2}>Lauren Asher <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>


            </p>
            <p style={pRed}>870$</p>
        </div>
    </div>
    <hr />
    <div style={s5_flex1}>
        <img style={firstImg} src={thierdProduct} alt="" />
        <div>
            <a style={cardsLink} href="">His Saving Grace </a>
            <p style={p2}>Lauren Asher <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>


            </p>
            <p style={pRed}>870$</p>
        </div>
    </div>

    <hr />
    <div style={s5_flex1}>
        <img style={firstImg} src={forthdProduct} alt="" />
        <div>
            <a style={cardsLink} href="">His Saving Grace </a>
            <p style={p2}>Lauren Asher <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>


            </p>
            <p style={pRed}>870$</p>
        </div>
    </div>


</div>

<div style={sevtion5_width2}>


    <div style={s5_flex1}>
        <div>
            <img style={firstImg} src={forthdProduct} alt="" />
        </div>
        <div>
            <a style={cardsLink} href="">His Saving Grace </a>
            <p style={p2}>Lauren Asher <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>


            </p>
            <p style={pRed}>870$</p>
        </div>
    </div>
    <hr />
    <div style={s5_flex1}>
        <img style={firstImg} src={fifthProduct} alt="" />
        <div>
            <a style={cardsLink} href="">His Saving Grace </a>
            <p style={p2}>Lauren Asher <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>


            </p>
            <p style={pRed}>870$</p>
        </div>
    </div>
    <hr />
    <div style={s5_flex1}>
        <img style={firstImg} src={thierdProduct} alt="" />
        <div>
            <a style={cardsLink} href="">His Saving Grace </a>
            <p style={p2}>Lauren Asher <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>


            </p>
            <p style={pRed}>870$</p>
        </div>
    </div>

    <hr />
    <div style={s5_flex1}>
        <img style={firstImg} src={forthdProduct} alt="" />
        <div>
            <a style={cardsLink} href="">His Saving Grace </a>
            <p style={p2}>Lauren Asher <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>


            </p>
            <p style={pRed}>870$</p>
        </div>
    </div>


</div>


</div>


{/* End Section 5 */}




 {/* Start Section 6 */}


 <div>
                <h1 style={textCenter}>Categories</h1>


                <div>
                    <div style={categoriesFlex}>
                        <img style={categoriesImg} src={category1} alt="" />
                        <img style={categoriesImg} src={category2} alt="" />
                        <img style={categoriesImg} src={category3} alt="" />
                    </div>
                </div>
            </div>

            {/* End Section 6  */}


            {/* Start Section 7 */}

            <div className="section7-bg">

                <div>
                    <h1 style={textCenter}>Customers reviews</h1>
                    <div style={pS6}>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non dolorem natus debitis necessitatibus velit ad tempore veniam! Vitae vel quaerat a possimus et optio!</p>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p>Emma Chabberlin</p>

                    </div>
                </div>

            </div>


            {/* End Section 7 */}


        </div>
    )



}