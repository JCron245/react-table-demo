# Table Demo

## Getting Started
To get the project up and running:

### Prerequisites

- `>= Node 10.0.0`

### Installing

- Clone this git repository: `git clone <repo>`
- Navigate into newly created directory: `cd react-table-demo`
- Create a production and develeopment environment file - Get values from someone on the team
  - `touch .env.development`
  - `touch .env.production`
	- `.env.*` example: 
		```bash 
			REACT_APP_API_KEY='string'
		```
- Install NPM packages: `npm i`
- Start Expo: `npm start`

## Libraries, Packages, Tools, and Thoughts

The following will just detail some significant libraries and choices made with the construction of the this project.

### [Create React App](https://github.com/facebook/create-react-app)
Great tool for quickly bootstrapping a react project.

### [Reboot.scss](https://getbootstrap.com/docs/4.0/content/reboot/)

I work with Bootstrap quite a bit, but for this project I am only using their reboot file. I like the defaults it sets for elements and how they behave, particularly I enjoy the 'border-box' applied to everything. I felt that using all of bootstrap was a bit overkill for the size of this demo and the table styling felt like it might violate the spirit of the challenge :D

In Bootstraps own words:

> Reboot, a collection of element-specific CSS changes in a single file, kickstart Bootstrap to provide an elegant, consistent, and simple baseline to build upon.

> Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors.

### [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

While I didn't necessarily need React Router. I needed the ability to switch to a "detail" view on click and since React Router is the most popular way to handle routing with React it seemed like a good opportunity to use it.

### [EditorConfig](https://editorconfig.org/)

Editor Config provides a way to enforce consistent coding styles, such as using tabs vs spaces, across multiple IDE's and environments fairly easily.

### [React Dropdown](https://www.npmjs.com/package/react-dropdown)
Simple easy to use Dropdown component for React - was ideal for this project because compared to some other options it supports a flat array of options fed into it.

### [Eslint](https://eslint.org/), [Husky](https://github.com/typicode/husky), [Lint Staged](https://github.com/okonet/lint-staged)
Eslint comes out of the box with create react app but we can further modify it with plugins or our own rules. Another thing I like to do with projects is setup Husky and Lint-Staged so that on git certain git commands we can perform certain actions. Generally I like to set it up so that on commit the project is linted/prettified (must pass linting for commit to succeed). Then on push it must past a build check before it will actually push. This helps weed out a ton of issues from ever ending up in a PR as well as keeping the code base clean and well styled.

### [Feather Icons](https://feathericons.com/), [React Feather](https://github.com/feathericons/react-feather)
Some fun open source icons

### Theme
I provided a simple light and dark theme. Upon visiting the site it will attempt to determine what your OS level theme setting is and use the preferred theme, if not it defaults to dark.

### [Linode](), [Nginx](https://www.nginx.com/)
My personal server is on Linode and I am currently using NGINX as my web server. I am serving up this demo, a custom color tool [Cron Color](https://croncolor.com), and my personal webpage [Jon Cornwell](https://joncornwell.com)

### HTTPS - [Lets Encrypt](https://letsencrypt.org/), [Certbot](https://certbot.eff.org/)
I got self signed certs using Lets Encrypt and Certbot to enable HTTPS
