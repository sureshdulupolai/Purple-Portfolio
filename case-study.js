const projects = [
    {
        id: 1,
        title: "Exclusive Villa Website",
        tags: ["UI/UX Designer", "Website Design", "4 Weeks"],
        desc: "Designed a premium and visually rich website experience focused on luxury and modern design. The project aimed to showcase high-end real estate in an elegant and accessible way.",
        heroImg: "assets/project1.png",
        challenges: "The main challenge was to balance high-quality visual content with fast loading times and a seamless navigation structure. We had to ensure that the luxury feel was maintained across all devices while providing clear information about the properties.",
        challengesImg: "assets/project1.png",
        solution: "We implemented a minimalist design approach with large, high-resolution images and subtle animations. A intuitive navigation menu was designed to allow users to explore different villas effortlessly. The color palette was kept neutral to let the property photos shine.",
        solutionImg: "assets/project1.png",
        process: [
            {
                title: "01. Research",
                img: "assets/project1.png",
                steps: ["Analyzed luxury real estate market trends", "Identified target audience expectations", "Conducted competitor analysis for feature mapping"]
            },
            {
                title: "02. Wireframing",
                img: "assets/project1.png",
                steps: ["Created low-fidelity wireframes for core pages", "Defined user journeys for booking inquiries", "Iterated on layout for optimal image placement"]
            },
            {
                title: "03. UI Design",
                img: "assets/project1.png",
                steps: ["Developed a sophisticated visual style guide", "Designed interactive elements for immersive experience", "Ensured responsive design across mobile and desktop"]
            }
        ],
        userflowImg: "assets/project1.png"
    },
    {
        id: 2,
        title: "ReBox – E-waste Management App",
        tags: ["UI/UX Designer", "Mobile App", "2-3 Weeks"],
        desc: "ReBox is a mobile application designed to help users manage and recycle electronic waste in a simple and efficient way. The app focuses on making the recycling process easy to understand and accessible for everyday users. The goal was to create a platform that simplifies waste disposal and encourages responsible recycling habits.",
        heroImg: "assets/project2.png",
        challenges: "Managing electronic waste is often confusing and inconvenient for users. Many people are unaware of proper recycling methods, and existing solutions are either too complex or lack clear guidance. This results in improper disposal and environmental impact.",
        challengesImg: "assets/profile.png",
        solution: "ReBox provides a streamlined experience where users can easily schedule pickups, track their requests, and manage electronic waste. The design focuses on simplicity, clarity, and guiding users through each step of the process.",
        solutionImg: "assets/project2.png",
        process: [
            {
                title: "01. Research",
                img: "assets/project2.png",
                steps: ["Users find it difficult to schedule pickups", "Lack of real-time tracking creates uncertainty", "Existing solutions are confusing and not user-friendly"]
            },
            {
                title: "02. Wireframing",
                img: "assets/project2.png",
                steps: ["Defined clear user flow for booking process", "Focused on simple and clean layout structure", "Prioritized usability and easy navigation"]
            },
            {
                title: "03. UI Design",
                img: "assets/project2.png",
                steps: ["Clean and minimal interface design", "Consistent color and typography system", "Clear visual hierarchy for better usability"]
            }
        ],
        userflowImg: "assets/project2.png"
    },
    {
        id: 3,
        title: "Watch E-commerce Website",
        tags: ["UI/UX Designer", "E-commerce", "3 Weeks"],
        desc: "Designed a clean and seamless shopping experience with a focus on usability and product clarity. The objective was to create a high-converting platform for high-end watches.",
        heroImg: "assets/project3.png",
        challenges: "E-commerce for luxury watches requires a high level of trust and detailed product presentation. Users need to see intricate details and feel confident in their purchase. The challenge was to create an interface that felt both premium and easy to use.",
        challengesImg: "assets/project3.png",
        solution: "We used a dark theme with gold accents to convey luxury. High-quality zoom features and 360-degree views were integrated. The checkout process was simplified to reduce friction and increase conversion rates.",
        solutionImg: "assets/project3.png",
        process: [
            {
                title: "01. Research",
                img: "assets/project3.png",
                steps: ["Studied luxury consumer shopping patterns", "Identified key product information requirements", "Audited existing e-commerce flows"]
            },
            {
                title: "02. Wireframing",
                img: "assets/project3.png",
                steps: ["Mapped out complex product filtering", "Designed seamless cart and checkout flows", "Prototyped mobile-first shopping experience"]
            },
            {
                title: "03. UI Design",
                img: "assets/project3.png",
                steps: ["Applied high-end aesthetic branding", "Integrated high-fidelity product imagery", "Refined typography for luxury appeal"]
            }
        ],
        userflowImg: "assets/project3.png"
    }
];

function loadProject() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id')) || 1;
    const project = projects.find(p => p.id === projectId);

    if (!project) return;

    // Title & Meta
    document.title = `${project.title} | Case Study`;
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-desc').textContent = project.desc;

    // Images
    document.getElementById('project-hero-img').src = project.heroImg;
    document.getElementById('project-challenges-img').src = project.challengesImg;
    document.getElementById('project-solution-img').src = project.solutionImg;
    document.getElementById('project-userflow-img').src = project.userflowImg;

    // Tags
    const tagsContainer = document.getElementById('project-tags');
    tagsContainer.innerHTML = '';
    project.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'cs-tag';
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    // Content
    document.getElementById('project-challenges').textContent = project.challenges;
    document.getElementById('project-solution').textContent = project.solution;

    // Process
    const processContainer = document.getElementById('project-process');
    processContainer.innerHTML = '';
    project.process.forEach(step => {
        const card = document.createElement('div');
        card.className = 'process-card';
        card.innerHTML = `
            <img src="${step.img}" alt="${step.title}">
            <h3>${step.title}</h3>
            <ul>
                ${step.steps.map(s => `<li>${s}</li>`).join('')}
            </ul>
        `;
        processContainer.appendChild(card);
    });

    // Navigation
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');

    const prevId = projectId > 1 ? projectId - 1 : projects.length;
    const nextId = projectId < projects.length ? projectId + 1 : 1;

    prevBtn.href = `case-study.html?id=${prevId}`;
    nextBtn.href = `case-study.html?id=${nextId}`;
}

window.addEventListener('DOMContentLoaded', loadProject);
