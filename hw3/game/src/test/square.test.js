import Square from '../component/square';

test('Square should be defined:',()=>{
    expect(Square).toBeDefined();
})
test("Square's return should be input:",()=>{
    const onClick = jest.fn();
    const val = 0;
    const comp = Square({value:val,onClick:onClick});
    expect(comp.props).toEqual({
        children:0,
        className:"square",
        onClick:onClick
    });
})