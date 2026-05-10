import { Injectable } from '@angular/core';

/** Three placement bands shown after the exam (tier score 0–15). */
export type PlacementTierKey = 'a1a2' | 'b1b2' | 'c1';

export interface PlacementScoringInput {
  score?: number | null;
  correctAnswers?: number | null;
  totalQuestions?: number | null;
}

@Injectable({ providedIn: 'root' })
export class EnglishLevelService {
  /**
   * Maps placement data to a 0–15 scale, then to level bands:
   * 0–5 → A1/A2, 6–10 → B1/B2, 11–15 → C1.
   *
   * Prefer `correctAnswers` / `totalQuestions` when present (scaled to 15).
   * Otherwise: if `score` ≤ 15, treat it as the tier score; if > 15, treat as percentage 0–100 and scale to 15.
   */
  tierScore0to15(input: PlacementScoringInput): number {
    const correct = Number(input.correctAnswers);
    const total = Number(input.totalQuestions);
    if (Number.isFinite(total) && total > 0 && Number.isFinite(correct) && correct >= 0) {
      return Math.max(0, Math.min(15, Math.round((correct / total) * 15)));
    }

    const s = Number(input.score);
    if (!Number.isFinite(s)) {
      return 0;
    }
    if (s <= 15) {
      return Math.max(0, Math.min(15, Math.round(s)));
    }
    return Math.max(0, Math.min(15, Math.round((s / 100) * 15)));
  }

  tierKeyFromInput(input: PlacementScoringInput): PlacementTierKey {
    const tier = this.tierScore0to15(input);
    if (tier <= 5) {
      return 'a1a2';
    }
    if (tier <= 10) {
      return 'b1b2';
    }
    return 'c1';
  }

  /** Short label shown next to placement result (A1 / A2, B1 / B2, or C1). */
  englishLevelFromPlacement(input: PlacementScoringInput): string {
    switch (this.tierKeyFromInput(input)) {
      case 'a1a2':
        return 'A1 / A2';
      case 'b1b2':
        return 'B1 / B2';
      default:
        return 'C1';
    }
  }

  /**
   * Backward-compatible helper when only a numeric score is available.
   * Prefer {@link englishLevelFromPlacement} when correct/total exist.
   */
  englishLevelFromScore(score: number): string {
    return this.englishLevelFromPlacement({ score });
  }
}
