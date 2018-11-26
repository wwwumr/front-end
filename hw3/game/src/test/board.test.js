import Board from '../component/board'

test('Board should be Defined',()=>{
    const board =new Board();
    expect(board).toBeDefined();
});

test('Board should be Board',()=>{
    const board =new Board();
    expect(board).toEqual(new Board());
});