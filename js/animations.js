document.addEventListener("DOMContentLoaded", function (event) {

    const tl = gsap.timeline({ repeat: 20, repeatDelay: 1, yoyo: true });

    tl.to(".s-hero h1", { delay: 1, duration: 5, text: "Front-end descomplicado e direto ao ponto!" })
        .to(".s-hero h1", { delay: 1, duration: 6, text: "" })
        .to(".s-hero h1", { duration: 5, text: "Crie interfaces incríveis com código limpo!" })
        .to(".s-hero h1", { delay: 1, duration: 5, text: "" })
        .to(".s-hero h1", { duration: 5, text: "Aprenda a extrair o melhor de seu sistema!" })
        .to(".s-hero h1", { delay: 1, duration: 5, text: "" });



    gsap.from('.s-hero p', {
        y: 100,
        duration: 1.5,
    })

    gsap.fromTo(".s-hero button",
        {
            scale: 0.5,
            opacity: 0
        },
        {
            delay: 1.5,
            duration: 1,
            scale: 1,
            opacity: 1,
            ease: "power2.out"
        }
    );

    gsap.fromTo(".arrow",
        {
            scale: 0.5,
            opacity: 0
        },
        {
            delay: 2,
            duration: 1.5,
            scale: 1,
            opacity: 1,
            ease: "power2.out"
        }
    );

    gsap.from(".item-digital", {
        scrollTrigger: {
            trigger: ".line-1",
            start: "top bottom",
            end: "top 20%",
            scrub: true,

        },
        y: 300,
        opacity: 0,
        scale: 0.9,
        ease: "power2.out"
    });

    let split = new SplitText(".title-visible", { type: "words" });

    gsap.from(split.words, {
        scrollTrigger: {
            trigger: ".title-visible",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
        },
        duration: 1.5,
        opacity: 0,
        y: 30,
        stagger: 0.1,
        ease: "back.out(1.7)"
    });

    gsap.from('.line-1', {
        scrollTrigger: {
            trigger: '.line-1',
            start: "top bottom",
            end: "top 50%",
            scrub: true,

        },
        scale: 0
    })

    gsap.to('.painel', {
        xPercent: -50, // move 2 seções para esquerda (2 total, então 100 * (2-1))
        ease: "none",
        scrollTrigger: {
            trigger: ".painel",
            pin: true,
            onUpdate: (self) => {
                const progress = self.progress;

                if(progress>0.3){
                    document.querySelector('.painel-1').style.backgroundColor = "#fff";
                    document.querySelector('.painel-2').style.backgroundColor = "#000";
                    document.querySelector('.s-digital').style.color = "#000"
                    document.querySelector('.line-1').style.backgroundColor = "#000"
                    document.querySelectorAll('.item-digital').forEach((el)=>{
                        el.style.backgroundColor="#fff"
                    });

                }else{
                    document.querySelector('.painel-1').style.backgroundColor = "#000";
                    document.querySelector('.painel-2').style.backgroundColor = "#fff";
                    document.querySelector('.s-digital').style.color = "#fff"
                    document.querySelector('.line-1').style.backgroundColor = "#fff"
                    document.querySelectorAll('.item-digital').forEach((el)=>{
                        el.style.backgroundColor="#fff"
                    });


                }
                
            },
            scrub: 1, // relacao do movimento do
            end: () => "+=" + window.innerWidth
        }
    })

});
