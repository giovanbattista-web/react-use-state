import React from 'react';
import { useState } from 'react';
import Card from './Card';
import Button from './Button';

const languages = [
    {
        id: 1,
        title: "HTML",
        description: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini."
    },
    {
        id: 2,
        title: "CSS",
        description: "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla il layout, i colori, i caratteri e l'aspetto complessivo di una pagina web."
    },
    {
        id: 3,
        title: "JavaScript",
        description: "JavaScript è un linguaggio di programmazione dinamico utilizzato per lo sviluppo web, che consente contenuti interattivi come grafici animati, pulsanti cliccabili e altre funzionalità dinamiche sui siti web."
    },
    {
        id: 4,
        title: "Node.js",
        description: "Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo agli sviluppatori di usare lo stesso linguaggio sia sul client che sul server."
    },
    {
        id: 5,
        title: "Express",
        description: "Express è un framework per applicazioni web minimalista e veloce per Node.js. Fornisce strumenti robusti per creare applicazioni web e API e semplifica la gestione delle rotte e delle richieste."
    },
    {
        id: 6,
        title: "ReactJS",
        description: "ReactJS è una libreria JavaScript per costruire interfacce utente, in particolare applicazioni a pagina singola. Consente agli sviluppatori di creare componenti UI riutilizzabili e di gestire efficacemente lo stato dell'applicazione."
    }
];

{/*
const Main = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    return (
        <div className='container'>
            <div className='mb-4'>
                {languages.map((language) => (
                    <button onClick={() => setSelectedLanguage(language)} className='btn btn-primary me-3' key={language.id}>{language.title}</button>

                ))}
            </div>
            <div>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>{selectedLanguage.title}</h5>
                        <p className='card-text'>{selectedLanguage.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

*/}

// BONUS
const Main = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const renderSelectedLanguage = () => {
        // CONTROLLO SE LA VARIABILE DI STATO E' NULL OPPURE NULL. SE E' NULL RESTITUISCO UN h3 CON IL MESSAGGIO
        // SELEZIONATO
        if (selectedLanguage === null) {
            return <h3>Nessun linguaggio selezionato</h3>
        }
        // SE NON E' NULL DESTRUTTURO LA VARIABILE selectedLanguage E RESTITUISCO IL TEMPLATE DELLA CARD 
        const { title, description } = selectedLanguage;
        return (
            <>
                <Card title={title} description={description}
                />
            </>
        );
    };

    // FUNZIONE CHE MI MOSTRA I PULSANTI
    const renderButtons = () => {
        return languages.map((language) => {
            // VARIABILE CHE DEFINISCE SE UN PULSANTE E' ATTIVO O MENO
            const active = selectedLanguage != null && language.id === selectedLanguage.id
                ? "btn-warning"
                : "btn-primary";

            return <Button title={language.title}
                key={language.id} isActive={active} onSelect={() => setSelectedLanguage(language)} />;
        })
    };

    return (
        <div className='container'>
            <div className='mb-4'>{renderButtons()}</div>
            <div>{renderSelectedLanguage()}</div>
        </div>
    );
};

export default Main;