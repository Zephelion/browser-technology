import { LocalStorage } from 'node-localstorage';
const localstorage = new LocalStorage('./scratch');

const subjects = [
    {
        id: 'wafs',
        index: 0,
        name: 'Web app from scratch',
    },
    {
        id: 'css',
        index: 1,
        name: 'CSS to the rescue',
    },
    {
        id: 'bt',
        index: 2,
        name: 'Browser technologies',
    },
    {
        id: 'project',
        index: 3,
        name: 'Project',
    },
    {
        id: 'pwa',
        index: 4,
        name: 'Progressive web apps',
    }
];


const index = (req,res) => {
    res.render('index');
}

const introduction = (req,res) => {
    const voornaam = localstorage.getItem('voornaam');
    const email = localstorage.getItem('email');
    const studentnummer = localstorage.getItem('studentnummer');
    res.render('introduction', {voornaam, email, studentnummer});
}

const storePersonalInfo = (req,res) => {
    const voornaam = req.body.voornaam;
    const email = req.body.email;
    const studentnummer = req.body.studentnummer;

    console.log(voornaam, email, studentnummer);

    localstorage.setItem('voornaam', voornaam);
    localstorage.setItem('email', email);
    localstorage.setItem('studentnummer', studentnummer);
    
    res.render('subjects', {subjects});
};

const subject = (req,res) => {
    const id = req.params.id;
    const subject = subjects.find(subject => subject.id === id);
    const nextSubject = subjects[subject.index + 1];

    const docent = localstorage.getItem(subject.id + 'docent');
    const startdatum = localstorage.getItem(subject.id + 'startdatum');
    const einddatum = localstorage.getItem(subject.id + 'einddatum');
    const lesstof = localstorage.getItem(subject.id + 'lesstof');
    const uitleg = localstorage.getItem(subject.id + 'uitleg');
    const inzicht = localstorage.getItem(subject.id + 'inzicht');

    const answers = {
        docent,
        startdatum,
        einddatum,
        lesstof,
        uitleg,
        inzicht
    }

    res.render('questions', {
        subject,
        nextSubject,
        answers
    });
}

const storeAnswers = (req,res) => {
    const id = req.params.id;
    
    var currentSubject = subjects.find(subject => subject.id === id);
    const previousSubject = subjects[currentSubject.index - 1];

    const name = previousSubject.id;
    const docent = req.body[name + 'docent'];
    const startdatum = req.body[name + 'startdatum'];
    const einddatum = req.body[name + 'einddatum'];
    const lesstof = req.body[name + 'lesstof'];
    const uitleg = req.body[name + 'uitleg'];
    const inzicht = req.body[name + 'inzicht'];

    localstorage.setItem(name + 'docent', docent);
    localstorage.setItem(name + 'startdatum', startdatum);
    localstorage.setItem(name + 'einddatum', einddatum);
    localstorage.setItem(name + 'lesstof', lesstof);
    localstorage.setItem(name + 'uitleg', uitleg);
    localstorage.setItem(name + 'inzicht', inzicht);

    const subject = subjects.find(subject => subject.id === id);
    const nextSubject = subjects[subject.index + 1];

    res.render('questions', {
        subject,
        nextSubject
    });
    
}

const storeLastAnswers = (req,res) => {
    const docent = req.body.pwadocent;
    const startdatum = req.body.pwastartdatum;
    const einddatum = req.body.pwaeinddatum;
    const lesstof = req.body.pwalesstof;
    const uitleg = req.body.pwauitleg;
    const inzicht = req.body.pwainzicht;

    localstorage.setItem('pwadocent', docent);
    localstorage.setItem('pwastartdatum', startdatum);
    localstorage.setItem('pwaeinddatum', einddatum);
    localstorage.setItem('pwalesstof', lesstof);
    localstorage.setItem('pwauitleg', uitleg);
    localstorage.setItem('pwainzicht', inzicht);

    res.render('end');
    console.log(docent);
}

export{
    index,
    introduction,
    storePersonalInfo,
    subject,
    storeAnswers,
    storeLastAnswers
}