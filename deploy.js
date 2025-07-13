// deploy.js

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const DIST_DIR = "docs/.vuepress/dist";
const CNAME_FILE = "CNAME"; // Change if your CNAME is stored elsewhere
const DEPLOY_BRANCH = "gh-pages";
const TEMP_DIR = ".deploy-temp";

function run(cmd) {
  execSync(cmd, { stdio: "inherit", shell: "cmd.exe" });
}

console.log("📦 Starting deployment...");

// Ensure dist exists
if (!fs.existsSync(DIST_DIR)) {
  console.error("❌ Dist directory does not exist. Did you build the site?");
  process.exit(1);
}

// Clean up temp folder
if (fs.existsSync(TEMP_DIR)) {
  fs.rmSync(TEMP_DIR, { recursive: true });
}
fs.mkdirSync(TEMP_DIR);

// Copy build output safely (Windows-compatible)
run(`xcopy "${DIST_DIR}\\*" "${TEMP_DIR}\\" /E /I /Y`);

// Copy CNAME if present
if (fs.existsSync(CNAME_FILE)) {
  fs.copyFileSync(CNAME_FILE, path.join(TEMP_DIR, "CNAME"));
}

// Switch to deploy branch
console.log(`Checking out ${DEPLOY_BRANCH}`)
run(`git checkout ${DEPLOY_BRANCH}`);

// Remove old files from deploy branch
console.log("Removing old files...")
run(`git rm -rf .`);

// Copy new files from temp folder into root
run(`xcopy "${path.resolve(TEMP_DIR)}\\*" ".\\" /E /I /Y`);

// Stage and commit changes
run(`git add .`);
run(`git commit -m "Deploy updated site"`);

// Push to origin
run(`git push origin ${DEPLOY_BRANCH}`);

// Switch back to previous branch
run(`git checkout -`);

console.log("✅ Deployment complete!");
