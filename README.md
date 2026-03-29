INSTRUCTIONS FOR RUNNING PLAYWRIGHT TESTS:

Instructions are pretty straightforward and anyone who used playwright should be familiar with them. I made it the easiest I could for myself and for anyone who is going to run these tests. 	

1.Install latest Playwright in your IDE (I used VS Code)
2.Add package, package-lock and playwright config files (added all three just in case; be sure that test path in config file is correct)
3.Add tests in any folder that you choose and add NatureTest.jpg image to the same folder for createAlbum.spec.js test (cover image uploading)
4.Enter in terminal in IDE: npx playwright test [PATH]/[NAME OF THE TEST] -> Example: npx playwright test tests/login.spec.js

For createAlbum.spec.js, if you want to run it multiple times, delete album from the profile and run the test again.

