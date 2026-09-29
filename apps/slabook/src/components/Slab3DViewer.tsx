import { useRef, useState } from 'react';
import { FlipHorizontal2, RotateCcw, ZoomIn } from 'lucide-react';
import {
  Slab3DCanvas,
  type Slab3DCanvasHandle,
} from '@vca/three-slab';
import { Button } from './ui/button';
import type { SlabConfig } from './HoloSlab';
import type { CatalogCard, GradeLabel } from '@/lib/types';

interface Props {
  card: CatalogCard;
  grade: GradeLabel | null;
  serial: string | null;
  config: SlabConfig;
  className?: string;
  frontPhoto?: string;
  backPhoto?: string;
}

/** Map GradeLabel | null → display pieces for the 3D label. Never invent a grade. */
function mapGrade(grade: GradeLabel | null): {
  grade: string | null;
  gradeText: string;
} {
  if (!grade) {
    return { grade: null, gradeText: 'UNGRADED' };
  }
  // Strip "VCA " for the numeric/short side of the panel
  const short = grade.replace(/^VCA\s+/i, '');
  return { grade: short, gradeText: 'VCA GRADE' };
}

/**
 * Bridge from Slabook HoloSlab props → @vca/three-slab Slab3DCanvas.
 * Flip / Reset / Zoom mirror the CSS HoloSlab controls.
 * backPhoto is accepted for API parity but the 3D acrylic view shows the front face.
 */
export default function Slab3DViewer({
  card,
  grade,
  serial,
  config,
  className,
  frontPhoto,
  backPhoto: _backPhoto,
}: Props) {
  const canvasRef = useRef<Slab3DCanvasHandle>(null);
  const [zoom, setZoom] = useState(1);
  const mapped = mapGrade(grade);
  const rawUrl = frontPhoto || card.artUrl;
  const imageUrl = rawUrl ? rawUrl.replace('https://images.pokemontcg.io/', '/proxy-img/') : undefined;

  return (
    <div className={className}>
      <Slab3DCanvas
        ref={canvasRef}
        className="h-[520px] w-full rounded-3xl sm:h-[600px]"
        cardImageUrl={imageUrl}
        cardName={card.name}
        cardSet={card.set}
        cardNumber={card.number}
        grade={config.showGrade ? mapped.grade : null}
        gradeText={mapped.gradeText}
        serialNumber={serial}
        labelStyle={config.labelStyle}
        environment={config.environment}
        lightTint={config.lightTint}
        holoIntensity={config.holo}
        cardOffset={config.cardOffset}
        showGrade={config.showGrade}
        autoSpin={config.autoSpin}
        interactive
      />
      <div className="mt-3 flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          type="button"
          onClick={() => canvasRef.current?.flip()}
        >
          <FlipHorizontal2 className="mr-2 h-4 w-4" />
          Flip
        </Button>
        <Button
          variant="outline"
          size="sm"
          type="button"
          onClick={() => {
            canvasRef.current?.reset();
            setZoom(1);
          }}
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
        <label className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
          <ZoomIn className="h-4 w-4" />
          <input
            aria-label="Slab zoom"
            type="range"
            className="w-20 accent-blue-700 sm:w-32"
            min={65}
            max={125}
            value={Math.round(zoom * 100)}
            onChange={(e) => {
              const next = Number(e.target.value) / 100;
              setZoom(next);
              canvasRef.current?.setZoom(next);
            }}
          />
        </label>
      </div>
      <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[.16em] text-slate-500">
        WebGL stage · {Math.round(zoom * 100)}%
      </p>
    </div>
  );
}
