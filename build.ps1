dotnet publish --self-contained --runtime win-x64 -c "Release" -o "dotnet-build" "src/api"
npm run build
npm run dist
Remove-Item -LiteralPath "dotnet-build" -Force -Recurse
Remove-Item -LiteralPath "svelte-build" -Force -Recurse