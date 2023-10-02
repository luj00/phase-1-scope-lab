// Declare customerName in global scope
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob'; // Declare and define bestCustomer
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Overwrite bestCustomer
}

// Define the changeLeastFavoriteCustomer function
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'mary'; // Declare and define leastFavoriteCustomer
}

it('returns the customerName', function () {
  expect(customerName).to.equal('bob');
});

it('modifies the customerName variable', function () {
  upperCaseCustomerName();
  expect(customerName).to.equal('BOB');
});

it('setBestCustomer', function () {
  setBestCustomer();
  expect(bestCustomer).to.equal('not bob'); // Assuming you want it to be 'not bob'
});

it('overwrites the best customer', function () {
  overwriteBestCustomer();
  expect(bestCustomer).to.equal('maybe bob');
});

it('unsuccessfully tries to reassign the least favorite customer', function () {
  leastFavoriteCustomer = 'initial least favorite';
  try {
    changeLeastFavoriteCustomer();
    // Add an assertion here to fail the test if the function doesn't throw an error
    expect.fail('Expected an error to be thrown.');
  } catch (e) {
    expect(e.message).to.equal("Attempted to reassign least favorite customer");
  }
  expect(leastFavoriteCustomer).to.equal('initial least favorite');
});

