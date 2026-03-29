Test Plan for Photo Gallery Website

1. TEST PLAN OVERVIEW
Project: Baasic Angular Starter Kit Photo Gallery
Test Manager: Borna Pekanovic
Testers: Borna Pekanovic
Test Type: Functional, Usability, Performance, Security, Compatibility, and Accessibility Testing.
Testing Period: 23/03/2026 - 30/03/2026


2. TESTING CATEGORIES & PRIORITIES

1. Functional Testing (High Priority)

Functional testing ensures that all features of the photo gallery work correctly. This includes:

Image Display: Verifying that all images in the gallery load properly, including both thumbnails and larger versions.
Pagination/Infinite Scroll: Testing whether images are paginated correctly or whether infinite scroll works seamlessly, especially as the user reaches the end of the page.
Image Zoom: Ensuring that users can zoom into images and view them in detail, then return to the gallery view.
Image Filters/Sorting: Checking the sorting and filtering functionalities, such as filtering by tags, date, or size.
Search Functionality: Testing the search feature to verify it returns relevant results when users search for images based on keywords, tags, or image names.
Image Preview: Verifying that when users click on an image, it opens in a larger preview or modal window for better viewing.
Upload Functionality: Verify image upload feature, ensuring that users can upload images without errors, including handling cases of file type restrictions, size limitations, and failed uploads.
Register and Login features: Verify that user can create an account and login into his account

2. Usability Testing (High Priority)

Usability testing ensures that the photo gallery is user-friendly and intuitive for all types of users. This category includes:

Navigation: Verifying that the navigation between different sections of the gallery (such as filters, image previews, and the main gallery) is easy to follow and intuitive.
User Interface Consistency: Checking that UI elements such as buttons, icons, and text are consistent throughout the gallery, creating a uniform user experience.
Image Descriptions and Alt Text: Ensuring that all images have appropriate captions or alt text for accessibility and SEO.
Error Messages: Testing that the website provides clear and helpful error messages when issues arise, such as no images being available or when an image fails to load.

3. Compatibility Testing (High Priority)

Compatibility testing ensures the photo gallery works across a wide range of devices and browsers. Key areas to test include:

Cross-Browser Testing: Verifying that the gallery functions properly across different browsers, such as Chrome, Firefox, Safari, and Edge. This includes checking for layout issues, broken functionality, or any discrepancies in behavior.
Mobile Responsiveness: Ensuring the gallery adjusts correctly to various screen sizes, from desktop to mobile and tablet devices, with a responsive design that maintains usability.
Device Compatibility: Testing the gallery on different devices, particularly iOS and Android smartphones and tablets, to ensure all features perform correctly across platforms.

4. Performance Testing (Medium Priority)

Performance testing ensures the website can handle a large number of images and user traffic while maintaining good performance. Important tests include:

Page Load Speed: Verifying that the gallery loads quickly, especially when dealing with many images or heavy content. Ideally, the page load time should be under 3 seconds.
Image Lazy Loading: Ensuring that images load lazily as the user scrolls down the page, improving load times and performance.
Infinite Scroll Performance: Testing how well the gallery performs when users scroll through large amounts of content, ensuring smooth transitions and no delays in loading new images.

5. Security Testing (High Priority)

Security testing ensures that the gallery is secure from vulnerabilities, particularly around user-uploaded content. Key areas of focus include:

Image Upload Security: Verifying that image upload features are secure by validating file types, limiting file sizes, and scanning for malicious code or harmful files within uploaded images.
User Authentication (if applicable): Testing the security of login/logout processes if the gallery requires user accounts, ensuring that passwords are securely encrypted and that users cannot access private data without authorization.
Data Privacy: Ensuring that any personal data linked to images (e.g., user data or metadata) is stored securely, encrypted if necessary, and complies with privacy regulations.

6. Accessibility Testing (Medium Priority)

Accessibility testing ensures that the gallery is usable by people with disabilities. This includes:

Screen Reader Compatibility: Testing if the gallery is compatible with screen readers, ensuring that visually impaired users can navigate and understand the images and content.
Keyboard Navigation: Verifying that users can navigate through the gallery using only the keyboard (tabbing through interactive elements like buttons, filters, and image previews).
Color Contrast: Ensuring that text and image content have sufficient contrast for users with color blindness or visual impairments, in line with WCAG guidelines.

7. Content Testing (Medium Priority)

Content testing ensures that all visual and textual content on the gallery is accurate and properly displayed. Important areas to test include:

Image Content: Ensuring that all images in the gallery are displayed correctly and are optimized for web use to prevent slow load times.
Meta Data (Alt Text, Captions): Verifying that each image has an appropriate caption or alt text for accessibility and SEO purposes.
Broken Links: Checking for broken links or missing image files that could negatively affect user experience.

8. SEO Testing (Low Priority)

SEO testing ensures that the gallery is optimized for search engines, helping improve discoverability. Key tests include:

SEO-Friendly URLs: Ensuring that image URLs are descriptive and SEO-friendly.
Meta Tags: Verifying that each image and gallery page has the appropriate meta tags (e.g., title, description, and keywords) to optimize for search engines.
Image Alt Tags: Ensuring that images contain descriptive alt tags for better indexing by search engines.

9. Regression Testing (High Priority)

Regression testing ensures that new changes or updates to the gallery do not break existing features. This includes:

Critical Functionalities: Re-testing key features like image display, zoom, search, and upload after updates or bug fixes.
UI Consistency: Checking that the visual design has not been affected by new code changes, ensuring that buttons, filters, and layout elements remain consistent.

10. Backup & Recovery Testing (Low Priority)

Backup and recovery testing ensures that the gallery’s data (such as images and user data) can be safely backed up and restored in case of system failure. This includes:

Backup Verification: Ensuring that the system automatically creates backups of images and user data, and verifying the integrity of the backups.
Disaster Recovery: Testing the recovery process to ensure that the gallery’s data can be restored efficiently in case of a failure.

11. Load Testing (Medium Priority)

Load testing ensures that the gallery can handle a high volume of users and images simultaneously without issues. This includes:

Simulated Traffic: Running load tests to simulate a large number of concurrent users and ensure the server and gallery can handle the traffic without performance degradation.
Server Load: Testing the impact of multiple users on server resources, ensuring that the gallery doesn’t slow down or crash under high load.

3. Test Execution
Test Case Creation: For each test mentioned, create detailed test cases with:
	-Steps to execute the test
	-Expected results
	-Actual results
	-Pass/Fail status
Test Execution Order: Prioritize high-impact and high-usage areas, like image display, search, and filtering. Then move to performance and security-related tests.
Defect Logging: Record defects using a tracking tool (Jira, Trello, etc.), including steps to reproduce, severity, and screenshots.

4. Test Completion Criteria
All high-priority test cases (e.g., image display, navigation, search, upload) must pass, or defects must be resolved.
No critical issues should remain unresolved.
Performance and security should meet defined thresholds (e.g., load time < 3 seconds, secure uploads).
Regression and functional testing for core features must be successful.

5. Risks and Mitigation
Risk 1: Large images causing slow load times.
Mitigation: Use optimized image sizes, lazy loading, and CDN for faster image delivery.
Risk 2: Unexpected behavior with large numbers of images or users.
Mitigation: Perform load and stress testing to identify bottlenecks and improve scalability.
Risk 3: Broken image links due to incorrect paths.
Mitigation: Implement a monitoring system for broken links, and ensure all paths are tested after deployment.

6. Approval
Test Plan Approval: Borna Pekanovic
Date of Approval: 23/03/2026