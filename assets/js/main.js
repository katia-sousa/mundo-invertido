import { subscribeToHellfireClub } from './firebase/hellfire-clube.js';

/*debugger*/

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');


btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    const subscribeId = await subscribeToHellfireClub(subscription)
    console.log('sucesso: ${subscribeId}')

    txtName.value = '',
    txtEmail.value = '',
    txtLevel.value = '',
    txtCharacter.value = ''
});


