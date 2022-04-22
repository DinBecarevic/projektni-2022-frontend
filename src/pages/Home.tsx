import React from 'react';
import Nav from "../components/Nav";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

const Home = () => {
    return (
        <>
            <Nav /> {/*import*/}
            <main>
                <Title />
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                            <Cards /> {/*import*/}

                        </div>
                    </div>
                </div>
            </main>
            <Footer/> {/*import*/}
        </>
    )
}
export default Home;