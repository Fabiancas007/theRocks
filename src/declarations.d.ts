declare module '*.webp';

// Definir el tipo __WebpackModuleApi si es necesario
declare namespace __WebpackModuleApi {
  interface RequireContext {
    (id: string): any;
    keys(): string[];
    resolve(id: string): string;
  }
}

declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): __WebpackModuleApi.RequireContext;
};