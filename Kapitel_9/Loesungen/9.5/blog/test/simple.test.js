function add(i, y) {
    return i + y;
  }
  
  test('Checks if 1 + 2 = 3', () => {
    expect(add(1, 2)).toBe(3);
  });
  