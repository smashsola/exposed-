import {mkdir,cp,readFile,writeFile,rm,lstat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(fileURLToPath(new URL('..',import.meta.url)));
const output=path.join(root,'dist');
// Only clear this project's generated output, never a symlink or another path.
if(path.relative(root,output)!=='dist'||(await lstat(output).catch(()=>null))?.isSymbolicLink())throw Error('Destino de build inválido');
await rm(output,{recursive:true,force:true});
await mkdir(output,{recursive:true});
for(const entry of ['index.html','privacidade.html','favicon.svg','src'])await cp(path.join(root,entry),path.join(output,entry),{recursive:true});
await mkdir(path.join(output,'assets'),{recursive:true});
for(const entry of ['pixel','fonts'])await cp(path.join(root,'assets',entry),path.join(output,'assets',entry),{recursive:true});
const html=await readFile(path.join(output,'index.html'),'utf8');
if(!html.includes('EXPOSED!'))throw Error('Título ausente');
await writeFile(path.join(output,'_headers'),'/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: no-referrer\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n');
console.log('EXPOSED! pronto em dist/ — somente WebP individuais e fontes locais.');
