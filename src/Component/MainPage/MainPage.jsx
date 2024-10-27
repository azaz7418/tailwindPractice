import CountryProduct from "../CountryProduct/CountryProduct";
import Product from "../Product/Product";
import "./MainPage.css";
const MainPage = () => {
    return (
        <div className="body pt-40">
            <Product></Product>
            <CountryProduct></CountryProduct>
        </div>
    );
};

export default MainPage;