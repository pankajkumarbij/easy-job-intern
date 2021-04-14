# Contributing Guidelines

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

This documentation contains a set of guidelines to help you during the contribution process.
We are happy to welcome all the contributions from anyone willing to improve/add new scripts to this project. Thank you for helping out and remember, **no contribution is too small.**



#### Table Of Contents

- [Contributing Guidelines](#contributing-guidelines)
- [Submitting Contributions👩‍💻👨‍💻](#submitting-contributions)
  - [Step 0 : Find an issue  🔍](#step-0--find-an-issue--)
  - [Step 1 : Fork the Project 🍴](#step-1--fork-the-project-)
  - [Step 2 : Setup Guidelines](#Step 2 :Setup Guidelines)
    - [Backend](#Backend)
    - [Frontend](#Frontend)
    - [Start Frontend & Backend simultaneously](#Start Frontend & Backend simultaneously)
  - [Step 3 : Branch  🔖](#step-3--branch--)
  - [Step 4 : Work on the issue assigned  📕](#step-4--work-on-the-issue-assigned--)
  - [Step 5 : Commit](#step-5--commit)
  - [Step 6 : Work Remotely](#step-6--work-remotely)
  - [Step 7 : Pull Request  🎣](#step-7--pull-request--)
- [Need more help?🤔](#need-more-help)
- [Tip from us😇](#tip-from-us)


## Submitting Contributions👩‍💻👨‍💻
Below you will find the process and workflow used to review and merge your changes.

### Step 0 : Find an issue  🔍
- Take a look at the Existing Issues or create your **own** Issues!
- Wait for the Issue to be assigned to you after which you can start working on it.
- Note : Every change in this project should/must have an associated issue.
![issue](/public/images/ContributionIsssues.jpg)

### Step 1 : Fork the Project 🍴
- Fork this Repository. This will create a Local Copy of this Repository on your Github Profile. Keep a reference to the original project in `upstream` remote.
```
$ git clone https://github.com/<your-username>/easy-job-intern
# Navigate to the project directory.
$ cd easy-job-intern
$ git remote add upstream https://github.com/pankajkumarbij/easy-job-intern
```
![fork](/public/images/ContributionFork.jpg)
- If you have already forked the project, update your copy before working.
```
$ git remote update
$ git checkout <branch-name>
$ git rebase upstream/<branch-name>
```

## Step 2 :Setup Guidelines

### Backend

1. Run `cd server` on your CLI.

2. Install the dependencies by running

   ```
   npm install
   ```

3. Run the server

   ```
   node index
   ```

### Frontend

1. Navigate to the root folder i.e. easy-job-intern.git

2. Install the dependencies by running

   ```
   npm install
   ```

3. Run the server

   ```
   npm start
   ```

   _NOTE: To run the Frontend side of the application it recommended to run the backend server too._

## Start Frontend & Backend simultaneously

 1. Navigate to the root folder i.e.  easy-job-intern.git

 2. Install the dependencies by running

    ```
    npm install
    ```

    _NOTE:  No need to do  step-2 if frontend is already setup_

 3. Start Frontend & Backend simultaneously

    ```
    npm run dev
    ```



### Step 3 : Branch  🔖

Create a new branch. Use its name to identify the issue your addressing.
```
# It will create a new branch with name Branch_Name and switch to that branch
$ git checkout -b Branch_Name
```

### Step 4 : Work on the issue assigned  📕
- Work on the issue(s) assigned to you.
- Add all the files/folders needed.
- After you've made changes or made your contribution to the project add changes to the branch you've just created by:
```
# To add all new files to branch Branch_Name
$ git add .
```
```
# To add only a few files to Branch_Name
$ git add <some files>
```

### Step 5 : Commit
- To commit give a descriptive message for the convenience of reviewer by:
```
# This message get associated with all files you have changed
$ git commit -m "message"
```
- **NOTE**: A PR should have only one commit. Multiple commits should be squashed.

### Step 6 : Work Remotely
- Now you are ready to your work to the remote repository.
- When your work is ready and complies with the project conventions, upload your changes to your fork:

```
# To push your work to your remote repository
$ git push -u origin Branch_Name
```
- Here is how your branch will look.
![br](/public/images/ContributionBranch.jpg)

### Step 7 : Pull Request  🎣
- Go to your repository in browser and click on compare and pull requests. Then add a title and description to your pull request that explains your contribution.
![pullrequest](/public/images/ContributionPR.jpg)
- Voila! Your Pull Request has been submitted and will be reviewed by the moderators and merged.🥳

## Need more help?🤔
You can refer to the following articles on basics of Git and Github and also contact the Project Mentors, in case you are stuck:
- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Learn GitHub from Scratch](https://lab.github.com/githubtraining/introduction-to-github)


## Tip from us😇
It always takes time to understand and learn. So, do not worry at all. We know **you have got this**!💪
