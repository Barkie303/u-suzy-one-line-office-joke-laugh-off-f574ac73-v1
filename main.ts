// One-Line Office Joke Laugh-Off: one joke, no warm-up act — the family line from HR meets a kid's punishment.
// The joke lives in one string below: the "we're a family" line every office hears, then a punchline that takes it literally.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "HR said we're a family, so I asked for a raise and got grounded.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
