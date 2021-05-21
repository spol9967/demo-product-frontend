import React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <div className="container pt-5">
                <div className="row justify-content-center">
                <div className="d-flex contact">
                    <div className="email"></div>
                    <div>Email id<br/>xyz@laxmi.com</div>
                </div>
                <div className="d-flex contact">
                    <div className="phone"></div>
                    <div>Phone no.<br/>123456789</div>
                </div>
                </div>
                <div className="row justify-content-center">
                    <div className="insta"></div>
                    <div className="yt"></div>
                    <div className="ld"></div>
                    <div className="fb"></div>
                </div>
                <div className="row justify-content-center">
                    <ul>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Copyright Reserved @xyz</li>
                        <li>Crafted by @Togglehead.in</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
