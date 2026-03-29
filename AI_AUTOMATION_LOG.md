AI AUTOMATION PROCESS

I used Playwright test automation tool because I have some experience with it and know how to write tests with it. I used CODEGEN function that helps you write automated tests in a way that it records every click
you make on a website or app and translates it into Javascript or Typescript code. It works well however, not every website or app is easy to automate so it can happen where some elements on a page are not easily clickable
and you need to make a workaround. For example, when you need to hover over something for button or menu to appear. This is where AI becomes useful. I don't have paid version of any AI tool at home but I do have paid version
of ChatGPT on work laptop. I'm used to it and that's why I used it the most. I wrote all of the tests and AI just helped me solve problems like I already mentioned, writing how to generate random user names and so on.
I also used GitHub's Copilot in VS code for some suggestions and solving problems. I had some problems with it where the chat wouldn't open, so restarting VS code multiple times helped me solved it. 
Claude AI also gave me problems with creating account where it after phone number verification, page just endlessly loaded and it wouldn't create an account.
That's why I didn't want to waste time dealing with problems and I resorted to ChatGPT that worked for me just fine. It's the usual problems of coding and testing but I didn't have time to solve all of them. 
Again I need to mention, I didn't copy-paste code from any AI tool to VS code, I wrote it, ChatGPT and Copilot just helped me with problems and making my code cleaner and more stable. 

I can use any AI tool, adjust to it and I did use sporadically Claude before, just in the last two years of my QA expeirence, ChatGPT was and is my preferred AI tool. I used it during the testing on the job
and privately for learning Playwright and other things. I hope you take this explanation in consideration when reviewing my work.

The main process was: Set up Playwright and VS Code (was already done before but I had some issues with running tests) -> Playwright Codegen -> Write a test -> Run test -> Check potential problems -> Consult with ChatGPT
(explain the problem and paste the part of the code where the test stops working) -> Check potential solutions that ChatGPT provided and incorporate them in a test -> Run test -> If it works great, move on to a next one. 
If it doesn't, repeat the process.

The four main functionalities I decided to automate are login, register, search and creating albums.

Login:
-I'm using already created account (Username: BornaP, Password: Borna031!)
-Problem that happened was accessing the menu because you need to hover on the top left corner to access menu, so ChatGPT helped me write code for solving that problem (this solution was used in other tests aswell)

Register:
-Random username and mail but the same password for each run because password can be the same
-After registration, you have to confirm your account via email and that part I didn't automate because Playwright can't access email.
Solutions are either temporary mail or Google or Outlook API. It can be done but it takes time which I unfortunately didn't have

Search:
-Basic search test for a word flower; verifying that the first uploaded picture on the page exists

Create album:
-Login + Create album flow
-This was the hardest one to automate
-Uploading cover image I managed to automate. Unfortunately, uploading the image inside of the album was the problem. Playwright couldn't figure out how to access the album itself.
I spent a lot of time trying to solve this but I didn't manage. Every solution that ChatGPT provided, didn't work because of how the object was coded. It can be done with more time but unfortunately I didn't have it.
