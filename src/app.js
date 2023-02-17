const ownerRadio = document.querySelector('#owner');
const renterRadio = document.querySelector('#renter');
const cusRenterRadio = document.querySelector('#cusRenter');
const cusSubrenterRadio = document.querySelector('#cusSubrenter');

ownerRadio.addEventListener('click', () => {
    console.log('Az eladó a tulajdonos');
    cusRenterRadio.checked = true;
});
renterRadio.addEventListener('click', () => {
    console.log('Az eladó eleve az bérlő');
    cusSubrenterRadio.checked = true;
});