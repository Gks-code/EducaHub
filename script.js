// Dados dos cursos - não estão diretamente no HTML
const courses = [
    {
        id: 1,
        title: "Fundamentos de Redes de Computadores",
        author: "Prof. Ricardo Mendes",
        category: "Redes",
        lessons: 24,
        duration: 18,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        badges: []
    },
    {  id: 1,
        title: "Fundamentos de Redes de Computadores",
        author: "Prof. Ricardo Mendes",
        category: "Redes",
        lessons: 24,
        duration: 18,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        badges: []}
];

// Elementos DOM
const coursesGrid = document.getElementById('coursesGrid');
const searchInput = document.getElementById('searchInput');
const categoryBtn = document.getElementById('categoryBtn');
const categoryDropdown = document.getElementById('categoryDropdown');
const clearFiltersBtn = document.getElementById('clearFilters');
const categoryCheckboxes = document.querySelectorAll('.category-option input');

// Função para renderizar os cursos
function renderCourses(coursesToRender) {
    coursesGrid.innerHTML = '';

    if (coursesToRender.length === 0) {
        coursesGrid.innerHTML = `
                    <div class="no-courses">
                        <i class="fas fa-search"></i>
                        <h3>Nenhum curso encontrado</h3>
                        <p>Tente ajustar seus filtros de busca ou categoria</p>
                    </div>
                `;
        return;
    }

    coursesToRender.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';

        // Construir badges
        let badgesHTML = '';
        course.badges.forEach(badge => {
            const badgeClass = badge === "Premium" ? "premium" : "bestseller";
            badgesHTML += `<span class="badge ${badgeClass}">${badge}</span>`;
        });

        courseCard.innerHTML = `
                    <div class="course-image">
                        <img src="${course.image}" alt="${course.title}">
                        <div class="course-badges">
                            ${badgesHTML}
                        </div>
                    </div>
                    <div class="course-content">
                        <h3 class="course-title">${course.title}</h3>
                        <div class="course-author">
                            <i class="fas fa-user"></i>
                            <span>${course.author}</span>
                        </div>
                        <div class="course-details">
                            <div class="course-lessons">
                                <i class="fas fa-play-circle"></i>
                                <span>${course.lessons} aulas</span>
                            </div>
                            <div class="course-duration">
                                <i class="fas fa-clock"></i>
                                <span>${course.duration}h</span>
                            </div>
                        </div>
                           <!-- BOTÃO -->
                            <a href="${course.link}" class="course-btn"> 
                                  Acessar curso
                            </a>
                       
                    </div>
                `;

        coursesGrid.appendChild(courseCard);
    });
}

// Filtragem de cursos
function filterCourses() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategories = Array.from(categoryCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const filteredCourses = courses.filter(course => {
        // Filtro por busca
        const matchesSearch = searchTerm === '' ||
            course.title.toLowerCase().includes(searchTerm) ||
            course.category.toLowerCase().includes(searchTerm);

        // Filtro por categoria
        const matchesCategory = selectedCategories.length === 0 ||
            selectedCategories.includes(course.category);

        return matchesSearch && matchesCategory;
    });

    renderCourses(filteredCourses);
}

// Inicializar - renderizar todos os cursos
renderCourses(courses);

// Event Listeners
searchInput.addEventListener('input', filterCourses);

categoryBtn.addEventListener('click', () => {
    categoryDropdown.classList.toggle('show');
});

// Fechar dropdown ao clicar fora
document.addEventListener('click', (e) => {
    if (!categoryBtn.contains(e.target) && !categoryDropdown.contains(e.target)) {
        categoryDropdown.classList.remove('show');
    }
});

// Atualizar filtros quando categorias forem selecionadas
categoryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterCourses);
});

// Limpar filtros
clearFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    categoryCheckboxes.forEach(checkbox => checkbox.checked = false);
    filterCourses();
});