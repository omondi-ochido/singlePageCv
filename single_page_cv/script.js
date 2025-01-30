// script.js
document.addEventListener('DOMContentLoaded', () => {
    // ... (your existing JavaScript code to populate sections) ...

    // Example of adding an experience entry (you'll need more of these):
    const experienceSection = document.getElementById('experience');
    const experienceEntry = document.createElement('div');
    experienceEntry.innerHTML = `
        <h3>Software Developer, Acme Corporation</h3>
        <p>June 2022 - Present</p>
        <ul>
            <li>Developed and maintained web applications using JavaScript and React.</li>
            <li>Collaborated with a team of 5 developers.</li>
            <li>Improved application performance by 15%.</li>
        </ul>
    `;
    experienceSection.appendChild(experienceEntry);

    // ... (Add similar code for education, projects, etc.) ...

    const skillList = document.getElementById('skill-list');
    const skills = ["JavaScript", "HTML", "CSS", "Python", "React", "Problem-solving", "Communication"]; // Example skills

    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillList.appendChild(li);
    });
});