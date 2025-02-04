// Add event listener for image upload
document.getElementById('profilePicture')?.addEventListener('change', function () {
    const profilePictureInput = this as HTMLInputElement;

    // Check if a file is selected
    const profilePictureFile = profilePictureInput.files?.[0];
    if (profilePictureFile) {
        // Generate a URL for the selected image
        const profilePictureURL = URL.createObjectURL(profilePictureFile);

        // Display the uploaded image
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = `
                <h2>Uploaded Profile Image</h2>
                <img src="${profilePictureURL}" alt="Profile Image" class="profilePicture">
            `;
        }
    }
});
