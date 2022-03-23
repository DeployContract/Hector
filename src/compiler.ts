// Default values
const DEFAULT_COMPILER_SOURCE_URL = "https://binaries.soliditylang.org/bin/";
const DEFAULT_COMPILER_VERSION = "soljson-latest.js";

interface CompilerConfig {
    // Source that compiler will downloaded from
    source?: string;

    // Version of compiler
    version?: string;
}

export interface CompileConfig {
    compilerUrl: string;
    solConfig: object;
}

export class SolCompiler {
    private config: CompilerConfig;
    private compilerURL: string;

    // creates a new Solidity compiler
    constructor(_config: CompilerConfig) {
        this.config = { ...this.getCompilerDefaults(), ..._config };

        this.compilerURL = this.config.source + this.config.version;
    }

    // Compiler default config
    public getCompilerDefaults(): CompilerConfig {
        return {
            source: DEFAULT_COMPILER_SOURCE_URL,
            version: DEFAULT_COMPILER_VERSION
        } as const;
    }

    public getCompilerFullUrl(): string {
        return this.compilerURL;
    }

    public async compile(data: CompileConfig): Promise<any> {
        return new Promise((resolve, reject) => {
            const worker = new Worker(new URL('./solc.worker.ts', import.meta.url), {
                type: 'module',
            });
            worker.postMessage(data);
            worker.onmessage = function(event: any) {
                resolve(event.data);
            };
            worker.onerror = reject;
        });
    }
}
