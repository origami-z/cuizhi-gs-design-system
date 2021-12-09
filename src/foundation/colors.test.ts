import { addAlpha } from './colors'

describe('addAlpha', () => {
    test('converts hex base color', () => {
        expect(addAlpha('#abcdef', 0.8)).toEqual('rgba(171,205,239,0.80)')
    })

    test('converts rgb base color', () => {
        expect(addAlpha('rgba(211, 45, 71)', 0.42)).toEqual('rgba(211,45,71,0.42)')
    })
})