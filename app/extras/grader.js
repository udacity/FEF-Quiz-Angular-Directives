try {
  var brick = document.querySelector('.brick-1x1');
  var buyButton = brick.querySelectorAll('button')[0];
  var returnButton = brick.querySelectorAll('button')[1];
  var itemsShouldBeReturned = false;

  buyButton.click();
  buyButton.click();
  buyButton.click();
  buyButton.click();

  if (brick.classList.toString().indexOf('low-stock') >= 0) {
    itemsShouldBeReturned = true;
    window.dispatchEvent(new CustomEvent('buy-button-works', {'detail': 'passed'}));
  }

  returnButton.click();
  returnButton.click();
  returnButton.click();
  returnButton.click();

  if (brick.classList.toString().indexOf('low-stock') === -1 && itemsShouldBeReturned) {
    window.dispatchEvent(new CustomEvent('return-button-works', {'detail': 'passed'}));
  }
}
catch (e) {
  console.log('some elements are not ready to be tested yet');
}
