
import * as wrapper from 'solc/wrapper';

const ctx: Worker = self as any;

ctx.addEventListener('message', ({ data }) => {
    importScripts(data.compilerUrl);
    const solc = wrapper((ctx as any).Module);
    const compiled = JSON.parse(solc.compile(JSON.stringify(data.solConfig)));
    ctx.postMessage(compiled);
});
