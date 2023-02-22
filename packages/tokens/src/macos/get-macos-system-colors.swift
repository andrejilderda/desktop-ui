import Cocoa

// print("\n/* -------------- System Colors -------------- */")
// See: https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/color/#system-colors

print("systemBlue:", NSColor.systemBlue.rgbaCssString)
print("systemBrown:", NSColor.systemBrown.rgbaCssString)
print("systemCyan:", NSColor.systemCyan.rgbaCssString)
print("systemGray:", NSColor.systemGray.rgbaCssString)
print("systemGreen:", NSColor.systemGreen.rgbaCssString)
print("systemIndigo:", NSColor.systemIndigo.rgbaCssString)
print("systemMint:", NSColor.systemMint.rgbaCssString)
print("systemOrange:", NSColor.systemOrange.rgbaCssString)
print("systemPink:", NSColor.systemPink.rgbaCssString)
print("systemPurple:", NSColor.systemPurple.rgbaCssString)
print("systemRed:", NSColor.systemRed.rgbaCssString)
print("systemTeal:", NSColor.systemTeal.rgbaCssString)
print("systemYellow:", NSColor.systemYellow.rgbaCssString)

// print("\n/* -------------- Dynamic System Colors -------------- */")
// See: https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/color/#dynamic-system-colors

// print("\n/* Labels */")
print("labelColor:", NSColor.labelColor.rgbaCssString)
print("secondaryLabelColor:", NSColor.secondaryLabelColor.rgbaCssString)
print("tertiaryLabelColor:", NSColor.tertiaryLabelColor.rgbaCssString)
print("quaternaryLabelColor:", NSColor.quaternaryLabelColor.rgbaCssString)

// print("\n/* Text */")
print("textColor:", NSColor.textColor.rgbaCssString)
print("placeholderTextColor:", NSColor.placeholderTextColor.rgbaCssString)
print("selectedTextColor:", NSColor.selectedTextColor.rgbaCssString)
print("textBackgroundColor:", NSColor.textBackgroundColor.rgbaCssString)
print("selectedTextBackgroundColor:", NSColor.selectedTextBackgroundColor.rgbaCssString)
print("keyboardFocusIndicatorColor:", NSColor.keyboardFocusIndicatorColor.rgbaCssString)
print("unemphasizedSelectedTextColor:", NSColor.unemphasizedSelectedTextColor.rgbaCssString)
print("unemphasizedSelectedTextBackgroundColor:", NSColor.unemphasizedSelectedTextBackgroundColor.rgbaCssString)

// print("\n/* Content */")
print("linkColor:", NSColor.linkColor.rgbaCssString)
print("separatorColor:", NSColor.separatorColor.rgbaCssString)
print("selectedContentBackgroundColor:", NSColor.selectedContentBackgroundColor.rgbaCssString)
print("alternatingContentBackgroundColors[0]:", NSColor.alternatingContentBackgroundColors[0].rgbaCssString)
print("alternatingContentBackgroundColors[1]:", NSColor.alternatingContentBackgroundColors[1].rgbaCssString)
print("unemphasizedSelectedContentBackgroundColor:", NSColor.unemphasizedSelectedContentBackgroundColor.rgbaCssString)

// print("\n/* Menus */")
print("selectedMenuItemTextColor:", NSColor.selectedMenuItemTextColor.rgbaCssString)

// print("\n/* Tables */")
print("gridColor:", NSColor.gridColor.rgbaCssString)
print("headerTextColor:", NSColor.headerTextColor.rgbaCssString)

// print("\n/* Controls */")
print("controlAccentColor:", NSColor.controlAccentColor.rgbaCssString)
print("controlColor:", NSColor.controlColor.rgbaCssString)
print("controlBackgroundColor:", NSColor.controlBackgroundColor.rgbaCssString)
print("controlTextColor:", NSColor.controlTextColor.rgbaCssString)
print("disabledControlTextColor:", NSColor.disabledControlTextColor.rgbaCssString)
// print("currentControlTint:", NSControlTint.currentControlTint.rgbaCssString)
print("scrubberTexturedBackground:", NSColor.scrubberTexturedBackground.rgbaCssString)
print("selectedControlColor:", NSColor.selectedControlColor.rgbaCssString)
print("selectedControlTextColor:", NSColor.selectedControlTextColor.rgbaCssString)
print("alternateSelectedControlTextColor:", NSColor.alternateSelectedControlTextColor.rgbaCssString)

// print("\n/* Windows */")
print("windowBackgroundColor:", NSColor.windowBackgroundColor.rgbaCssString)
print("windowFrameTextColor:", NSColor.windowFrameTextColor.rgbaCssString)
print("underPageBackgroundColor:", NSColor.underPageBackgroundColor.rgbaCssString)

// print("\n/* Highlights & Shadows */")
print("findHighlightColor:", NSColor.findHighlightColor.rgbaCssString)
print("highlightColor:", NSColor.highlightColor.rgbaCssString)
print("shadowColor:", NSColor.shadowColor.rgbaCssString)

// ---------- NSColor extensions ----------
public extension NSColor {
    
    // Return as RGBA array, e.g.: `255, 76, 100, 0.5`"
    // Alpha-rounding code from: https://stackoverflow.com/a/27341001
    // String format specifiers per: https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/formatSpecifiers.html#//apple_ref/doc/uid/TP40004265-SW1
    
    var rgbaCssString: String { 
        guard let rgbColor = usingColorSpace(NSColorSpace.deviceRGB) else {
            return "FFFFFF"
        }
        let red = Int(rgbColor.redComponent * 255)
        let green = Int(rgbColor.greenComponent * 255)
        let blue = Int(rgbColor.blueComponent * 255)
        let alpha = String(Double(round(1000 * rgbColor.alphaComponent)/1000))
        let rgbaCssString = NSString(format: "rgba(%u, %u, %u, %@)", red, green, blue, alpha)
        return rgbaCssString as String
    }
    
    // Return as 6-digit RGB hex, e.g. `CC0000`
    var hexString: String {
        guard let rgbColor = usingColorSpace(NSColorSpace.deviceRGB) else {
            return "FFFFFF"
        }
        let red = Int(round(rgbColor.redComponent * 0xFF))
        let green = Int(round(rgbColor.greenComponent * 0xFF))
        let blue = Int(round(rgbColor.blueComponent * 0xFF))
        let hexString = NSString(format: "%02X%02X%02X", red, green, blue)
        return hexString as String
    }
}
