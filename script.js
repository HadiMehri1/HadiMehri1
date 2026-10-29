// برای افزودن مهارت جدید، نام آن را به آرایه زیر اضافه کن.
const skills = [
  "PHP", "React", "Vue.js", "Git", "Vite", "Tailwind CSS",
  "Bootstrap", "C++", "Python", "HTML", "CSS", "JavaScript", "Laravel", "VS Code"
];

// وقتی پروژه‌ای ساختی، یک مورد تازه به آرایه projects اضافه کن.
// مقدار url را با لینک مخزن GitHub یا لینک سایت پروژه عوض کن.
const projects = [
  // نمونه:
  // { title: "نام پروژه", description: "توضیح کوتاه پروژه", tech: ["React", "CSS"], url: "https://github.com/USERNAME/REPOSITORY" }
];

const skillsList = document.querySelector("#skills-list");
skills.forEach((skill) => {
  const item = document.createElement("span");
  item.className = "skill";
  item.textContent = skill;
  skillsList.appendChild(item);
});

const projectsList = document.querySelector("#projects-list");
if (projects.length === 0) {
  projectsList.innerHTML = '<div class="empty">🚀 اولین پروژه‌ات به‌زودی اینجا قرار می‌گیرد!<br>بعد از ساخت پروژه، آن را در فایل <b>script.js</b> اضافه کن.</div>';
} else {
  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    const tech = (project.tech || []).map((item) => item).join(" · ");
    card.innerHTML = `<span class="project-icon">⌘</span><h3></h3><p></p><p class="muted"></p><a class="project-link" target="_blank" rel="noreferrer">مشاهده پروژه ↗</a>`;
    card.querySelector("h3").textContent = project.title;
    card.querySelector("p").textContent = project.description;
    card.querySelector(".muted").textContent = tech;
    card.querySelector("a").href = project.url;
    projectsList.appendChild(card);
  });
}
document.querySelector("#year").textContent = new Date().getFullYear();
