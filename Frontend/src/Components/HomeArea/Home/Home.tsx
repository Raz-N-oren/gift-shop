import "./Home.css";
import giftImage from "../../../Assets/Images/gifts.png"

function Home(): JSX.Element {
    return (
        <div className="Home">
            <p>
                Our online gift shop is a website that specializes in selling various items that are intended to be given as gifts. Our shop is accessible to customers from anywhere with an internet connection.

                Upon visiting Our gift shop, you will likely see a gifts page that features a variety of products and categories to choose from. These categories arranged by target audience.

                Our online gift shop sell a wide variety of items.

                One of the benefits of shopping at an online gift shop is that you can easily browse and compare products from the comfort of your own home.

                When you make a purchase at our online gift shop, you can typically choose to have your item shipped directly to the recipient, saving you time and hassle. Our online gift shop also offer gift wrapping services and the option to include a personalized message or card with your gift.

                Overall, our online gift shop is a great option for anyone looking to find unique and thoughtful gifts for loved ones, especially if you don't have the time or opportunity to shop in person.
            </p>
            <img src={giftImage} alt="gifts" />



        </div>
    );
}

export default Home;
