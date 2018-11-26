import Game from '../component/game'

test('Game should be Defined',()=>{
    const game =new Game();
    expect(game).toBeDefined();
});

test('Board should be Board',()=>{
    const game =new Game();
    expect(game).toEqual(new Game());
});