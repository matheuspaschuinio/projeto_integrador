/** Variáveis */

/** Sidebar */
const sidebar = document.querySelector(".sidebar");

/** Menu hamburguer */
const sidebarToggleBtn = document.querySelectorAll(".sidebar-toggle");

/** Área do dark mode */
const themeToggleBtn = document.querySelector(".theme-toggle");

/** Icone do dark mode */
const themeIcon = themeToggleBtn.querySelector(".theme-icon");

/** Formulário onde fica a barra de pesquisa */
const searchForm = document.querySelector(".search-form");

/** Atualizando icone do tema */
const updateThemeIcon = () => {

    /** Variável que verifica se está no darm mode */
    const isDark = document.body.classList.contains("dark-theme");

    themeIcon.textContent = sidebar.classList.contains("collapsed") ? (isDark ? "light_mode" : "dark_mode") : "dark_mode";
    
}

/** Aplica dark mode se estiver salvo ou se for preferencias so sistema */
const savedTheme = localStorage.getItem("theme");

const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const shouldUseDarktheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

document.body.classList.toggle("dark-theme", shouldUseDarktheme);

updateThemeIcon();

// Alterna estado de recolhimento da barra lateral ao clicar no botão
sidebarToggleBtn.forEach((btn) => {

    btn.addEventListener("click", () => {

      sidebar.classList.toggle("collapsed");

      updateThemeIcon();

    });

});

// Expande a barra lateral quando o formulário de pesquisa for clicado
searchForm.addEventListener("click", () => {

    /** Se a sidebar estiver encolhida */
    if(sidebar.classList.contains("collapsed")) {

        /** Ela aumenta */
        sidebar.classList.remove("collapsed");

        /** Ela ganha foco */
        searchForm.querySelector("input").focus(); // Foca no input

    }

});

/** Ao clicar no botão dark mode */
themeToggleBtn.addEventListener("click", () => {

    const isDark = document.body.classList.toggle("dark-theme");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateThemeIcon();

})

if(window.innerWidth > 768) sidebar.classList.add("collapsed");