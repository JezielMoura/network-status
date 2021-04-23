dotnet publish --self-contained --runtime win-x64 -c "Release" -o "build" "src/api"
npm run build
npm run dist
Remove-Item -LiteralPath "build" -Force -Recurse