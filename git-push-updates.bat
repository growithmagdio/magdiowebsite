@echo off
echo ===================================================
echo   MAGDIO - Git Commit and Push Helper
echo ===================================================
echo.
echo 1. Adding modified files to Git...
git add .
echo.
echo 2. Committing changes...
git commit -m "Restore original /services/* URLs and implement image speed optimizations"
echo.
echo 3. Pushing to remote repository...
git push
echo.
echo ===================================================
echo   Done! Your changes are pushed successfully.
echo ===================================================
pause
