function add(i, y) {
  return i + y;
}

function test_function_add() {
  const result = add(1, 2);

  if (result === 3) {
    console.log('Test Passed');
  } else {
    console.log('Test failed');
  }
}

test_function_add();