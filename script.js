document.addEventListener("DOMContentLoaded", () => {
  const projectList = document.getElementById("project-list");

  const projects = [
      { name: "Project 1", description: "Description of project 1" },
      { name: "Project 2", description: "Description of project 2" },
      { name: "Project 3", description: "Description of project 3" },
  ];

  projects.forEach(project => {
      const projectDiv = document.createElement("div");
      projectDiv.innerHTML = `
          <h3>${project.name}</h3>
          <p>${project.description}</p>
      `;
      projectList.appendChild(projectDiv);
  });

  document.getElementById("contact-form").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for contacting me!");
  });
});
