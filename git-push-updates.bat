@echo off
echo ===================================================
echo   MAGDIO - Git Commit and Push Helper
echo ===================================================
echo.
echo 1. Adding modified files to Git...
git add .
echo.
echo 2. Committing changes...
git commit -m "Fix client marquee banner image URLs resolution for Vite production build"
echo.
echo 3. Pushing to remote repository...
git push
echo.
echo ===================================================
echo   Done! Your changes are pushed successfully.
echo ===================================================
pause
