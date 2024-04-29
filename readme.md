

# [![Cypress](https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png)](https://www.cypress.io)

## Project created for Beloved Robot =)

### General requirements

- Install [Node.js](https://nodejs.org/es/download/).
- Install a git client such as [git bash](https://git-scm.com/downloads).
- Have installed some version of Chrome.

### Installing the test framework

#### **Clone the repository:**

```bash
git clone https://github.com/Nicolopez603/beloved_challenge.git
```

#### **Install the dependencies**.
Navigate to the project directory and run the following command to install the necessary dependencies:

```bash
cd beloved_challenge
npm install
```

#### **Set environment variables**.
Create a cypress.env.json file in the root of the project and add the following environment variables with your Todoist credentials:

```bash
TODOIST_EMAIL=your_email@example.com
TODOIST_PASSWORD=your_password
TODOIST_INVALID_EMAIL=invalid_email@example.com
TODOIST_INVALID_PASSWORD=invalid_password
```

### **TEST EXECUTION**
#### You can run the tests using the following commands:

To run all end-to-end tests both api cono ui (E2E) in headless mode with Electron:
```bash
npm run e2e-regression
```

To run the web tests in headless mode with Chrome: 
```bash
npm run ui-regression-chrome
```

To run the web tests in headless mode with Electron: 
```bash
npm run ui-regression-electron
```

To run API tests in headless mode with Chrome: 
```bash
npm run api-regression-chrome
```

To run API tests in headless mode with Electron: 
```bash
npm run api-regression-electron
```

### Example web and example API
We use as an example to test with the framework the following [public web](https://todoist.com/es).
And regarding api we use this [public api](https://api.chucknorris.io/).

### Integration with GitHub Actions, Slack and Artifacts
This project is integrated with GitHub Actions, allowing the automation of test execution on every push or pull request. In addition, an integration has been configured with Slack to receive notifications about the status of test executions and with Artifacts to store and download test reports.


### Test execution in GitHub Actions.
Every time a push is made to the **main** branch, a GitHub Actions workflow is executed that runs all end-to-end (E2E) and API tests.


### Notifications in Slack
At the end of test execution in GitHub Actions, a notification is sent to a previously configured Slack channel, informing whether the tests passed or failed.

<img width="1016" alt="slack-notify" src="https://github.com/Nicolopez603/beloved_challenge/assets/81532585/884214b2-bc35-47c5-b9dd-d63cbdf22d1e">

<img width="1037" alt="email-notify" src="https://github.com/Nicolopez603/beloved_challenge/assets/81532585/91a5ba37-9030-4c99-a547-8ba5d9c35d69">


--------

### Test reports in Artifacts
Test execution reports generated with the Mochawesome tool are stored as artifacts in GitHub Actions. These artifacts can be downloaded directly from the GitHub web interface or via command line commands.

This makes it easier to access and review test reports, allowing for more detailed analysis of the results and identification of potential issues or bugs.

<img width="1375" alt="Captura de pantalla 2024-04-24 a la(s) 17 47 55" src="https://github.com/Nicolopez603/beloved_challenge/assets/81532585/07a3fef4-4e74-4e14-b41a-4818e6e1e456">

---

### A brief summary of headless mode testing and documentation



https://github.com/Nicolopez603/beloved_challenge/assets/81532585/11a78df3-c687-4716-b183-7a2526028637



https://github.com/Nicolopez603/beloved_challenge/assets/81532585/334c7dfa-658a-4703-8c10-14217008d53d

-------

### About the Architecture and How is structured the project

If you would like more information about how it was made, the architecture and more, you can click here. 
[HERE](https://docs.google.com/document/d/12i3bVKRhPlC00CgISQyI5BF4v2iUh_NcuQMEiliHNX0/edit)