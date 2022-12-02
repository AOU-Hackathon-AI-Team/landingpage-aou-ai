const heroBanner = `
<picture>
            <img src="${window.location.origin}/shared/image/hero.png">
        </picture>
  
  
        <div class="main_text">
            <p>
                عن هاكاثون عن هاكاثون عن هاكاثون
                عن هاكاثون عن هاكاثون
            </p>
            <button class="btn style one">
                شارك الان
            </button>
        </div>

`;
console.log('location ==> ',window.location);
console.log('location ==> ',`${window.location.origin}/shared/image/hero.png`);
document.getElementById('heroBannar').innerHTML = heroBanner;
