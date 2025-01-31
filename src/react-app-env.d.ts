/// <reference types="react-scripts" />

import type * as monacoAPI from 'monaco-editor/esm/vs/editor/editor.api';
import type { OldAsyncAPIDocument as AsyncAPIDocument, ParseOutput } from '@asyncapi/parser/cjs';

declare global {
  interface Window {
    // needed by monaco YAML plugin and Studio
    monaco: typeof monacoAPI;
    Editor: monacoAPI.editor.IStandaloneCodeEditor;
    MonacoEnvironment: monacoAPI.Environment | undefined;
    ParsedSpec?: AsyncAPIDocument;
    ParsedExtras?: ParseOutput['extras'];
  }
}
