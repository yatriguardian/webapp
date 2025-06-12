📖 YatriGuardian Web App

Built on React + Vite single-page application deployed to GitHub Pages with a custom domain and hash-based routing.

⸻

📋 Table of Contents
	1.	Prerequisites
	2.	Local Development
	3.	Routing on GitHub Pages
	4.	Building for Production
	5.	Push & Redeploy
	6.	Custom Domain & HTTPS
	7.	Scripts Reference
	8.	Contributing

⸻

🔧 Prerequisites
	•	Node.js ≥ 18.x
	•	npm (bundled with Node.js)
	•	Git
	•	A GitHub account with write access to this repository

⸻

🚀 Local Development
	1.	Clone the repo

git clone https://github.com/YatriGuardian/webapp.git
cd webapp


	2.	Install dependencies

npm ci


	3.	Start the dev server

npm run dev


	4.	Open your browser at http://localhost:5173

⸻

🗺 Routing on GitHub Pages

GitHub Pages serves static files and doesn’t support client-side routing by default. We use HashRouter to avoid 404s on page refresh:
	•	URLs include #/:
	•	Home: https://yatriguardian.in/#/
	•	Visa Services: https://yatriguardian.in/#/visa-services
	•	Contact: https://yatriguardian.in/#/contact

No server changes required—just use hash-based links.

⸻

🛠️ Building for Production
	1.	Run production build

npm run build

	•	Output folder: dist/

	2.	Inspect build files

ls dist
# Should include: index.html, assets/, CNAME, etc.



⸻

📤 Push & Redeploy

Any commit to main triggers CI/CD via GitHub Actions:
	1.	Commit changes

git add .
git commit -m "<your changes description>"


	2.	Push to main

git push origin main


	3.	Monitor workflow
	•	Go to GitHub → Actions → Build & Deploy.
	4.	Verify live site
	•	Visit: https://yatriguardian.in

⸻

🌐 Custom Domain & HTTPS
	•	CNAME file: public/CNAME (copied to dist/CNAME)

yatriguardian.in


	•	GitHub Pages settings:
	•	Branch: gh-pages
	•	Folder: / (root)
	•	Enforce HTTPS: ✔️

⸻

⚙️ Scripts Reference

Command	Description
npm run dev	Launch dev server on localhost:5173
npm run build	Generate production build in dist/
npm run preview	Preview the production build locally
npm run lint	Run ESLint checks

⸻

© 2025 YatriGuardian.in. All rights reserved.