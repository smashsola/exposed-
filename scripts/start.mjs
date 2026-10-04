import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const project=path.resolve(fileURLToPath(new URL('..',import.meta.url)));
const url='http://127.0.0.1:4173/';
async function health(){try{const r=await fetch(url+'__exposed_health',{signal:AbortSignal.timeout(1200)});return r.ok?await r.json():null;}catch{return null;}}
try{
 let status=await health();
 if(!status){
  const child=spawn(process.execPath,[path.join(project,'scripts/serve.mjs')],{cwd:project,detached:true,windowsHide:true,stdio:'ignore'});
  let failed=false;child.on('error',()=>failed=true);child.unref();
  for(let i=0;i<24&&!failed;i++){await new Promise(r=>setTimeout(r,250));status=await health();if(status)break;}
 }
 if(status?.app!=='exposed-orbita'||path.resolve(status.project||'')!==project)throw Error('O servidor nao iniciou nesta pasta. A porta 4173 pode estar ocupada por outra copia.');
 console.log('EXPOSED! pronto: '+url);
 if(!process.argv.includes('--no-browser')){const browser=spawn('explorer.exe',[url],{windowsHide:true,detached:true,stdio:'ignore'});browser.on('error',()=>console.log('Abra '+url+' no navegador.'));browser.unref();}
}catch(error){console.error(error.message);process.exitCode=1;}
