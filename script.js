// TEMA

const toggle =
document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    toggle.textContent =
    document.body.classList.contains("dark")
    ? "☀️ Modo Claro"
    : "🌙 Modo Escuro";

});

// QUIZ

const form =
document.getElementById("quiz-form");

const feedback =
document.getElementById("quiz-feedback");

const progress =
document.querySelector(".progress");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const resposta =
    document.querySelector(
        'input[name="quiz-answer"]:checked'
    );

    progress.style.width = "100%";

    feedback.classList.remove(
        "hidden",
        "correct",
        "incorrect"
    );

    if(resposta.value === "correta"){

        feedback.classList.add("correct");

        feedback.innerHTML = `
        🎉 Excelente!
        Você verificou a informação antes de compartilhar.
        `;

    }else{

        feedback.classList.add("incorrect");

        feedback.innerHTML = `
        ❌ Atenção!
        Compartilhar sem verificar fortalece a desinformação.
        `;
    }

});

// ANIMAÇÃO AO ROLAR

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document
.querySelectorAll(".card")
.forEach(card => {

    card.classList.add("hidden-card");

    observer.observe(card);

});

// VOLTAR AO TOPO

const btn =
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        btn.style.display="block";

    }else{

        btn.style.display="none";

    }

});

btn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
