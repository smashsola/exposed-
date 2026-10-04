import test from 'node:test';
import assert from 'node:assert/strict';
import {matchesSearch} from '../src/search.js';
test('Busca aceita acentos, @, espaços e palavras em ordens diferentes',()=>{assert.ok(matchesSearch('Íris Melo @verso.em.orbita','  @verso.em.orbita '));assert.ok(matchesSearch('Marina Kimberly','kimberly marina'));assert.ok(matchesSearch('Íris Melo','iris'));assert.ok(matchesSearch('qualquer texto','   '));assert.equal(matchesSearch('Tom Vale','marina'),false);});
