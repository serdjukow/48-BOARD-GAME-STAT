import Coefficients from './Coefficients'

const Footer = () => {
    return (
        <div className="app__footer footer">
            <div className="footer__container">
                <Coefficients />

                <div className="footer__hot hot">
                </div>
                <div className="footer__ice ice">
                </div>

            </div>
        </div>
    );
}

export default Footer;