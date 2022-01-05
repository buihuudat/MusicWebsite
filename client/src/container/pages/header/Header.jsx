import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./header.css";

const headerNav = [
  {
    display: 'HOME',
    path: '/'
  },
  {
    display: 'MY MUSIC',
    path: '/my-music'
  },
  {
    display: 'CONTACT',
    path: '/contact'
  },
  {
    display: 'ALBUM',
    path: '/album'
  },
  {
    display: 'PAGES',
    path: '/pages'
  },
  {
    display: 'NEWS',
    path: '/news'
  },
  {
    display: 'CONTACT',
    path: '/contact'
  },
  {
    display: "LOGIN",
    path: '/login'
  }
]

const Header = () => {
  const { pathName } = useLocation();
  const active = headerNav.findIndex(e => e.path === pathName);

  return (
    <div className="header">
      <div className="header__wrap container">
        <div className="header__logo">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e65e21bd-dc77-499e-962a-fa13cab37fc2/d8pjvyg-c1712924-0def-4a5a-8ff2-dc68b7796fff.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2NWUyMWJkLWRjNzctNDk5ZS05NjJhLWZhMTNjYWIzN2ZjMlwvZDhwanZ5Zy1jMTcxMjkyNC0wZGVmLTRhNWEtOGZmMi1kYzY4Yjc3OTZmZmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FMPSqpkHSvk5WixV-0RINNRuf7j57WmIZCkeRPoJdYI" alt="" />
          <Link to="/">Bui Huu Dat</Link>
        </div>
        <ul className="header__nav">
          {
            headerNav.map((e,i) => (
              <li key={i} className={`header__link ${i===active ? 'active' : ""}`}>
                <Link to={e.path}>{e.display}</Link>
              </li>
            ))
          }
          <li className="header__link"><i class="fas fa-search"></i></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
