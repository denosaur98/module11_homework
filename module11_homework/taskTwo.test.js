import { match } from "../module11_homework/taskTwo.js";
describe('test match function', () => {
    it('should true', () => expect(match('HELLO', 'Hello')).toBe(true));
    it('not toBe undefined', () => expect(match('HELLO', 'Hello')).not.toBe(undefined));
    it('these strings are false', () => expect(match('HELLO', 'Xello')).toBe(false));
});