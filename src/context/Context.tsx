import React, { useState, useEffect, createContext, ReactNode } from 'react';

// Interfaces
import {ISnippet, ITag} from '../data/interfaces';
import { ISnippets } from '../data/types';

interface IState {
    settingsActive: boolean
    settings: {
        defaultLanguage: string
        modalsActive: boolean
        includeCodeInSearch: boolean
    },
    feedbackModal: {
        modalActive: boolean
        modalType: string
        modalMessage: string
        modalOpacity: string
    },
    saveModal: {
        modalActive: boolean
        name: string
        code: string
    },
    confirmModal: {
        modalActive: boolean
        message: string
        function: Function
    }
    snippets: ISnippets
    tags: string[]
}

interface IGlobalProps {
    openSettings(): void;
    closeSettings(): void;
    settingsToggle(setting: string, bool: boolean): void;

    saveSettingsToLocalStorage(setting: string, newValue: any): void;
    getFromLocalStorage(key: string): any[]; // Should rather be something like: string[] | ISnippets
    saveSnippetsToLocalStorage(snippet: ISnippet): void;
    removeSnippet(id: number): void;

    displayFeedbackModal(type: string, message: string): void;
    closeFeedbackModal(): void;

    displaySaveModal(code: string): void;
    closeSaveModal(): void;

    displayConfirmModal(message:string, action:Function): void;
    closeConfirmModal(): void
    State: IState;
}

export const Context = createContext<IGlobalProps | undefined>(undefined);

// Creates a bunch of global functions and values accessible to every part of the application
export function ContextProvider(props: { children: ReactNode }) {
    const [State, setState] = useState<IState>({
        settingsActive: false,
        settings: getSettingsFromLocalStorage(),
        feedbackModal: {
            modalActive: false,
            modalType: '',
            modalMessage: '',
            modalOpacity:'0%'
        },
        saveModal: {
            modalActive: false,
            name: '',
            code: ''
        },
        confirmModal: {
            modalActive: false,
            message: '',
            function: ()=>{}
        },
        snippets: getFromLocalStorage('snippets'),
        tags: getFromLocalStorage('tags')
    });

    useEffect(() => {
        localStorage.setItem('settings',JSON.stringify(State.settings));
    }, [State]);

    function getSettingsFromLocalStorage() {
        const settings: string | null = localStorage.getItem("settings");

        if (settings) {
            try {
                // Parse the JSON string and return as an array of Snippets
                var parsedData;
                parsedData = JSON.parse(settings);
                return parsedData;
            } catch (error) {
                return [];
            }
        } else {
            // Default settings:
            let defaultSettings = {
                defaultLanguage: 'Javascript',
                modalsActive: true,
                includeCodeInSearch: false
            }
            localStorage.setItem('settings',JSON.stringify(defaultSettings));
        }
    }
    function saveSettingsToLocalStorage(setting: string, newValue: any) {
        setState(prevState => ({
            ...prevState,
            settings: {
                ...prevState.settings,
                [setting]: newValue
            }
        } as IState));
    }

    function settingsToggle(setting: string, bool: boolean) {
        setState(prevState => ({
            ...prevState,
            settings: {
                ...prevState.settings,
                [setting]: bool
            }
        }));
    }
    

    function getFromLocalStorage(key: string) {
        const storedData: string | null = localStorage.getItem(key);
        
        if (storedData) {
            try {
                // Parse the JSON string and return as an array of Snippets
                var parsedData;
                parsedData = JSON.parse(storedData);
                return parsedData;
            } catch (error) {
                return [];
            }
        } else {
            // Return an empty array if no data is found in localStorage
            return [];
        }
    }

    function removeSnippet(id: number) {
        try {
            const storedData: string | null = localStorage.getItem('snippets');
            if (storedData) {
                const parsedData: any[] = JSON.parse(storedData);
                const updatedData = parsedData.filter(item => item.id !== id);

                setState(prevState => ({
                    ...prevState,
                    snippets: updatedData
                }));
                localStorage.setItem('snippets', JSON.stringify(updatedData));
            }
        } catch (error) {
            console.error(`Error occurred while removing item with ID ${id} from local storage:`, error);
        }
    }

    function saveSnippetsToLocalStorage(snippet: ISnippet) {
        try {
            if (localStorage) {
                var existingSnippets: ISnippet[] = JSON.parse(localStorage.getItem('snippets') || '[]');

                // Find the highest existing id
                const existingIds = existingSnippets.map(snippet => snippet.id);
                const maxId = Math.max(...existingIds, 0);

                var newSnippet: ISnippet = { ...snippet, id: maxId + 1 };
                var newSnippets: ISnippet[] = [...existingSnippets, newSnippet];

                setState(prevState => ({
                    ...prevState,
                    snippets: newSnippets
                }));
    
                localStorage.setItem('snippets', JSON.stringify(newSnippets));
                displayFeedbackModal('info', 'Successfully added new code!');
            } else {
                displayFeedbackModal('error', 'Could not access local storage');
            }
        } catch (error) {
            displayFeedbackModal('error', 'Could not store the code in local storage');
        }   
    }

    function openSettings() {
        setState(prevState => ({
            ...prevState,
            settingsActive: true
        }));
    }
    function closeSettings() {
        setState(prevState => ({
            ...prevState,
            settingsActive: false
        }));
    }

    function displayFeedbackModal(type: string, message: string) {
        if (State.settings.modalsActive === true) {
        setState(prevState => ({
            ...prevState,
            feedbackModal: {
                modalActive: true,
                modalType: type,
                modalMessage: message,
                modalOpacity:'100%'
            }
        }));
        } else {
            return
        }
    }

    // Add effects some other time
    function closeFeedbackModal() {
        setState(prevState => ({
            ...prevState,
            feedbackModal: {
                ...prevState.feedbackModal,
                modalActive: false,
                modalType: '',
                modalMessage: '',
            }
        }));
    }

    function displaySaveModal(code: string) {
        // displayFeedbackModal('error','Save function has not been added yet.')
        let snippetCode = code;

        setState(prevState => ({
            ...prevState,
            saveModal: {
                modalActive: true,
                name: '',
                code: snippetCode
            }
        }));
    }
    function closeSaveModal() {
        setState(prevState => ({
            ...prevState,
            saveModal: {
                modalActive: false,
                name: '',
                code: ''
            }
        }));
    }

    function displayConfirmModal(message: string, action: Function) {
        setState(prevState => ({
            ...prevState,
            confirmModal: {
                modalActive: true,
                message: message,
                function: action
            }
        }));
    }
    function closeConfirmModal() {
        setState(prevState => ({
            ...prevState,
            confirmModal: {
                modalActive: false,
                message: '',
                function: ()=>{}
            }
        }));
    }

    return (
        <Context.Provider 
        value={{ 
            saveSnippetsToLocalStorage,
            getFromLocalStorage,
            saveSettingsToLocalStorage,
            removeSnippet,

            openSettings,
            closeSettings, 
            settingsToggle,
            
            displayFeedbackModal, 
            closeFeedbackModal, 

            displaySaveModal, 
            closeSaveModal, 

            displayConfirmModal,
            closeConfirmModal,
            
            State }}>
            {props.children}
        </Context.Provider>
    );
}