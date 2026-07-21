@echo off
echo ===================================================
echo   MAGDIO - Git Commit and Push Helper
echo ===================================================
echo.
echo 1. Adding modified files to Git...
git add .
echo.
echo 2. Committing changes...
git commit -m "Major mobile PageSpeed optimization: Code-split homepage sections, eliminate CLS layout shifts, and defer non-critical visual elements"
echo.
echo 3. Pushing to remote repository...
git push
echo.
echo ===================================================
echo   Done! Your changes are pushed successfully.
echo ===================================================
pause
