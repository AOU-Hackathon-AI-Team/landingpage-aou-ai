const data = [
    {
        img: 'shared/image/cube.svg',
        title: "المدن الذكية",
        descr: '  يُشير مفهوم “المدن الذكية” إلى المدن التي تستخدم أحدث تقنيات الاتصالات والمعلومات؛ لتحسين نوعية الحياة، وكفاءة العمليات والخدمات الحضرية، والقدرة على المنافسة مع تلبية احتياجات الأجيال الحالية والقادمة، وذلك من خلال الاستعانة بالذكاء الاصطناعي.'
    },
    {
        img: 'shared/image/cube.svg',
        title: "التحول الرقمي في التعلي الطاقة المتجددة ",
        descr: 'يعد قطاع الطاقة اليوم من أقوى القطاعات وأكثرها ربحاً في الاقتصاد الحديث، ويتحقق ذلك من خلال الاستعانة بالتقنيات الرقمية، إذ يمكن توظيف الذكاء الاصطناعي لزيادة قدرة صناعة الطاقة على المنافسة في ظل الظروف الاقتصادية غير المستقرة، وتطوير أساليب تشغيلية أفضل، واكتشاف رؤى جديدة مثل: التنبؤ بالطاقة، وكفاءة استهلاك الطاقة، وصناعة الطاقة.'
    },
    {
        img: 'shared/image/cube.svg',
        title: "التحول الرقمي في التعلي الثورة الصناعية الرابعة",
        descr: 'تتميز الثورة الصناعية الرابعة باختراق التقنية الناشئة في عدد من المجالات، بما في ذلك الذكاء الاصطناعي، وذلك لإبراز أهمية تناول العلاقة بين الذكاء الاصطناعي والتنمية الاقتصادية، من خلال دور تطبيقات الذكاء الاصطناعي في تحقيق تنمية اقتصادية حقيقية، تعود بالنفع في مختلف القطاعات الاقتصادية.'
    },
    {
        img: 'shared/image/cube.svg',
        title: "التحول الرقمي في التعليم",
        descr: 'التعليم مسار التحول الرقمي في التعليم يستهدف كل مايتعلق بعملية تطوير طريقة التعليم، وذلك بتوظيف الذكاء الاصطناعي في بيئة النظام التعليمي المعتمد، ودمج تقنية المعلومات والاتصالات فيها؛'
    },
]

let items= ``;
data.forEach(ele => {

    console.log('link ==> ', `${window.location.origin}/${ele.img}` )
    items += `
    <div class="track_card hidden">
    <picture>
        <img src="${window.location.origin}/${ele.img}">
    </picture>
    <div>${ele.title}</div>
    <p>${ele.descr}</p>
</div>
    
    `
})


document.getElementById('hackathon_tracks').innerHTML = `

<h2>مسارات </h2>
    <div class="tracks ">
       ${items}
 </div>
`




const obs = new IntersectionObserver((enries) => {
    enries.forEach(en => {
        if(en.isIntersecting)
        en.target.classList.add('show')
        else
        en.target.classList.remove('show')

    })
})

const trackCards = document.querySelectorAll('.hidden.track_card') 
trackCards.forEach(ele => obs.observe(ele))