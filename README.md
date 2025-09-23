
# Handfeetball Official Website

This is the official repository for **Handfeetball**, a new innovative sport.  
The website is built with [Eleventy (11ty)](https://www.11ty.dev/) and managed with [Netlify CMS](https://www.netlifycms.org/).  
It is deployed and hosted on **Netlify**.

---

## 🚀 Features
- Built with **Eleventy (11ty)** static site generator
- Content editing via **Netlify CMS** (`/admin` dashboard)
- Clean Tailwind CSS design with gradient background
- Markdown (`.md`) files for easy content management
- Automatic deployment on Netlify

---

## 📂 Project Structure

handfeetball/
├── src/                          # Main content folder
│   ├── index.md                  # Homepage
│   ├── about.md                  # About Handfeetball
│   ├── rules.md                  # Rules summary
│   ├── officials.md              # Officials page
│   ├── learnmore.md              # Learn More page
│   ├── contact.md                # Contact page
│   └── _includes/                # Layouts & shared parts
│       ├── layouts/
│       │   ├── base.njk          # Base HTML layout
│       │   └── page.njk          # Page template
│       └── partials/
│           ├── navbar.njk        # Reusable navigation bar
│           └── footer.njk        # Reusable footer
│
├── admin/
│   └── config.yml                # Netlify CMS configuration
│
├── .eleventy.js                   # Eleventy configuration
├── netlify.toml                   # Netlify build/deploy settings
├── package.json                   # Project dependencies
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS setup for Tailwind
│
├── README.md                      # Project overview & setup guide
├── LICENSE                        # MIT License
├── CONTRIBUTING.md                # Contribution guidelines
├── CODE_OF_CONDUCT.md             # Community rules
├── SECURITY.md                    # Security policy
├── ISSUE_TEMPLATE.md              # Template for GitHub issues
├── PULL_REQUEST_TEMPLATE.md       # Template for PRs
├── .gitignore                     # Files Git should ignore

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/handfeetball.git
cd handfeetball

2. Install dependencies

npm install

3. Run the development server

npm start

Your site will be available locally at:
👉 http://localhost:8080

4. Build for production

npm run build

This will generate the static site inside the _site folder.


---

🌐 Deployment

This project is deployed on Netlify.
Every push to the main branch triggers a new build and deploy.

Website: https://handfeetball.com

CMS Admin: https://handfeetball.com/admin/



---

📖 License

This project is licensed under the MIT License.


---

✨ Credits

Developed with ❤️ using:

Eleventy (11ty)

Netlify CMS

Tailwind CSS


---
