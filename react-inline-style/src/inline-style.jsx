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

        </div>
    )



}