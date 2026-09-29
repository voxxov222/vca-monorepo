/**
 * CanvasTexture painter for the animated digital VCA slab label.
 * Digital displays are NOT certificates — never invent a grade or live NFC.
 */

export type LabelStyle = 'classic' | 'neon' | 'gold';

export interface DrawVcaLabelOptions {
  cardName?: string;
  cardSet?: string;
  cardNumber?: string;
  /** Real grade only. null/undefined/empty → RAW / UNGRADED. Never invent. */
  grade?: number | string | null;
  gradeText?: string;
  /** Real serial only. null/undefined/empty → DISPLAY PREVIEW · NOT CERTIFIED */
  serialNumber?: string | null;
  labelStyle?: LabelStyle;
  /** 0–100 foil / holo intensity */
  holoIntensity?: number;
  /** Time (seconds) for sheen animation */
  time?: number;
  /** Slab Y rotation (radians) shifts iridescence */
  rotationY?: number;
}

interface Palette {
  stops: [number, string][];
  accent: string;
  ink: string;
  muted: string;
  border: string;
}

const PALETTES: Record<LabelStyle, Palette> = {
  classic: {
    stops: [
      [0, '#22d3ee'],
      [0.25, '#38bdf8'],
      [0.5, '#818cf8'],
      [0.75, '#67e8f9'],
      [1, '#22d3ee'],
    ],
    accent: '#0e4a8a',
    ink: '#05070a',
    muted: '#1e3a5f',
    border: '#1e489d',
  },
  neon: {
    stops: [
      [0, '#fb7185'],
      [0.25, '#f43f5e'],
      [0.5, '#e879f9'],
      [0.75, '#f472b6'],
      [1, '#fb7185'],
    ],
    accent: '#9f1239',
    ink: '#05070a',
    muted: '#4c0519',
    border: '#c3253a',
  },
  gold: {
    stops: [
      [0, '#fbbf24'],
      [0.25, '#f59e0b'],
      [0.5, '#fcd34d'],
      [0.75, '#d97706'],
      [1, '#fbbf24'],
    ],
    accent: '#92400e',
    ink: '#1c1008',
    muted: '#78350f',
    border: '#99702c',
  },
};

function truncate(text: string, max: number): string {
  const t = text.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, Math.max(0, max - 1))}…`;
}

function hasRealGrade(grade: number | string | null | undefined): boolean {
  if (grade === null || grade === undefined) return false;
  if (typeof grade === 'number') return Number.isFinite(grade);
  const s = String(grade).trim();
  if (!s) return false;
  const upper = s.toUpperCase();
  if (upper === 'RAW' || upper === 'UNGRADED' || upper === '—' || upper === '-') return false;
  return true;
}

function formatGradeDisplay(grade: number | string): string {
  const s = String(grade).trim();
  // Strip leading "VCA " so the panel shows the number / short label
  return s.replace(/^VCA\s+/i, '');
}

function drawWifiGlyph(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  scale: number,
  color: string,
): void {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = Math.max(1.5, 2 * scale);
  ctx.lineCap = 'round';
  // Dot
  ctx.beginPath();
  ctx.arc(cx, cy + 6 * scale, 2.2 * scale, 0, Math.PI * 2);
  ctx.fill();
  // Arcs (wifi / NFC-style)
  for (let i = 1; i <= 3; i++) {
    const r = 5 * scale + i * 5 * scale;
    ctx.beginPath();
    ctx.arc(cx, cy + 6 * scale, r, -Math.PI * 0.75, -Math.PI * 0.25);
    ctx.stroke();
  }
  ctx.restore();
}

/**
 * Draw one frame of the digital VCA label onto an existing 2d canvas context.
 * Canvas is expected at 1024×256 (or any 4:1). Coordinates scale to canvas size.
 */
export function drawVcaLabel(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  opts: DrawVcaLabelOptions = {},
): void {
  const {
    cardName = '',
    cardSet = '',
    cardNumber = '',
    grade = null,
    gradeText,
    serialNumber = null,
    labelStyle = 'classic',
    holoIntensity = 55,
    time = 0,
    rotationY = 0,
  } = opts;

  const palette = PALETTES[labelStyle] ?? PALETTES.classic;
  const sx = width / 1024;
  const sy = height / 256;
  const intensity = Math.max(0, Math.min(100, holoIntensity)) / 100;

  ctx.clearRect(0, 0, width, height);

  // Base plate
  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, width, height);

  // Iridescent holographic wash — shifts with time + rotation
  const shift = ((time * 80 + rotationY * 180) % 600) - 100;
  const grad = ctx.createLinearGradient(shift * sx, 0, (width + shift * sx) * 0.6, height);
  for (const [stop, color] of palette.stops) {
    grad.addColorStop(stop, color);
  }
  ctx.globalAlpha = 0.35 + intensity * 0.45;
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);
  ctx.globalAlpha = 1;

  // Soft white overlay so text stays readable
  ctx.fillStyle = 'rgba(255,255,255,0.42)';
  ctx.fillRect(0, 0, width, height);

  // Sweeping sheen band
  const sheenX = ((time * 140 + rotationY * 90) % (width * 1.6)) - width * 0.3;
  ctx.save();
  ctx.globalAlpha = 0.2 + intensity * 0.35;
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(sheenX, 0);
  ctx.lineTo(sheenX + 70 * sx, 0);
  ctx.lineTo(sheenX + 20 * sx, height);
  ctx.lineTo(sheenX - 50 * sx, height);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // Top accent bar
  ctx.fillStyle = palette.border;
  ctx.fillRect(0, 0, width, Math.max(3, 6 * sy));

  // Left: VCA wordmark
  ctx.fillStyle = palette.ink;
  ctx.font = `900 ${Math.round(72 * sy)}px Orbitron, system-ui, sans-serif`;
  ctx.textBaseline = 'middle';
  ctx.fillText('VCA', 28 * sx, height * 0.38);

  // Thin divider
  ctx.strokeStyle = palette.ink;
  ctx.globalAlpha = 0.85;
  ctx.lineWidth = Math.max(2, 3 * sx);
  ctx.beginPath();
  ctx.moveTo(200 * sx, 28 * sy);
  ctx.lineTo(200 * sx, height - 36 * sy);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // Card identity
  const name = truncate(cardName || 'Untitled card', 28);
  const setLine = truncate(
    [cardSet, cardNumber].filter(Boolean).join(' · ') || 'Set · #',
    36,
  );
  ctx.fillStyle = palette.ink;
  ctx.font = `800 ${Math.round(28 * sy)}px system-ui, sans-serif`;
  ctx.fillText(name, 220 * sx, height * 0.28);
  ctx.fillStyle = palette.muted;
  ctx.font = `600 ${Math.round(18 * sy)}px system-ui, sans-serif`;
  ctx.fillText(setLine, 220 * sx, height * 0.48);

  // Serial / honesty line
  const serial =
    serialNumber && String(serialNumber).trim()
      ? truncate(String(serialNumber).trim(), 42)
      : 'DISPLAY PREVIEW · NOT CERTIFIED';
  ctx.fillStyle = palette.muted;
  ctx.font = `600 ${Math.round(14 * sy)}px "JetBrains Mono", ui-monospace, monospace`;
  ctx.fillText(serial, 220 * sx, height * 0.68);

  // Micro honesty footer
  ctx.fillStyle = palette.accent;
  ctx.font = `700 ${Math.round(11 * sy)}px system-ui, sans-serif`;
  ctx.fillText('DIGITAL DISPLAY · NOT A CERTIFICATE', 220 * sx, height * 0.86);

  // Grade panel (right)
  const panelX = width - 200 * sx;
  ctx.strokeStyle = 'rgba(15,23,42,0.18)';
  ctx.lineWidth = 2 * sx;
  ctx.beginPath();
  ctx.moveTo(panelX, 22 * sy);
  ctx.lineTo(panelX, height - 28 * sy);
  ctx.stroke();

  const real = hasRealGrade(grade);
  const gradeDisplay = real ? formatGradeDisplay(grade as number | string) : 'RAW';
  const gradeSub = real
    ? truncate(gradeText?.trim() || 'VCA GRADE', 14)
    : 'UNGRADED';

  ctx.fillStyle = palette.ink;
  const gradeSize = real
    ? (gradeDisplay.length > 3 ? 40 : 52)
    : (gradeDisplay.length > 3 ? 34 : 40);
  ctx.font = `900 ${Math.round(gradeSize * sy)}px Orbitron, system-ui, sans-serif`;
  ctx.textAlign = 'center';
  ctx.fillText(gradeDisplay, panelX + 88 * sx, height * 0.36);
  ctx.font = `800 ${Math.round(14 * sy)}px system-ui, sans-serif`;
  ctx.fillStyle = palette.muted;
  ctx.fillText(gradeSub, panelX + 88 * sx, height * 0.58);
  ctx.textAlign = 'left';

  // NFC-style glyph + DEMO label (not live / REQUIRES_HARDWARE for physical)
  const nfcCx = panelX + 88 * sx;
  const nfcCy = height * 0.72;
  drawWifiGlyph(ctx, nfcCx - 28 * sx, nfcCy - 4 * sy, sx * 0.85, palette.ink);
  ctx.fillStyle = palette.accent;
  ctx.font = `800 ${Math.round(12 * sy)}px system-ui, sans-serif`;
  ctx.textAlign = 'left';
  ctx.fillText('DEMO', nfcCx - 6 * sx, nfcCy + 4 * sy);
  ctx.font = `600 ${Math.round(9 * sy)}px system-ui, sans-serif`;
  ctx.fillStyle = palette.muted;
  ctx.fillText('DIGITAL', nfcCx - 6 * sx, nfcCy + 16 * sy);
}
