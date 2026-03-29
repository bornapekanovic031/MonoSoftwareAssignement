BUG REPORT - MONO SOFTWARE 

PRECONDITION: Open http://demo.baasic.com/angular/starterkit-photo-gallery/main

BUG 1

TITLE/SUMMARY: Link "Blog name" on the home page doesn't have a proper name and cannot be opened
STEPS TO REPRODUCE:
	1.Scroll down the home page
	2.Click on link "Blog name" on the down left corner of the page 
	3.Observe the behavior
EXPECTED RESULT: Link "Blog name" has a proper name and can be opened
ACTUAL RESULT: Link "Blog name" doesn't have a proper name and cannot be opened
SEVERITY: Moderate
PRIORITY: Low
SCREENSHOT/VIDEO: Yes (Screenshot)

BUG 2

TITLE/SUMMARY: User cannot log in with social media profiles
STEPS TO REPRODUCE:
	1.Go to Menu -> Login
	2.Click on any social media icon (Facebook, Twitter, Google or GitHub)
	3.Observe the behavior
EXPECTED RESULT: User is able to login with his social media account
ACTUAL RESULT: Error message "undefined: Social login configuration not found." is visible
SEVERITY: Major
PRIORITY: Medium
SCREENSHOT/VIDEO: Yes (Screenshot)

BUG 3

PRECONDITION: User must create an account

TITLE/SUMMARY: When clicking on Recover password (Set new password) mail link, user receives an error 
STEPS TO REPRODUCE:
	1.Go to Menu -> Login
	2.Click on "Forgot Your Password? Recover Your Password Here!"
	3.Enter your registered email
	4.Go to your email, find received email for setting new password and click on "Set new password" link
	5.Observe the behavior
EXPECTED RESULT: User is redirected to a page where he/she can set up new password
ACTUAL RESULT: "HTTP Error 404.0 - Not Found" error message is shown
SEVERITY: Major
PRIORITY: High
SCREENSHOT/VIDEO: Yes (Screenshot)

BUG 4

PRECONDITION: User must create an account

TITLE/SUMMARY: When clicking on uploaded image in created album on user's account, error 404 is visible instead of image
STEPS TO REPRODUCE:
	1.Go to Menu -> Login -> Create album
	2.Enter album name and description and click on Save album
	3.Upload image, enter image name and description and click on Upload button
	4.Open created album and click on Upload photo
	5.Upload image, enter image name and description and click on Upload button again
	6.When image is uploaded in your album, open the image
	7.Observe the bahvior
EXPECTED RESULT: Image is opened and name and description is visible
ACTUAL RESULT: "404: page missing" error is visible
SEVERITY: Major
PRIORITY: High
SCREENSHOT/VIDEO: Yes (Screenshot and video)

IMPORTANT OBSERVATION/WORKAROUND: When uploading another image to the same album and clicking on the second image, user is able to scroll through both images wihtout error but when user clicks on the first image, error 404 shows up again. I will add video to show this.

BUG 5

PRECONDITION: Use Chromium browsers (Google Chrome, Microsoft Edge or Opera). It works correctly in Firefox.

TITLE/SUMMARY: When choosing already searched word in search bar, magnifying glass icon disappears and can't be clicked
STEPS TO REPRODUCE:
	1.Go to Menu -> Home
	2.Enter any word in the search bar (Example: flower) and press Enter to search for it
	3.Go back to Home page, click on search bar and choose already searched word, in this case flower
	4.Observe the behavior of the icon
EXPECTED RESULT: Magnifying glass icon is visible and can be clicked
ACTUAL RESULT: Magnifying glass icon is not visible anymore and can't be clicked
SEVERITY: Moderate
PRIORITY: Medium
SCREENSHOT/VIDEO: Yes (Video)

BUG 7 (discovered it during automation testing)

NOTE: I don't know how to reproduce this bug. I was running createAlbum.spec.js test and after numerous runs, I started getting the error that Test Photo already exists even though I couldn't see it on my profile.
      I found it through search bar.  I was running tests on 29/03/2026 and date of last change is 30/03/2026 which is strange behavior.

TITLE/SUMMARY: When running automated test for creating album and uploading cover image, image with the same name already existed even though it should've been deleted 
STEPS TO REPRODUCE: Not sure. Maybe running createAlbum.spec.js constantly and deleting album and cover image on your profile so it eventually ends up in cache permenantly 
EXPECTED RESULT: Image is deleted
ACTUAL RESULT: Image is not deleted
SEVERITY: Moderate
PRIORITY: Medium
SCREENSHOT/VIDEO: Yes (Screenshot)