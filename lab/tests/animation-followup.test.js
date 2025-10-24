const fs = require('fs');
const path = require('path');

// Load HTML and CSS
const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const css = fs.existsSync(path.join(__dirname, '../style.css'))
  ? fs.readFileSync(path.join(__dirname, '../style.css'), 'utf8')
  : (html.match(/<style>([\s\S]*?)<\/style>/i)?.[1] || '');

// Extract CSS rules
const bodyRule = css.match(/body\s*\{([\s\S]*?)\}/)?.[1] || '';
const boxRule = css.match(/\.box\s*\{([\s\S]*?)\}/)?.[1] || '';
const wallTopRule = css.match(/\.wall-top\s*\{([\s\S]*?)\}/)?.[1] || '';
const wallBottomRule = css.match(/\.wall-bottom\s*\{([\s\S]*?)\}/)?.[1] || '';
const fingerRule = css.match(/\.finger\s*\{([\s\S]*?)\}/)?.[1] || '';
const fingerTopRule = css.match(/\.finger-top\s*\{([\s\S]*?)\}/)?.[1] || '';
const fingerBottomRule = css.match(/\.finger-bottom\s*\{([\s\S]*?)\}/)?.[1] || '';
const eyeRule = css.match(/\.eye\s*\{([\s\S]*?)\}/)?.[1] || '';
const eyePseudoRule = css.match(/\.eye::before\s*\{([\s\S]*?)\}/)?.[1] || '';

describe('Monster in a Box: Tests', () => {
  // Checkpoint 0: Setup
  test('correct HTML structure', () => {
    expect(html).toMatch(/<!DOCTYPE\s+html>/i);
    expect(html).toMatch(/<html\s+lang=["']en["']/i);
    expect(html).toMatch(/<meta\s+charset=["']UTF-8["']/i);
    expect(html).toMatch(/<meta\s+name=["']viewport["']\s+content=["']width=device-width,\s*initial-scale=1.0["']/i);
    expect(html).toMatch(/<title>Monster in a Box\s*-\s*Solution<\/title>/i);
    expect(html).toMatch(/<style>[\s\S]*<\/style>|href=["']style.css["']/i);
  });

  test('correct body styling', () => {
    expect(bodyRule).toMatch(/background:\s*#222/i);
    expect(bodyRule).toMatch(/margin:\s*0/);
    expect(bodyRule).toMatch(/padding:\s*20px/);
    expect(bodyRule).toMatch(/display:\s*flex/);
    expect(bodyRule).toMatch(/min-height:\s*100vh/);
  });

  // Checkpoint 1: Box
  test('correct box styling', () => {
    expect(html).toMatch(/<div\s+class=["'].*?\bbox\b.*?["']/i);
    expect(boxRule).toMatch(/width:\s*400px/);
    expect(boxRule).toMatch(/height:\s*300px/);
    expect(boxRule).toMatch(/border:\s*4px\s+solid\s*#8b7355/i);
  });

  // Checkpoint 2: Walls
  test('correct wall styling', () => {
    expect(html).toMatch(/<div\s+class=["'].*?\bwall-top\b.*?["']/i);
    expect(html).toMatch(/<div\s+class=["'].*?\bwall-bottom\b.*?["']/i);
    expect(wallTopRule).toMatch(/background:\s*#8b7355/i);
    expect(wallBottomRule).toMatch(/background:\s*#8b7355/i);
    expect(wallTopRule).toMatch(/width:\s*39[4-5]px/);
    expect(wallBottomRule).toMatch(/width:\s*39[4-5]px/);
    expect(wallTopRule).toMatch(/height:\s*150px/);
    expect(wallBottomRule).toMatch(/height:\s*150px/);
  });

  // Checkpoint 3: Fingers
  test('correct finger styling', () => {
    const topFingers = (html.match(/<div\s+class=["'].*?\bfinger\s+finger-top\b.*?["']/gi) || []).length;
    const bottomFingers = (html.match(/<div\s+class=["'].*?\bfinger\s+finger-bottom\b.*?["']/gi) || []).length;
    expect(topFingers).toBeGreaterThanOrEqual(4);
    expect(bottomFingers).toBeGreaterThanOrEqual(4);
    expect(fingerRule).toMatch(/background:\s*#4a4a4a/i);
    expect(fingerRule).toMatch(/width:\s*12px/);
    expect(fingerRule).toMatch(/height:\s*20px/);
    expect(fingerTopRule).toMatch(/animation:\s*fingerExtendTop\s+12s/);
    expect(fingerBottomRule).toMatch(/animation:\s*fingerExtendBottom\s+12s/);
  });

  // Checkpoint 4: Eyes
  test('correct eye styling', () => {
    const eyes = (html.match(/<div\s+class=["'].*?\beye\b.*?["']/gi) || []).length;
    expect(eyes).toBeGreaterThanOrEqual(2);
    expect(eyeRule).toMatch(/opacity:\s*0/);
    expect(eyeRule).toMatch(/background:\s*#ff6b6b/i);
    expect(eyeRule).toMatch(/width:\s*25px/);
    expect(eyeRule).toMatch(/border-radius:\s*50%/);
    expect(eyePseudoRule).toMatch(/background:\s*#000/i);
    expect(eyePseudoRule).toMatch(/width:\s*8px/);
  });

  // Checkpoints 5-7: Animations
  test('correct wall animations', () => {
    expect(css).toMatch(/@keyframes\s+wallOpenTop\s*\{[\s\S]*?0%,\s*25%,\s*75%,\s*100%\s*\{[\s\S]*?transform:\s*translateY\(-4px\)/);
    expect(css).toMatch(/@keyframes\s+wallOpenBottom\s*\{[\s\S]*?40%,\s*60%\s*\{[\s\S]*?transform:\s*translateY\(55px\)/);
  });

  test('correct finger animations', () => {
    expect(css).toMatch(/@keyframes\s+fingerExtendTop\s*\{[\s\S]*?40%,\s*60%\s*\{[\s\S]*?height:\s*40px/);
    expect(css).toMatch(/@keyframes\s+fingerExtendBottom\s*\{[\s\S]*?40%,\s*60%\s*\{[\s\S]*?transform:\s*translateY\(-20px\)/);
  });

  test('correct eye animation', () => {
    expect(css).toMatch(/@keyframes\s+eyeBlink\s*\{[\s\S]*?42%,\s*52%,\s*60%,\s*62%\s*\{[\s\S]*?opacity:\s*1/);
    expect(eyeRule).toMatch(/animation:\s*eyeBlink\s+12s/);
  });
});