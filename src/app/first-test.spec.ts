describe('myFirstTest', () => {
  let sut;

  beforeEach( () => {
    sut = {}
  })

  it('Should be true if true', () => {
    // arrange
    sut.a = false

    // action
    sut.a = true

    // assert
    expect(sut.a).toBe(true)
  })
})
