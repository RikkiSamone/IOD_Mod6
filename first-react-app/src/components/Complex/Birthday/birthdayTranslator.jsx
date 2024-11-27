import { useState } from "react";

const phrases = new Map([
['english', 'Happy Birthday'],
['german', 'Alles Gute zum Geburtstag'],
    ['spanish', 'Feliz Cumpleaños'],
['korean', 'saeng-il chughahaeyo']
]);

function BirthdayTranslator() {

const [currentLanguage, setCurrentLanguage] = useState('english');

const handleChangeLanguage = (newlang) => {
setCurrentLanguage(newlang)
}

return (
<div className="BirthdayTranslator componentBox">
<h3>{phrases.get(currentLanguage)}!
({currentLanguage})</h3>
<button onClick={() =>
handleChangeLanguage('english')}>English</button>
<button onClick={() =>
handleChangeLanguage('german')}>German</button>
<button onClick={() =>
handleChangeLanguage('spanish')}>Spanish</button>
    <button onClick={() =>
handleChangeLanguage('korean')}>Korean</button>
</div>
)
}
/*function BirthdayTranslator() {
const [currentLanguage, setCurrentLanguage] = useState('english');
const [phrase, setPhrase] = useState(phrases.get('english'))
const handleChangeLanguage = (lang) => {
setCurrentLanguage(lang);
setPhrase(phrases.get(lang));
}
return (
<div className="BirthdayTranslator componentBox">
<h3>{phrase}! ({currentLanguage})</h3>
<button onClick={() =>

handleChangeLanguage('english')}>English</button>

<button onClick={() =>

handleChangeLanguage('german')}>German</button>

<button onClick={() =>

handleChangeLanguage('spanish')}>Spanish</button>

        <button onClick={() =>

handleChangeLanguage('korean')}>Korean</button>
</div>
)
}*/
export default BirthdayTranslator;