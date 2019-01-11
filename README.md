# Local Hazardous Waste Program

The Local Hazardous Waste Management Program in King County (LHWMP) is a regional partnership established to protect public health and the environment for all jurisdictions in King County including 38 cities, two tribes and unincorporated King County.  LHWMP delivers services reducing the risks of production, use, storage and disposal of hazardous waste.

The project will deliver a Content Management System using Sitecore 9 and launch a new website. 

* [Sharepoint Project site](https://kc1.sharepoint.com/teams/IT/PMCOE/LHWMP/default.aspx)
* [Azure DevOps site](https://kingcounty.visualstudio.com/Local-Hazardous-Waste-Management)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* [Node](https://nodejs.org/en/) 10.0.0 or greater. Make sure to include [npm](https://blog.npmjs.org/post/85484771375/how-to-install-npm) as part of the Node installation.
* [Git](https://git-scm.com/)

### Installing

Clone the repo
```
git clone https://github.com/aragonwa/lhwmp.git
```
Install packages
````````````````
npm install
````````````````
Start server
````````````````
npm run dev
````````````````
As you work in the ```src``` directory the server will automatically build your EJS and Sass files.
### Building components

All of our core files are in the ```src/components``` directory. 

```
+-- src
|   +-- components
|      +-- cards.ejs
|      +-- factoid.ejs
|      +-- ...
|   +-- sass
|      +-- style.scss
|   +-- households.html
|   +-- index.html
```
This project is using [EJS](https://www.ejs.co/) to build the HTML. The server will compile ```ejs``` files in the ```src``` directory and place them in the ```public``` folder as compiled HTML files.

To create a new page, use ```src/index.js``` as a template and create a new ```ejs``` file in the ```src``` directory.

To create a new component, create a new ```ejs``` file in the components directory and pull it into a page template.

```
<% include components/my-component %>
```
### Styles

This project is using [SASS](https://sass-lang.com/) to build CSS. The server will compile ```scss``` files in the ```src/sass``` directory and place them in the ```public``` folder as compiled css files.

To create a new SASS file, create a new ```scss``` file in the sass directory and pull it into the index.scss file.

```
@import 'base';
```
## Git workflow

* [Common Github commands](https://github.com/bpassos/git-commands)

Use feature branches for all your work and make a pull requests into the dev branch when you complete a feature. The master branch will be used for releases.

1. Create a new feature branch
2. Do your work in feature branch
3. Push feature branch to repo
4. Pull request to dev branch 
5. Delete feature branch if no longer in use
6. Pull/fetch from dev branch into new feature branch

````````````
Master branch ------------------------------->
    ├── Dev Branch 
        ├── Feature Branch 
        ├── Another Feature Branch
```````````````

### Basic workflow

* Add the file to staging
* Commit the file with a message
* push file to github

````````
git add <file>
git commit -m 'my comment'
git push
````````

### Other ways to add files to staging 

`````````
# Adding all files
git add -A

# Adding all files changes in a directory
git add .

# Choosing what changes to add (this will got through all your changes and you can 'Y' or 'N' the changes)
git add -p
`````````

### Important: Always remember to pull the latest from dev into your branch

```````
git pull origin dev
```````

### Checking the status of your files

`````````
git status
`````````

### Working with branches

````````
# Create and checkout branch
git checkout -b feature/branchname
git checkout feature/branchname

# Pushing local branch to remote
$ git push -u origin branchname

# Deleting a local branch - this won't let you delete a branch that hasn't been merged yet
$ git branch -d branchname

# Deleting a remote branch
$ git branch -rd origin/branchname
$ git push origin --delete branchname  or  $ git push origin:branchname
````````




## TODO

- [ ] Javascript compile script
- [ ] Break sass file into seperate component files
- [ ] Get list of components
