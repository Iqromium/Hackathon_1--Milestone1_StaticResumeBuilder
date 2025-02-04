var _a;
// Add event listener for image upload
(_a = document.getElementById('profilePicture')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function () {
    var _a;
    var profilePictureInput = this;
    // Check if a file is selected
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePictureFile) {
        // Generate a URL for the selected image
        var profilePictureURL = URL.createObjectURL(profilePictureFile);
        // Display the uploaded image
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = "\n                <h2>Uploaded Profile Image</h2>\n                <img src=\"".concat(profilePictureURL, "\" alt=\"Profile Image\" class=\"profilePicture\">\n            ");
        }
    }
});
