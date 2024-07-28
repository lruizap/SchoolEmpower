# School Empower

## Table of contents

  1. Introduction
  2. Description of the test
  3. Objective
  4. Remarks
  5. Description of the project
  6. Project structure
  7. Execution on site

## Introduction

This project is a technical test for the company Ayuda Pymes.
The project consists of a layout of a website to which a responsive section is to be added.

## Description of the test

* A link to a project in [Figma](https://www.figma.com/design/hMBsXjE95HWmioEpN22cqP/School-Empower---simple%C2%A0website-template%C2%A0for-beginners-for-school-(Community)?node-id=69-5241) will be attached and the layout will have to be done.
* It is necessary to create the natural responsive of the page.
You must create interactions (button hover, form validation, etc... ).
* Once the project is finished, you must upload it to a Git repository (Github, Bitbucket, ... ).
* The project must have a README.md where the documentation of how the project was done, what technology was used, what libraries, and if necessary, the necessary steps to deploy it locally.

## Objective

The objective of the test is to see the interviewee's ability to develop the front end of a website and the use of tools such as Git.

The layout, code cleanliness and page loading speed will be taken into account.

## Remarks

* You can use any technology you prefer, as well as any style libraries or dependency packages.
* The use of reusable components is recommended.
* The Git repository can be private or public, if private, you must add the following user: <juanrosales@ayudat.es>.
* Animations are optional.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project description

To begin with, I'll talk about the technologies to be used in this project.
First of all, I will select the frontend technology, in my case I will use Next.JS using TypeScript to create the website.
As for the styles, I will mix both CSS and a TailwindCSS.

Once the technologies are selected, we inicialice a project with Next.js using the command

```bash
npx create-next-app@latest school-empower
```

After initialising the project, I cleaned it of styles and files that were not needed to start the layout.

After this, I opened Figma and from the first moment I was clear that the order of creation of the web must be from top to bottom and creating first the mobile section and adapting it to the web so that there are no problems.

Once the code was clean, I downloaded the first images, looked at the style guide provided in figma, changed the project font and started to create the website.

## Project Structure

```markdown
├── .next/
├── node_modules/
├── public/
│   └── img/
│       └── svg/
├── src/
│   ├── app/
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   ├── components/
│   │   │   └── Button.tsx
│   │   │   └── CardCourse.tsx
│   │   │   └── CardPackages.tsx
│   │   │   └── CarouselPackages.tsx
│   │   │   └── Nav.tsx
│   │   │   └── Section.tsx
│   │   └── styles/
│   │       └── layout.tsx
│   │       └── page.tsx
├── .eslintrc.json
├── .gitignore
├── .next-env.d.ts
├── .env.local.example
├── .gitconfig
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── prueba-tecnica-desarrollo-web.pdf
└── README.md
```

## Running the Project Locally

Steps to run the project on your local environment.

### Prerequisites

Make sure you have the following software installed:

* Node.js
* npm (Node Package Manager)

### Installation

Follow these steps to install the dependencies and set up the project:

```bash
# Clone your fork to your local machine
git clone https://github.com/lruizap/SchoolEmpower.git

# Navigate to the project directory
cd SchoolEmpower

# Install dependencies
npm install

# Start the development server
npm run dev

# The project will be running at
http://localhost:3000
