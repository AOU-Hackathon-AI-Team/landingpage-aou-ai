// document.getElementById("cards").onmousemove = e => {
//     for(const card of document.getElementsByClassName("card")) {
//       const rect = card.getBoundingClientRect(),
//             x = e.clientX - rect.left,
//             y = e.clientY - rect.top;
  
//       card.style.setProperty("--mouse-x", `${x}px`);
//       card.style.setProperty("--mouse-y", `${y}px`);
//     };
//   }

  // document.getElementById("price").onmousemove = e => {
  //   for(const card of document.getElementsByClassName("card-p")) {
  //     const rect = card.getBoundingClientRect(),
  //           x = e.clientX - rect.left,
  //           y = e.clientY - rect.top;
  
  //     card.style.setProperty("--mouse-x", `${x}px`);
  //     card.style.setProperty("--mouse-y", `${y}px`);
  //   };
  // }
const temp = document.createElement('section');
temp.classList.add('wrapper')
temp.innerHTML = `

<section class="wrapper" id="prizes_container"> 
<div class="layer">
<div class="card">
    <div class="content">

    <header class="price">10,000</header>
    <p>سيؤدي الهيدروجين دوراً رئيسياً في الانتقال نحو الطاقة المتجددة، وإزالة الكربون من الاستخدامات
        النه
    </p>
    </div>
</div>
</div>

<div class="layer" id="layer2">
<div class="card">
    <div class="content">

        <header> ورش تدريبية و جلسات حوارية</header>
        <p>سيؤدي الهيدروجين دوراً رئيسياً في الانتقال نحو الطاقة المتجددة، وإزالة الكربون من الاستخدامات
            النهائية. وستكون التقنيات النظيفة </p>
        </div>
</div>
<div class="card">
    <div class="content">

    <header> ورش تدريبية و جلسات حوارية</header>
    <p>سيؤدي الهيدروجين دوراً رئيسياً في الانتقال نحو الطاقة المتجددة، وإزالة الكربون من الاستخدامات
        النهائية. وستكون التقنيات النظيفة </p>
        </div>
</div>
<div class="card">
    <div class="content">

    <header> ورش تدريبية و جلسات حوارية</header>
    <p>سيؤدي الهيدروجين دوراً رئيسياً في الانتقال نحو الطاقة المتجددة، وإزالة الكربون من الاستخدامات
        النهائية. وستكون التقنيات النظيفة </p>
        </div>
</div>
<div class="card">
    <div class="content">

    <header> ورش تدريبية و جلسات حوارية</header>
    <p>سيؤدي الهيدروجين دوراً رئيسياً في الانتقال نحو الطاقة المتجددة، وإزالة الكربون من الاستخدامات
        النهائية. وستكون التقنيات النظيفة </p>
        </div>
</div>
</div>
</section>

`
const prizesTemp =  document.getElementById('prizesTemp')

setTimeout(() => {



  document.getElementById('prizes_container').onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
      
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }
  
},1000)

  document.getElementById('prizes').innerHTML = temp.innerHTML;
