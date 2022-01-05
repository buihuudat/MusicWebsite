import React from "react";

import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <iframe src="https://www.youtube.com/embed/SGyvoKcnykY?autoplay=1&controls=0&loop=1&playlist=SGyvoKcnykY" title="bg__contact" frameborder="0" allow="accelerometer;loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


      <div className="contact__wrap">
        <div className="contact__information">
          <div className="contact__information__title">
            Follow us via!
          </div>
          <div className="contact__socials">
            <a href="https://www.facebook.com/1150694301/" title="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="https://www.youtube.com/channel/UCEt_3J34Gnx_HaWeMcCX9xw" title="Youtube"><i class="fab fa-youtube"></i></a>
            <a href="https://www.youtube.com/channel/UCEt_3J34Gnx_HaWeMcCX9xw" title="Sound Cloud"><i class="fab fa-soundcloud"></i></a>
            <a href="https://www.youtube.com/channel/UCEt_3J34Gnx_HaWeMcCX9xw" title="Spotify"><i class="fab fa-spotify"></i></a>
            <a href="https://www.youtube.com/channel/UCEt_3J34Gnx_HaWeMcCX9xw" title="Napster"><i class="fab fa-napster"></i></a>
          </div>
        </div>
        <div className="contact__form">
        <form action="" className="form">
          <div className="form__group">
            <label htmlFor="">Email</label>
            <input type="email" className="form__input" />
          </div>
          <div className="form__group">
            <label htmlFor="">Name</label>
            <input type="text" className="form__input" />
          </div>
          <div className="form__group">
            <label htmlFor="">Content</label>
            <textarea className="form__input"></textarea>
          </div>
          <button className="contact__form__button" type="submit">SEND NOW</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
