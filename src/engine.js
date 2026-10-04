import {puzzles,puzzleById,traces} from './data.js';
import {freshLearning,cleanLearning} from './learning.js';
export const STORAGE_KEY='exposed-orbita-v3';
export function normalize(value){return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,' ');}
export function checkAnswer(puzzle,answer,evidence){if(!puzzle.aliases.some(a=>normalize(a)===normalize(answer)))return 'incorrect';return puzzle.routes.some(route=>route.every(id=>evidence.includes(id)))?'correct':'missing-evidence';}
export function exposureRoutes(puzzle){return puzzle.exposureRoutes||puzzle.routes;}
export function remainingRoutes(puzzle,protectedIds=[]){return exposureRoutes(puzzle).filter(route=>route.every(id=>!protectedIds.includes(id)));}
export function protectionIds(puzzle){return [...new Set(exposureRoutes(puzzle).flat())];}
export function dailyPuzzle(date=new Date()){const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(date);const get=t=>parts.find(p=>p.type===t).value;const day=Math.floor(Date.UTC(+get('year'),+get('month')-1,+get('day'))/86400000);return puzzles[((day%puzzles.length)+puzzles.length)%puzzles.length];}
export const freshProgress=()=>({answer:'',saved:[],selected:[],hints:0,status:'open',protected:[],protectionDone:false});
export const freshState=()=>({version:3,progress:{},dailyCompletions:{},likes:[],bookmarks:[],lastPuzzle:null,learning:freshLearning(),tutorialDismissed:false});
export function sanitizeState(raw){let result=freshState();if(!raw||raw.version!==3)return result;for(const [id,value]of Object.entries(raw.progress||{})){if(!puzzleById[id]||!value||typeof value!=='object')continue;const clean=ids=>Array.isArray(ids)?[...new Set(ids.filter(id=>typeof id==='string'&&traces[id]))]:[];const saved=clean(value.saved);result.progress[id]={...freshProgress(),answer:typeof value.answer==='string'?value.answer.slice(0,150):'',saved,selected:clean(value.selected).filter(id=>saved.includes(id)),hints:Math.max(0,Math.min(3,Number(value.hints)||0)),status:['solved','revealed'].includes(value.status)?value.status:'open',protected:clean(value.protected),protectionDone:value.protectionDone===true};}for(const [day,id] of Object.entries(raw.dailyCompletions||{})){if(/^\d{4}-\d{2}-\d{2}$/.test(day)&&puzzleById[id])result.dailyCompletions[day]=id;}result.likes=Array.isArray(raw.likes)?raw.likes.filter(x=>typeof x==='string'):[];result.bookmarks=Array.isArray(raw.bookmarks)?raw.bookmarks.filter(x=>typeof x==='string'):[];result.lastPuzzle=puzzleById[raw.lastPuzzle]?raw.lastPuzzle:null;result.learning=cleanLearning(raw.learning);result.tutorialDismissed=raw.tutorialDismissed===true;return result;}
export function loadState(storage){try{return sanitizeState(JSON.parse(storage.getItem(STORAGE_KEY)));}catch{return freshState();}}
export function progressFor(state,id){return state.progress[id]||(state.progress[id]=freshProgress());}
export function saveState(storage,state){try{storage.setItem(STORAGE_KEY,JSON.stringify(state));return true;}catch{return false;}}

export function dayKey(date=new Date()){const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(date);return ['year','month','day'].map(t=>parts.find(p=>p.type===t).value).join('-');}
export function recordDailyCompletion(state,id,date=new Date()){if(id!==dailyPuzzle(date).id)return false;state.dailyCompletions??={};state.dailyCompletions[dayKey(date)]=id;return true;}
export function dailyCompleted(state,date=new Date()){return state.dailyCompletions?.[dayKey(date)]===dailyPuzzle(date).id;}

// This inspected version owns only this key. Never clear another app's storage.
export function eraseLocalData(storage){try{storage.removeItem(STORAGE_KEY);return true;}catch{return false;}}
export function dailyLocked(state,id,date=new Date()){return id===dailyPuzzle(date).id&&dailyCompleted(state,date);}
