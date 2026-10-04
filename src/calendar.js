import {puzzles} from './data.js';
import {dailyPuzzle,dayKey} from './engine.js';

// Archive boundary only: changing it never shifts the existing daily rotation.
export const ARCHIVE_START='2026-09-07';
export function dateForDay(day){
 if(typeof day!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(day))return null;
 const date=new Date(day+'T12:00:00Z');
 return Number.isFinite(date.getTime())&&date.toISOString().slice(0,10)===day?date:null;
}
export function availableDay(day,today=dayKey()){return !!dateForDay(day)&&day>=ARCHIVE_START&&day<=today;}
export function puzzleOnDay(day){const date=dateForDay(day);return date?dailyPuzzle(date):null;}
export function shiftDay(day,offset){const date=dateForDay(day);if(!date)return null;date.setUTCDate(date.getUTCDate()+offset);return date.toISOString().slice(0,10);}
export function shiftMonth(month,offset){const date=dateForDay(month+'-01');if(!date)return null;date.setUTCMonth(date.getUTCMonth()+offset);return date.toISOString().slice(0,7);}
export function latestDayForCase(id,today=dayKey()){
 for(let i=0;i<puzzles.length;i++){const day=shiftDay(today,-i);if(availableDay(day,today)&&puzzleOnDay(day)?.id===id)return day;}
 return null;
}
export function monthCells(month,today=dayKey()){
 const first=dateForDay(month+'-01');if(!first)return [];
 const count=new Date(Date.UTC(first.getUTCFullYear(),first.getUTCMonth()+1,0)).getUTCDate();
 const cells=Array(first.getUTCDay()).fill(null);
 for(let d=1;d<=count;d++){
  const day=month+'-'+String(d).padStart(2,'0');
  cells.push({day,number:d,available:availableDay(day,today),puzzle:availableDay(day,today)?puzzleOnDay(day):null});
 }
 while(cells.length%7)cells.push(null);
 return cells;
}
export function nextArchiveDay(selected,state,today=dayKey()){
 const tomorrow=shiftDay(selected,1);
 if(availableDay(tomorrow,today))return tomorrow;
 const candidates=Array.from({length:puzzles.length},(_,i)=>shiftDay(today,-i)).filter(day=>availableDay(day,today)&&puzzleOnDay(day).id!==puzzleOnDay(selected)?.id);
 return candidates.find(day=>!['solved','revealed'].includes(state.progress[puzzleOnDay(day).id]?.status))||candidates[0]||null;
}
