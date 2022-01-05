import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top__newAlbum">
          <div className="footer__top__title">NEW ALBUM</div>
          <div className="footer__top__content">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f3569f4c-12de-4042-8a27-b3e75991bd6c/dexg2ap-d0fbb5c0-2aee-4efa-ac00-8a627cb8d7ec.png/v1/fill/w_1280,h_1388,q_80,strp/_oc__twinkle_by_rosie_chi_dexg2ap-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM4OCIsInBhdGgiOiJcL2ZcL2YzNTY5ZjRjLTEyZGUtNDA0Mi04YTI3LWIzZTc1OTkxYmQ2Y1wvZGV4ZzJhcC1kMGZiYjVjMC0yYWVlLTRlZmEtYWMwMC04YTYyN2NiOGQ3ZWMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Pdp2BRL6Mv1FWoMoya7buO4kqOlMYLDPVd4pW0YyXmY" alt="" />
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f3569f4c-12de-4042-8a27-b3e75991bd6c/ddo2gc0-2c5a8b7d-4448-4426-bc10-0ba6331a5a5f.png/v1/fill/w_1280,h_1280,q_80,strp/_f_irene_by_rosie_chi_ddo2gc0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2YzNTY5ZjRjLTEyZGUtNDA0Mi04YTI3LWIzZTc1OTkxYmQ2Y1wvZGRvMmdjMC0yYzVhOGI3ZC00NDQ4LTQ0MjYtYmMxMC0wYmE2MzMxYTVhNWYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.eoTRypBkrNNqAuHWck0bJJmWiO22obtKlcS2dM1O1TQ" alt="" />
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8a14b3d9-bcaa-4348-8745-fa951ee72667/dd4bgjv-1c6e102d-cf0b-4019-97a5-408633ec69d4.png/v1/fill/w_1280,h_1196,q_80,strp/blue_haired_tae_by_verogig_dd4bgjv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE5NiIsInBhdGgiOiJcL2ZcLzhhMTRiM2Q5LWJjYWEtNDM0OC04NzQ1LWZhOTUxZWU3MjY2N1wvZGQ0Ymdqdi0xYzZlMTAyZC1jZjBiLTQwMTktOTdhNS00MDg2MzNlYzY5ZDQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FyoOq_aQzeKNOSY5ARYQ8PqU_xkeMEN0RWe-XvpdnDo" alt="" />
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/26c466d9-613d-41b3-9b8f-a39cc364d96a/dbs8ajj-b6d53448-7533-4cd0-9885-e301de9c468e.jpg/v1/fill/w_1024,h_1366,q_75,strp/bts__jhope_by_semsem_chan_dbs8ajj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2NiIsInBhdGgiOiJcL2ZcLzI2YzQ2NmQ5LTYxM2QtNDFiMy05YjhmLWEzOWNjMzY0ZDk2YVwvZGJzOGFqai1iNmQ1MzQ0OC03NTMzLTRjZDAtOTg4NS1lMzAxZGU5YzQ2OGUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.u6YMOTS-MR0dvNzAw2xaDyl7IWSzGFLwjZR_l3-8r0w" alt="" />
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d94ed4b8-e451-4ec2-86f1-97dca4f9c567/dbi6a9h-d4406f36-6f7a-4ab0-ba67-479e3d5e30c6.png/v1/fill/w_600,h_934,q_80,strp/myg___glowing_blue__2__by_llyaas_dbi6a9h-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTM0IiwicGF0aCI6IlwvZlwvZDk0ZWQ0YjgtZTQ1MS00ZWMyLTg2ZjEtOTdkY2E0ZjljNTY3XC9kYmk2YTloLWQ0NDA2ZjM2LTZmN2EtNGFiMC1iYTY3LTQ3OWUzZDVlMzBjNi5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.biF7czxO99LyX6E1KKlsTWLnI_OwXYBdUSmzEO2Yp-s" alt="" />
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d94ed4b8-e451-4ec2-86f1-97dca4f9c567/dbc9ozm-aa95c366-9eb6-49b0-8068-fc54e8dac868.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q5NGVkNGI4LWU0NTEtNGVjMi04NmYxLTk3ZGNhNGY5YzU2N1wvZGJjOW96bS1hYTk1YzM2Ni05ZWI2LTQ5YjAtODA2OC1mYzU0ZThkYWM4NjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.L3i2ZgHQj7eRxDfCVVX-fpz5KeYNeA8dMT13h8RGkDM" alt="" />
          </div>
        </div>
        <div className="footer__top__ourService">
          <div className="footer__top__title">OUR SERVICES</div>
          <ul className="footer__top__content">
            <li>Recoding Album</li>
            <li>Reasions to Avoid</li>
            <li>Resons to Buy</li>
            <li>Today's Best Deals</li>
            <li>Specifications</li>
            <li>Streamming Music</li>
          </ul>
        </div>
        <div className="footer__top__twitter">
          <div className="footer__top__title">TWITTER FEED</div>
          <div className="footer__top__content">
            <div className="footer__top__comp">
              <div className="footer__top-title">
                <i class="fab fa-twitter"></i>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </div>
              <p>2 day ago</p>
            </div>
            <div className="footer__top__comp">
              <div className="footer__top-title">
                <i class="fab fa-twitter"></i>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </div>
              <p>2 day ago</p>
            </div>
          </div>
        </div>
        <div className="footer__top__contact">
          <div className="footer__top__title">CONTACT US</div>
          <div className="footer__top__content">
            <div className="footer__top__comp">
              <div className="footer__top-title">
                <i class="fas fa-map-marker-alt"></i>
                <span>Office Location</span>
              </div>
              <div className="footer__top__content">235 Hai Ba Trung Q3 TP.HCM</div>
            </div>
            <div className="footer__top__comp">
              <div className="footer__top-title">
                <i class="fas fa-map-marker-alt"></i>
                <span>Phone Number</span>
              </div>
              <div className="footer__top__content">+84 9875444444 | +84 9999003333</div>
            </div>
            <div className="footer__top__comp">
              <div className="footer__top-title">
                <i class="fas fa-envelope"></i>
                <span>Email</span>
              </div>
              <div className="footer__top__content">abc@music.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <Link to="/" className="footer__logo">
          Bui Huu Dat
        </Link>
        <div className="contact__socials">
        <a href="https://www.facebook.com/1150694301/" title="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="https://www.youtube.com/channel/UCEt_3J34Gnx_HaWeMcCX9xw" title="Youtube"><i class="fab fa-youtube"></i></a>
            <a href="https://www.youtube.com/channel/UCEt_3J34Gnx_HaWeMcCX9xw" title="Sound Cloud"><i class="fab fa-soundcloud"></i></a>
            <a href="https://www.youtube.com/channel/UCEt_3J34Gnx_HaWeMcCX9xw" title="Spotify"><i class="fab fa-spotify"></i></a>
            <a href="https://www.youtube.com/channel/UCEt_3J34Gnx_HaWeMcCX9xw" title="Napster"><i class="fab fa-napster"></i></a>
        </div>
        <div className="footer__title">
          Let the Music Speak!
        </div>
        <div className="footer__license">
          Copyright &copy; 2022 by Bui Huu Dat. All right reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer;
