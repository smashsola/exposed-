import {eraseLocalData,STORAGE_KEY} from './engine.js';
const dialog=document.querySelector('#erase-dialog'),status=document.querySelector('#privacy-status');
document.querySelector('#erase-open').onclick=()=>{dialog.showModal();document.querySelector('#erase-cancel').focus();};
document.querySelector('#erase-cancel').onclick=()=>dialog.close();
document.querySelector('#erase-confirm').onclick=()=>{if(eraseLocalData(localStorage)){dialog.close();status.textContent='Dados locais do EXPOSED! apagados. As investigações começarão sem o histórico anterior.';}else status.textContent='Não foi possível apagar os dados neste navegador. Use os controles de dados do próprio navegador.';};
window.addEventListener('storage',e=>{if((e.key===STORAGE_KEY||e.key===null)&&e.newValue===null){dialog.close();status.textContent='Os dados locais do EXPOSED! foram apagados em outra aba.';}});
