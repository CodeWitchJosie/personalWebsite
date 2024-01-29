# Code Witch Josie

Website hosted at https://www.jocelynirwin.com/

Website Deploy Status:

[![Netlify Status](https://api.netlify.com/api/v1/badges/fd269bb9-c7fc-460d-8a58-cf0b9d27332c/deploy-status)](https://app.netlify.com/sites/codewitchjosie/deploys)

## Table of Contents

- [Overview](#overview)
  - [Project History](#project-history)
  - [Project Development Cadence](#project-development-cadence)
  - [Upcoming Content](#upcoming-content)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Running](#running)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributions)
- [Credits](#credits)
- [License](#license)

## Overview

This project was originally developed with Gatsby v2 and React v16. It has recently undergone massive dependency and framework updates, now leveraging the capabilities of Gatsby v5 and React v18. 

### Project History
This project traces back to a playful beginning—my husband's promise of a puppy "in 5 years" (betting on my goldfish-like memory). Fully aware that remembering a 5-year milestone would require some assistance, I hastily crafted a basic vanilla JavaScript countdown timer. That very night, I went live using S3 to host my countdown page, turning a flippant promise into a lighthearted troll that endures to this day.

As my React skills grew at work, I felt compelled to turn my basic countdown into a React component—a shareable showcase of my coding style. Enter Gatsby and Netlify, two completely new to me tools. They simplified the DevOps so that I was able to quickly refactor my timer. With the most daunting tasks of a new project behind me, I was energized to create something more significant.

The goal for my parked domain names had always been to serve as a public portfolio. Thus, JocelynIrwin.com was reborn with that goal—an embodiment of my coding practices, albeit somewhat content-starved. And that second iteration of the [countdown page](https://www.jocelynirwin.com/countdown) lives on, though hidden from all site maps and navigation menus.

Life unfolded, and the project gathered dust as health and family took center stage.

Now, with a newfound rhythm in motherhood and a desire to challenge myself beyond the 9-to-5, the plan is to dust off this project. It's time to bring the original vision to life, flex my web and React muscles again, and say hello to version 2 of this Code Witch's portfolio.

Stay tuned for the resurrection—it's going to be bewitching!

### Project Development Cadence
This project operates as a side venture, undergoing development in sporadic bursts. Periods of focused coding align with my pursuit of new skills or a deliberate effort to prevent the project from becoming too outdated.

Currently, the primary focus is on keeping the project relevant and aligned with the latest technologies. Intermittent development cycles are inevitable given the constraints of health, family, and work.

### Upcoming Content

It never ceases to amaze me that this website has very little resume-focused copy, and yet it serves as a robust representation of my skills and values as an engineer. Nevertheless, I aim to complete drafting my content, have it reviewed, and make it publicly available by the end of 2024. Cheers to self-accountability.

## Technologies Used

The following technologies and tools have been utilized in the development and maintenance of this project:

- **Bootstrap:** A popular CSS framework for responsive and visually appealing designs.
- **Gatsby:** A React-based open-source framework for building fast, modern websites.
- **GraphQL:** A query language and runtime for APIs, used for efficient data fetching.
- **Netlify:** A web development platform that automates the building and deployment of projects.
- **React:** A JavaScript library for building user interfaces.
- **Sass:** A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
- **TypeScript:** A typed superset of JavaScript that adds static types.

Feel free to explore the codebase and documentation of these technologies to understand their role in shaping this project.

## Getting Started

### Prerequisites

**Note: The following instructions assume a macOS environment.**

Before you begin, ensure you have the following installed in the suggested order:

1. [Homebrew](https://brew.sh/): The package manager for macOS. Install it by following the instructions on the Homebrew website.

1. (Optional) [Zsh](https://www.zsh.org/): A powerful and feature-rich Unix shell. Install it using Homebrew:

   ```zsh 
   brew install zsh
   ```

1. [Git](https://git-scm.com/): Version control system for tracking changes in source code. Install it using Homebrew:

   ```zsh 
   brew install git
   ```
1. (Optional) [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm): Useful for managing multiple Node.js versions. Follow the instructions on the nvm GitHub repository for installation.

1. [Node.js](https://nodejs.org/): Install it using nvm (recommended) or Homebrew:

   ```zsh 
   # nvm installation
   > nvm install node
   
   # Homebrew installation
   > brew install node
   ```

1. [npm](https://www.npmjs.com/): Included with Node.js installation.

1. [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/): Install globally using npm:

   ```zsh 
   npm install -g gatsby-cli
   ```

After installing Zsh, you might also consider using [Oh My Zsh](https://ohmyz.sh/), a community-driven framework for managing Zsh configurations. It comes with a variety of plugins and themes that can further enhance your terminal experience.

### Installation

Clone the repository:

```zsh
git clone https://github.com/CodeWitchJosie/personalWebsite.git
```

Navigate to the project directory:

```zsh
cd personalWebsite
```

Install dependencies:
```zsh
npm install
```

## Running

To run the development server locally, use the following command:

```zsh
gatsby develop
```

The website will be accessible at http://localhost:8000.

## Deployment

(WIP...Directions drafted but not tested and verified)

This project follows recommended procedures for deployment using GitHub and Netlify. Below is an outline of the deployment process:

1. **Feature Branches:**
    - Create a feature branch for the changes you are working on:
      ```bash
      git checkout -b feature-branch-name
      ```

2. **Preview in Netlify:**
    - Push your feature branch to GitHub:
      ```bash
      git push origin feature-branch-name
      ```
    - Netlify will automatically create a preview deployment for your feature branch.
    - Access the preview URL provided by Netlify to test and review your changes.

3. **Pull Request to Main:**
    - When satisfied with the changes, create a pull request (PR) to merge your feature branch into the `main` branch.
    - Ensure that the PR passes any automated tests and meets the project's contribution guidelines.

4. **Automated Deployment:**
    - Once the PR is merged into the `main` branch, Netlify will automatically trigger a new build and deploy the updated version of the site.
    - Monitor the Netlify deployment logs for any errors or warnings.

5. **Production URL:**
    - Once the build is successful, your changes will be live on the production site. You can find the production URL in the Netlify dashboard.

By following this deployment process, you can ensure that changes are thoroughly tested in a preview environment before being merged into the main branch and deployed to the production site.

## Future Enhancements

1. **Functional Components:**
    - Migrate class components to functional components where applicable.
    - Leverage React Hooks for state and lifecycle management.

2. **File Format Exploration:**
    - ~~Explore and implement the use of Markdown files for content storage.~~
    - Learn about various file formats supported by Gatsby.

3. **CMS Integration:**
    - Connect the project to a Content Management System (CMS) for dynamic content updates.
    - Explore popular CMS options compatible with Gatsby and Netlify, such as [Contentful](https://www.contentful.com/), [Sanity](https://www.sanity.io/), or [Strapi](https://strapi.io/).

4. **Integration with Storybook:**
    - Implement integration with [Storybook](https://storybook.js.org/) for UI component development and documentation.

5. **Accessibility Improvements:**
    - Ensure that the project adheres to best practices for web accessibility.
    - Conduct an audit using tools like Lighthouse to identify and address any accessibility issues.

6. **Responsive Design:**
    - Enhance the project's responsiveness to ensure an optimal user experience across various devices.

7. **SEO Learning Experience:**
    - Learn about SEO through hands-on implementation on the website.
    - Experiment with SEO practices and strategies to understand their impact.

8. **Project Portfolio Expansion:**
    - Transform the website into a portfolio showcasing various pet projects.
    - Create an interface to interact with OpenAI using an API key.
    - Explore data visualizations on topics of personal interest.


## Contributions

If you'd like to contribute, please fork the repository and create a pull request. Feel free to open an issue if you encounter any problems or have suggestions.
License

## Credits

This project is based on a starter template created by [Borek Bernard](https://github.com/borekb). The original project served as inspiration and a foundation for the development of this project. 

Visual design was inspired by the layout and colors from [Kelvin Bootstrap Resume Template](https://templatemag.com/kelvin-bootstrap-resume-template/), though no code was directly used.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
