var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
function generateResume(data) {
    return "\n    <h2>Generate Resume</h2>\n    <p><strong>Name:</strong>".concat(data.name, "</p>\n    <p><strong>Email:</strong>").concat(data.email, "</p>\n    <p><strong>Phone:</strong>").concat(data.phone, "</p>\n    <p><strong>Education:</strong>").concat(data.education, "</p>\n    <p><strong>Skills:</strong>").concat(data.skills, "</p>\n    <p><strong>Experience:</strong>").concat(data.skills, "</p>\n    <p><strong>Description:</strong>").concat(data.description, "</p>\n\n\n    ");
}
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        var experience = document.getElementById('experience').value;
        var description = document.getElementById('description').value;
        resumeOutput.innerHTML = generateResume({ name: name, email: email, phone: phone, education: education, skills: skills, experience: experience, description: description });
        var editButton = document.getElementById('editResume');
        if (editButton) {
            editButton.addEventListener('click', function () {
                document.getElementById('name').value = name;
                document.getElementById('email').value = email;
                document.getElementById('phone').value = phone;
                document.getElementById('education').value = education;
                document.getElementById('skills').value = skills;
                document.getElementById('experience').value = experience;
                document.getElementById('description').value = description;
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
}
else {
    console.log('Form or Output div not found in the DOM');
}
