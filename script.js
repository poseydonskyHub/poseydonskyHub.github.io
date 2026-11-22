const featuredRepos = [
  {
    name: "Legalyze AI Assistant",
    url: "https://github.com/poseydonskyHub/Legalyze-AI-assistant",
    category: "AI DESKTOP APPLICATION",
    description: "A desktop AI assistant for analyzing legal documents and providing informational guidance. Supports PDF and text analysis, potential risk identification, explanations of legal wording, and document-focused AI chat.",
    tags: ["Python", "FastAPI", "C++", "Qt", "AI"]
  },
  {
    name: "2D Engine",
    url: "https://github.com/poseydonskyHub/2D-engine",
    category: "GRAPHICS & GAME DEVELOPMENT",
    description: "A cross-platform 2D graphics engine written in C++. Features include sprite rendering, a 2D camera, texture loading for PNG and BMP images, and sprite batching. Supports Windows and Linux.",
    tags: ["C++", "CMake", "2D Graphics", "Windows", "Linux"]
  }
];

const grid = document.getElementById("repo-grid");
const status = document.getElementById("repo-status");

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[ch]));
}

function featuredCard(project, index) {
  const tags = project.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("");
  return `<a class="project-card featured-project" href="${escapeHTML(project.url)}" target="_blank" rel="noreferrer">
    <div class="project-top"><span>${escapeHTML(project.category)}</span><span>0${index + 1} ↗</span></div>
    <h3>${escapeHTML(project.name)}</h3>
    <p>${escapeHTML(project.description)}</p>
    <div class="project-tags">${tags}</div>
  </a>`;
}

grid.innerHTML = featuredRepos.map(featuredCard).join("");
status.innerHTML = `Selected projects from my GitHub portfolio. <a href="https://github.com/poseydonskyHub?tab=repositories" target="_blank" rel="noreferrer">View all repositories ↗</a>`;
