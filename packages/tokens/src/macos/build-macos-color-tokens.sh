tokensDir="../tokens"

# save the user setting (true = dark)
appearanceUserSetting=$(osascript -e 'tell application "System Events" to tell appearance preferences to return dark mode')

echo "🌞  Change macOS appearance to 'light' mode..."
osascript -e 'tell app "System Events" to tell appearance preferences to set dark mode to false'

echo "🎨  Fetching light macOS system colors via Swift script..."
macosSystemTokensLight=$(swift ./src/macos/get-macos-system-colors.swift)

echo "🌚  Change macOS appearance to 'dark' mode..."
osascript -e 'tell app "System Events" to tell appearance preferences to set dark mode to true'

echo "🎨  Fetching dark macOS system colors via Swift script..."
macosSystemTokensDark=$(swift ./src/macos/get-macos-system-colors.swift)

# restore the user setting
echo "↩️   Restore macOS appearance to previously set mode..."
osascript -e "tell app \"System Events\" to tell appearance preferences to set dark mode to $appearanceUserSetting"

echo "🌐  Fetching macOS system color palettes from Apple website..."
# dry run first to get the message
macosSystemColorPalettesMessage=$(ts-node ./src/macos/fetch-colors-from-apple-website.ts $tokensDir true)
echo $macosSystemColorPalettesMessage

macosSystemColorPalettes=$(ts-node ./src/macos/fetch-colors-from-apple-website.ts $tokensDir)

echo "📝  Merging everything into one file..."
ts-node ./src/macos/merge-macos-color-tokens.ts "$macosSystemTokensLight" "$macosSystemTokensDark" "$macosSystemColorPalettes" "$tokensDir"

echo "✅ Done."