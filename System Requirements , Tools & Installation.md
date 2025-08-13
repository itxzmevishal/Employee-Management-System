* ## **System Requirements \& Tools :-**



1. OS: Windows/Linux/macOS
2. Backend: Node.js, Express.js
3. Database: MySQL, MySQL Workbench
4. Frontend: React, Bootstrap, JavaScript, HTML/CSS
5. IDE: VS Code
6. API Testing: Postman/Thunder Client
7. version control: git



---



* ## Installation :-



##### 1\. Operating System -

Your system can run on Windows, Linux, or macOS, but here I’ll describe Windows setup.



Requirement: Windows 10 or higher (64-bit recommended)





##### 2\. Node.js (Backend Runtime) -

Requirement: Node.js v18+



* *Installation Steps:*



Go to Node.js Official Website - https://nodejs.org/en



Download the LTS version for Windows.



Run the installer and follow prompts:



Check “Add to PATH” option.



Click Install.



Verify installation in Command Prompt (CMD):



node -v

npm -v



It should show Node.js and npm version numbers.



##### 3\. MySQL (Database) -

Requirement: MySQL Server 8.x



* *Installation Steps:*



Go to MySQL Community Server. - https://dev.mysql.com/downloads/mysql/



Download Windows (x86, 64-bit), MSI Installer.



Run installer and choose Developer Default.



Set a root password and optionally create a user for your app.



Complete the setup and start MySQL Server.



Verify installation using CMD:



mysql -u root -p

Enter the "root" password to login.



##### 4\. MySQL Workbench (Optional GUI) -

Purpose: Manage your database visually.



* *Installation Steps:*



Download from MySQL Workbench. - https://dev.mysql.com/downloads/workbench/



Install using the installer.



Connect using "root" username and "root" password to access my database.



##### 5\. Code Editor / IDE -

Recommended: Visual Studio Code



* *Installation Steps:*



Download from VS Code.



Install with default settings.



Install extensions:



Thunder Client (For API Calling)



ES7+ React/Redux/React-Native snippets (React development)



Node.js Extension Pack



Prettier - Code Formatter



##### 6\. Frontend Tools -



###### A. React :



Open CMD and install create-react-app:



npx create-react-app my-app

cd my-app

npm start



This will start a local dev server at http://localhost:3000.



###### B. Bootstrap :



Install via npm:



npm install bootstrap



##### 7\. Backend Tools -



###### A. Express.js (Node.js Framework) :



Install in your project folder:



npm install express



npm run dev



###### B. MySQL Node Package :



Install MySQL connector for Node.js:



npm install MySQL



###### C. Nodemon (Optional for auto-restart server) :



Install globally:



npm install -g nodemon



Start server:



nodemon server.js



###### 9\. Git (Version Control) :

* *Installation Steps:*



Download from Git.



Install with default options.



Verify installation in CMD:



git --version



###### 10\. Optional: Browser :



Requirement: Latest Chrome or Firefox for frontend testing.

