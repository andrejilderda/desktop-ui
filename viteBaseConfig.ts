import path from 'path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import { UserConfigExport } from 'vite';
import dts from 'vite-dts';

export function getBaseViteConfig(
  dirname: string,
  override?: UserConfigExport,
): UserConfigExport {
  const isExternal = (id: string) =>
    !id.startsWith('.') && !path.isAbsolute(id);

  return {
    esbuild: {
      jsxInject: "import React from 'react'",
    },
    build: {
      lib: {
        entry: path.resolve(dirname, 'src/index.ts'),
        formats: ['es'],
      },
      rollupOptions: {
        external: isExternal,
      },
    },
    plugins: [dts(), vanillaExtractPlugin()],
    ...override,
  };
}
