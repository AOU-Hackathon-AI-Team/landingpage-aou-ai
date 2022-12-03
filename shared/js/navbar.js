
    const href = '../../'|| window.location.origin

const navbar = `


      <nav>
          <div class="logo">
              <picture>
                  <img src="${href}/shared/image/logo-white.png">
              </picture>
          </div>
          <ul>
              <li class="active"><a>الرئـيسية</a></li>
              <li><a>المسارات</a></li>
              <li><a>المزايا</a></li>
              <li><a>الجوائز</a></li>
          </ul>
          <span>
              <a>EN</a>
          </span>
      </nav>
`


document.getElementById('navbar').innerHTML = navbar;