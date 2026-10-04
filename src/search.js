// Ignore accents, @ prefixes and separators when searching the fictional network.
export function searchWords(value){return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim().split(/\s+/).filter(Boolean);}
export function matchesSearch(text,query){const words=searchWords(query),haystack=searchWords(text).join(' ');return words.every(word=>haystack.includes(word));}
