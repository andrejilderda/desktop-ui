import {
  CSSProperties,
  StyleRule,
} from '@vanilla-extract/css/dist/declarations/src';
import {
  MediaQueries,
  FeatureQueries,
  StyleWithSelectors,
} from '@vanilla-extract/css/dist/declarations/src/types';

// TODO: Rename types?
export type StitchVar = `$$${string}`;

export interface CSSPropertiesWithVarsAndStitchVar extends StyleWithSelectors {
  [k: StitchVar]: CSSProperties[keyof CSSProperties];
}

export interface StitchStyleRule extends StyleRule {
  [k: StitchVar]: CSSProperties[keyof CSSProperties];

  selectors?: {
    [selector: string | StitchVar]: CSSPropertiesWithVarsAndStitchVar &
      MediaQueries<
        CSSPropertiesWithVarsAndStitchVar &
          FeatureQueries<CSSPropertiesWithVarsAndStitchVar>
      > &
      FeatureQueries<
        CSSPropertiesWithVarsAndStitchVar &
          MediaQueries<CSSPropertiesWithVarsAndStitchVar>
      >;
  };
}
