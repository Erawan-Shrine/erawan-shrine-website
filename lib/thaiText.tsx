import React from "react";

// Some browsers break Thai text mid-word when wrapping long lines, since Thai
// has no spaces between words and relies on dictionary-based line breaking
// that isn't always reliable. Words listed here get wrapped in a
// non-breaking span so they always stay together on one line.
const NO_BREAK_WORDS = ["สักการะ", "สักการ"];

const pattern = new RegExp(`(${NO_BREAK_WORDS.join("|")})`, "g");

/**
 * Renders Thai body text while preventing certain words from being
 * split across a line break. Use in place of raw string interpolation
 * wherever these words may appear in a wrapping paragraph.
 */
export function thaiText(text: string): React.ReactNode {
  const parts = text.split(pattern);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    NO_BREAK_WORDS.includes(part) ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}
